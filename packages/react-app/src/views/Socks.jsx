import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, List, Spin } from "antd";
import { NftExcludeFilters, Alchemy, Network } from "alchemy-sdk";
import { Address } from "../components";
import { ethers } from "ethers";
import axios from "axios";

import SockCard from "../components/SockCard";

function Socks({
  writeContracts,
  yourSocks,
  tx,
  mainnetProvider,
  blockExplorer,
  transferToAddresses,
  setTransferToAddresses,
  address,
  alchemyKey,
  readContracts,
  totalSupply,
}) {
  const [allSocks, setAllSocks] = useState();
  const [page, setPage] = useState(1);
  const [loadingSocks, setLoadingSocks] = useState(true);
  const perPage = 8;

  const settings = {
    apiKey: alchemyKey,
    network: Network.ETH_GOERLI,
  };

  const alchemy = new Alchemy(settings);

  const omitMetadata = false;
  const thatSocksContract = writeContracts?.ThisSocks?.address;

  useEffect(() => {
    const updateAllSocks = async () => {
      if (thatSocksContract) {
        setLoadingSocks(true);
        const response = await alchemy.nft.getNftsForContract(thatSocksContract, {
          omitMetadata: omitMetadata,
        });

        console.log(response);
        setAllSocks(response?.nfts);
        console.log(allSocks);
        setLoadingSocks(false);
      }
    };
    updateAllSocks();
  }, [page, readContracts, totalSupply, thatSocksContract]);

  return (
    <div>
      <div style={{ width: "auto", margin: "auto", paddingBottom: 25, minHeight: 800 }}>
        <div>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            pagination={{
              total: totalSupply,
              defaultPageSize: perPage,
              defaultCurrent: page,
              onChange: currentPage => {
                setPage(currentPage);
              },
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${totalSupply} items`,
            }}
            loading={loadingSocks}
            dataSource={allSocks}
            renderItem={item => {
              const id = item.tokenId;

              return (
                <List.Item key={id + "_" + "_" + item.owner}>
                  <SockCard
                    image={item.rawMetadata.image}
                    id={id}
                    name={item.rawMetadata.name}
                    description={item.rawMetadata.description}
                    color={item.rawMetadata.attributes[4].value}
                    owner={item.rawMetadata.owner}
                    mainnetProvider={mainnetProvider}
                    blockExplorer={blockExplorer}
                    yourSocks
                    tx={tx}
                    transferToAddresses={transferToAddresses}
                    setTransferToAddresses={setTransferToAddresses}
                    writeContracts={writeContracts}
                    address={address}
                  />
                </List.Item>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Socks;
