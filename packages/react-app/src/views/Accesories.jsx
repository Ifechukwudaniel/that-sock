import { Button, Select, Switch, List } from "antd";
import React, { useState, useEffect } from "react";
import { Address, AddressInput } from "../components";
import { ethers } from "ethers";
import { useContractReader } from "eth-hooks";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Accesories({
  userSigner,
  readContracts,
  writeContracts,
  tx,
  loadWeb3Modal,
  blockExplorer,
  mainnetProvider,
  address,
  accesories,
  DEBUG,
  perPage,
  gasPrice,
}) {
  DEBUG && console.log("Accesories: ", accesories);
  const [transferToAddresses, setTransferToAddresses] = useState({});
  const [selectedAccesory, setSelectedAccesory] = useState(accesories[0]);
  DEBUG && console.log("selected Accesory: ", selectedAccesory);

  // 🧠 This effect will update Accesory by polling when your balance changes
  const [priceToMint, setPriceToMint] = useState();

  const [showMineTokenOnly, setShowMineTokenOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      const priceToMint = readContracts[selectedAccesory] && (await readContracts[selectedAccesory].price());
      if (priceToMint) {
        setPriceToMint(priceToMint);
      }
    };
    fetchPrice();
  }, [address, readContracts, selectedAccesory]);

  const [yourCollectibles, setYourCollectibles] = useState();
  DEBUG && console.log("🤗 priceToMint:", priceToMint);

  const balanceContract = useContractReader(readContracts, selectedAccesory, "balanceOf", [address]);
  const allbalanceContract = useContractReader(readContracts, selectedAccesory, "totalSupply");

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const updateBalance = async () => {
      if (showMineTokenOnly && balanceContract) {
        setBalance(balanceContract);
      }
      if (!showMineTokenOnly && allbalanceContract) {
        setBalance(allbalanceContract);
      }
    };
    updateBalance();
  }, [showMineTokenOnly, allbalanceContract, balanceContract]);

  DEBUG && console.log("Accessories ", selectedAccesory, " Balance: ", balance);

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
              readContracts[selectedAccesory] &&
              (await readContracts[selectedAccesory].tokenOfOwnerByIndex(address, tokenIndex));
          } else {
            tokenId =
              readContracts[selectedAccesory] && (await readContracts[selectedAccesory].tokenByIndex(tokenIndex));
          }
          DEBUG && console.log("tokenId: " + tokenId);
          const tokenURI = readContracts[selectedAccesory] && (await readContracts[selectedAccesory].tokenURI(tokenId));
          DEBUG && console.log("tokenURI: " + tokenURI);
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
    if (address) {
      setLoading(true);
      updateYourCollectibles();
      setLoading(false);
    }
  }, [accesories, DEBUG, address, readContracts, showMineTokenOnly, page, perPage, selectedAccesory, balance]);

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
          <div>
            <Select
              style={{
                width: 120,
                margin: 10,
              }}
              defaultValue={selectedAccesory}
              onChange={value => {
                DEBUG && console.log("🤗 setSelectedAccesory:", value);
                setBalance(0);
                setSelectedAccesory(value);
              }}
            >
              {accesories.map(accesory => (
                <Select.Option value={accesory}>{accesory}</Select.Option>
              ))}
            </Select>

            <Button
              type={"primary"}
              onClick={async () => {
                const priceRightNow =
                  readContracts[selectedAccesory] && (await readContracts[selectedAccesory].price());
                DEBUG && console.log("🤗 priceRightNow:", priceRightNow);
                try {
                  tx(
                    writeContracts[selectedAccesory] &&
                      writeContracts[selectedAccesory].mintItem({ value: priceRightNow, gasLimit: 500000 }),
                    function (transaction) {},
                  );
                } catch (e) {
                  DEBUG && console.log("mint failed", e);
                }
              }}
            >
              MINT {selectedAccesory} for Ξ{priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)}s
            </Button>
          </div>
        ) : (
          <Button type={"primary"} onClick={loadWeb3Modal}>
            CONNECT WALLET
          </Button>
        )}
        <div style={{ margin: 10 }}>
          {showMineTokenOnly ? "Mine " : "All "}
          <Switch
            checked={showMineTokenOnly}
            onChange={() => {
              setShowMineTokenOnly(!showMineTokenOnly);
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth: 1800, display: "flex", flexWrap: "wrap", margin: "auto" }}>
        {
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
            loading={loading}
            dataSource={yourCollectibles}
            renderItem={nft => {
              const id = nft.id.toNumber();
              return (
                <List.Item key={id + "_" + nft.uri + "_" + nft.owner}>
                  <div style={{ width: "70%", height: "40%", border: "1px solid" }}>
                    <div>{nft.name}</div>
                    <div>
                      <a
                        href={
                          "https://opensea.io/assets/" +
                          (readContracts &&
                            readContracts[selectedAccesory] &&
                            readContracts[selectedAccesory].address) +
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
                          tx(
                            writeContracts[selectedAccesory] &&
                              writeContracts[selectedAccesory].transferFrom(address, transferToAddresses[id], id),
                          );
                        }}
                      >
                        Transfer
                      </Button>
                    </div>
                  </div>
                </List.Item>
              );
            }}
          />
        }
      </div>
    </div>
  );
}

export default Accesories;
