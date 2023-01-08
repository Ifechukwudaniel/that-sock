import { Button, Switch, List } from "antd";
import React, { useState, useEffect } from "react";
import { Address, AddressInput } from "../components";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({
  userSigner,
  readContracts,
  writeContracts,
  tx,
  loadWeb3Modal,
  blockExplorer,
  mainnetProvider,
  address,
  setSelectedCollectible,
  ContractName,
  showModal,
  DEBUG,
  perPage,
  gasPrice,
}) {
  const [transferToAddresses, setTransferToAddresses] = useState({});

  const [showMineTokenOnly, setShowMineTokenOnly] = useState(false);

  // 🧠 This effect will update yourCollectibles by polling when your balance changes
  const balanceContract = useContractReader(readContracts, ContractName, "balanceOf", [address]);
  const allbalanceContract = useContractReader(readContracts, ContractName, "totalSupply");
  const [balance, setBalance] = useState();

  const priceToMint = useContractReader(readContracts, ContractName, "price");
  DEBUG && console.log("🤗 priceToMint:", priceToMint);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (showMineTokenOnly && balanceContract) {
      setBalance(balanceContract);
    }
    if (!showMineTokenOnly && allbalanceContract) {
      setBalance(allbalanceContract);
    }
  }, [showMineTokenOnly, allbalanceContract, balanceContract]);

  const [yourCollectibles, setYourCollectibles] = useState();

  DEBUG && console.log("Home: " + address + ", Balance: " + balance);

  useEffect(() => {
    const updateYourCollectibles = async () => {
      const collectibleUpdate = [];
      const startIndex = (page - 1) * perPage;
      const endIndex = Math.min(page * perPage, balance);
      for (let tokenIndex = startIndex; tokenIndex < endIndex; ++tokenIndex) {
        try {
          DEBUG && console.log("Getting token index " + tokenIndex);
          let tokenId = 0;
          if (showMineTokenOnly) {
            tokenId =
              readContracts[ContractName] &&
              (await readContracts[ContractName].tokenOfOwnerByIndex(address, tokenIndex));
          } else {
            tokenId = readContracts[ContractName] && (await readContracts[ContractName].tokenByIndex(tokenIndex));
          }
          DEBUG && console.log("tokenId: " + tokenId);
          const tokenURI = readContracts[ContractName] && (await readContracts[ContractName].tokenURI(tokenId));
          const jsonManifestString = Buffer.from(tokenURI.substring(29), "base64").toString();
          DEBUG && console.log("jsonManifestString: " + jsonManifestString);

          try {
            const jsonManifest = JSON.parse(jsonManifestString);
            DEBUG && console.log("jsonManifest: " + jsonManifest);
            collectibleUpdate.push({ id: tokenId, uri: tokenURI, owner: address, ...jsonManifest });
          } catch (err) {
            DEBUG && console.log(err);
          }
        } catch (err) {
          DEBUG && console.log(err);
        }
      }
      setYourCollectibles(collectibleUpdate);
    };
    if (address && balance) updateYourCollectibles();
  }, [ContractName, DEBUG, address, balance, readContracts, page, perPage, showMineTokenOnly]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          maxWidth: 1800,
          margin: "auto",
          marginTop: 32,
          paddingBottom: 32,
          justifyContent: "center",
        }}
      >
        {userSigner ? (
          <Button
            type={"primary"}
            onClick={async () => {
              const priceRightNow = readContracts[ContractName] && (await readContracts[ContractName].price());
              try {
                const mintTx = tx(
                  writeContracts[ContractName].mintItem({ value: priceRightNow, gasLimit: 500000 }),
                  function (transaction) {},
                );
                console.log(mintTx);
              } catch (e) {
                DEBUG && console.log("mint failed", e);
              }
            }}
          >
            MINT Parrot for Ξ{priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)}s
          </Button>
        ) : (
          <Button type={"primary"} onClick={loadWeb3Modal}>
            CONNECT WALLET
          </Button>
        )}
        <div style={{ marginLeft: 32 }}>
          {showMineTokenOnly ? "Mine " : "All "}
          <Switch
            checked={showMineTokenOnly}
            onChange={() => {
              setShowMineTokenOnly(!showMineTokenOnly);
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth: 1800, display: "flex", flexWrap: "wrap", margin: "auto", justifyContent: "center" }}>
        {yourCollectibles && (
          <List
            grid={{
              gutter: 16,
            }}
            pagination={{
              total: balance,
              defaultPageSize: perPage,
              defaultCurrent: page,
              onChange: currentPage => {
                setPage(currentPage);
              },
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${balance} items`,
            }}
            dataSource={yourCollectibles}
            renderItem={nft => {
              const id = nft.id.toNumber();
              return (
                <List.Item key={id + "_" + nft.uri + "_" + nft.owner}>
                  <div style={{ width: "80%", height: "50%", border: "1px solid" }}>
                    <div>{nft.name}</div>
                    <div>
                      <a
                        href={
                          "https://opensea.io/assets/" +
                          (readContracts && readContracts.YourCollectible && readContracts.YourCollectible.address) +
                          "/" +
                          nft.id
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img width="100%" height="100%" src={nft.image} alt={nft.description} />
                      </a>
                    </div>
                    <div style={{ marginBottom: "10px" }}>{nft.description}</div>
                    <div>
                      owner:{" "}
                      <Address
                        address={nft.owner}
                        ensProvider={mainnetProvider}
                        blockExplorer={blockExplorer}
                        fontSize={16}
                      />
                      <AddressInput
                        ensProvider={mainnetProvider}
                        placeholder="transfer to address"
                        value={transferToAddresses[id]}
                        onChange={newValue => {
                          const update = {};
                          update[id] = newValue;
                          setTransferToAddresses({ ...transferToAddresses, ...update });
                        }}
                      />
                      <Button
                        onClick={() => {
                          tx(writeContracts[ContractName].transferFrom(address, transferToAddresses[id], id));
                        }}
                      >
                        Transfer
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{ margin: "10px" }}
                        onClick={() => {
                          setSelectedCollectible(nft.id);
                          // history.push("/preview");
                          showModal();
                        }}
                      >
                        Upgrade/Degrade
                      </Button>
                    </div>
                  </div>
                </List.Item>
              );
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
