import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, List, Spin } from "antd";
import { Address, AddressInput } from "../components";
import { ethers } from "ethers";

import "./YourSocks.css";
import SocksCard from "../components/SocksCard";

function YourSocks({
  readContracts,
  writeContracts,
  priceToMint,
  yourSocks,
  tx,
  mainnetProvider,
  blockExplorer,
  transferToAddresses,
  setTransferToAddresses,
  address,
  loading,
}) {
  return (
    <div className="your-socks">
      <h2 className="your-socks__title">Your Private Collection of Socks </h2>
      <p className="your-socks__description">These are all socks you’ve minted. </p>
      <div style={{ margin: "auto", paddingBottom: 25 }}>
        <List
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 6,
          }}
          dataSource={yourSocks}
          renderItem={item => {
            const id = item.id;

            return (
              <List.Item key={id + "_" + "_" + item.owner} style={{ maxWidth: "320px" }}>
                <SocksCard
                  image={item.image}
                  id={id}
                  name={item.name}
                  description={item.description}
                  owner={item.owner}
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
  );
}

export default YourSocks;
