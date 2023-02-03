import { Button, Switch, List } from "antd";
import React, { useState, useEffect } from "react";
import { Address, AddressInput } from "../components";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import MintCard from "../components/MintCard";
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
  ContractName,
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
  // DEBUG && console.log("🤗 priceToMint:", priceToMint);

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

  // DEBUG && console.log("Home: " + address + ", Balance: " + balance);

  useEffect(() => {
    const updateYourCollectibles = async () => {
      const collectibleUpdate = [];
      const startIndex = (page - 1) * perPage;
      const endIndex = Math.min(page * perPage, balance);
      for (let tokenIndex = startIndex; tokenIndex < endIndex; ++tokenIndex) {
        try {
          // DEBUG && console.log("Getting token index " + tokenIndex);
          let tokenId = 0;
          if (showMineTokenOnly) {
            tokenId =
              readContracts[ContractName] &&
              (await readContracts[ContractName].tokenOfOwnerByIndex(address, tokenIndex));
          } else {
            tokenId = readContracts[ContractName] && (await readContracts[ContractName].tokenByIndex(tokenIndex));
          }
          // DEBUG && console.log("tokenId: " + tokenId);
          const tokenURI = readContracts[ContractName] && (await readContracts[ContractName].tokenURI(tokenId));
          const jsonManifestString = Buffer.from(tokenURI.substring(29), "base64").toString();
          // DEBUG && console.log("jsonManifestString: " + jsonManifestString);

          try {
            const jsonManifest = JSON.parse(jsonManifestString);
            // DEBUG && console.log("jsonManifest: " + jsonManifest);
            collectibleUpdate.push({ id: tokenId, uri: tokenURI, owner: address, ...jsonManifest });
          } catch (err) {
            // DEBUG && console.log(err);
          }
        } catch (err) {
          // DEBUG && console.log(err);
        }
      }
      setYourCollectibles(collectibleUpdate);
    };
    if (address && balance) updateYourCollectibles();
  }, [ContractName, DEBUG, address, balance, readContracts, page, perPage, showMineTokenOnly]);

  return (
    <div>
      <MintCard />
    </div>
  );
}

export default Home;
