import { Button, Select } from "antd";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Preview({
  userSigner,
  readContracts,
  writeContracts,
  tx,
  loadWeb3Modal,
  blockExplorer,
  mainnetProvider,
  address,
  accesories,
  selectedCollectible,
  ContractName,
  selectedAccesory,
  setSelectedAccesory,
  yourAccesories,
  yourCollectibleSVG,
  selectedAccesoryBalance,
  previewAccesory,
  setPreviewAccesory,
  DEBUG,
  gasPrice,
}) {
  const [transferToAddresses, setTransferToAddresses] = useState({});
  const [yourPreviewSVG, setPreviewSVG] = useState();

  // 🧠 This effect will update Accesory by polling when your balance changes
  const [priceToMint, setPriceToMint] = useState();

  const initialPreview = {};
  const [previewOperation, setPreviewOperation] = useState();

  useEffect(() => {
    const fetchPrice = async () => {
      const priceToMint = readContracts[selectedAccesory] && (await readContracts[selectedAccesory].price());
      if (priceToMint) {
        setPriceToMint(priceToMint);
      }
    };

    fetchPrice();
  }, [address, readContracts, selectedAccesory]);

  DEBUG && console.log("selectedCollectible: ", selectedCollectible);
  DEBUG && console.log("Accesories: ", accesories);
  DEBUG && console.log("🤗 priceToMint:", priceToMint);
  DEBUG && console.log("selected Accesory: ", selectedAccesory);
  DEBUG && console.log("previewOperation: ", previewOperation);
  DEBUG && console.log("previewAccesory: ", previewAccesory);

  useEffect(() => {
    const updatePreview = async () => {
      const tokenId = selectedCollectible;
      DEBUG && console.log("tokenId: " + tokenId);
      const svg = readContracts[ContractName] && (await readContracts[ContractName].renderTokenById(tokenId));
      let accesorySVG = "";
      for (const accesory in previewAccesory) {
        accesorySVG +=
          readContracts[accesory] && (await readContracts[accesory].renderTokenById(previewAccesory[accesory]));
      }
      const newPreviewSVG =
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300" viewBox="0 0 880 880">' +
        accesorySVG +
        svg +
        "</svg>";
      setPreviewSVG(newPreviewSVG);
    };
    updatePreview();
  }, [selectedCollectible, previewAccesory, DEBUG]);

  const checkForAccesories = async accesory => {
    const contractAddress = readContracts[accesory] && (await readContracts[accesory].address);
    try {
      const hasAccesory =
        readContracts[ContractName] &&
        selectedCollectible &&
        (await readContracts[ContractName].hasNft(contractAddress, selectedCollectible));
      return hasAccesory;
    } catch (e) {
      DEBUG && console.log(e);
      return false;
    }
  };

  useEffect(() => {
    const fetchAccesoryStatue = async () => {
      const newpreviewOperation = {};
      for (let accesory = 0; accesory < accesories.length; accesory++) {
        const accesoryType = accesories[accesory];
        const contractAddress = readContracts[accesoryType] && (await readContracts[accesoryType].address);
        try {
          const hasAccesory =
            readContracts[ContractName] &&
            selectedCollectible &&
            (await readContracts[ContractName].hasNft(contractAddress, selectedCollectible));
          if (hasAccesory === true) {
            newpreviewOperation[accesoryType] = ["remove"];
          }
        } catch (e) {
          DEBUG && console.log(e);
          return false;
        }
      }
      for (const accesory in previewAccesory) {
        newpreviewOperation[accesory] = ["wear", "stop"];
      }
      setPreviewOperation(newpreviewOperation);
    };
    fetchAccesoryStatue();
  }, [selectedAccesoryBalance, selectedCollectible]);

  const AddPreviewAccesory = async (accesoryType, accesoryId) => {
    const hasAccesory = await checkForAccesories(accesoryType);
    DEBUG && console.log("hasAccesory: ", accesoryType, hasAccesory);
    if (hasAccesory === true) {
      const newpreviewOperation = { ...previewOperation };
      newpreviewOperation[accesoryType] = ["remove"];
      setPreviewOperation(newpreviewOperation);
    } else if (hasAccesory === false) {
      const newPreviewAccesory = { ...previewAccesory };
      newPreviewAccesory[accesoryType] = accesoryId;

      const newpreviewOperation = { ...previewOperation };
      newpreviewOperation[accesoryType] = ["wear", "stop"];

      setPreviewOperation(newpreviewOperation);
      setPreviewAccesory(newPreviewAccesory);
    }
  };

  const RemovePreviewAccesory = accesoryType => {
    const newPreviewAccesory = { ...previewAccesory };
    delete newPreviewAccesory[accesoryType];

    const newpreviewOperation = { ...previewOperation };
    newpreviewOperation[accesoryType] = [];

    setPreviewOperation(newpreviewOperation);
    setPreviewAccesory(newPreviewAccesory);
  };

  const ExecutePreviewOperation = (operationType, accesoryType) => {
    if (operationType === String("remove")) {
      tx(
        writeContracts[ContractName].removeNftFromLoogie(readContracts[accesoryType].address, selectedCollectible),
        function (transaction) {
          RemovePreviewAccesory(accesoryType);
        },
      );
    } else if (operationType === String("wear") && previewAccesory[accesoryType]) {
      const tankIdInBytes = "0x" + parseInt(selectedCollectible).toString(16).padStart(64, "0");

      tx(
        writeContracts[accesoryType]["safeTransferFrom(address,address,uint256,bytes)"](
          address,
          readContracts[ContractName].address,
          previewAccesory[accesoryType],
          tankIdInBytes,
        ),
        function (transaction) {
          RemovePreviewAccesory(accesoryType);
        },
      );
    }
  };

  return (
    <div
      style={{ Width: "100%", display: "flex", flexWrap: "wrap", alignItems: "top", justifyContent: "space-between" }}
    >
      <div style={{ flex: 1, margin: "32px auto auto auto" }}>
        {yourCollectibleSVG && (
          <div
            style={{
              minWidth: "200px",
              minHeight: "200px",
              width: "100%",
              height: "100%",
              margin: "1%",
              padding: "10px",
              border: "1px solid",
            }}
          >
            <div
              style={{ marginBottom: "10px", width: "100%", height: "100%" }}
              dangerouslySetInnerHTML={{ __html: yourPreviewSVG ? yourPreviewSVG : yourCollectibleSVG }}
            ></div>
          </div>
        )}
        {accesories && (
          <div style={{ Width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {accesories.map(accesory => {
              const defaultAction = accesory + " action";
              return (
                <Select
                  style={{
                    width: 120,
                    margin: 2,
                  }}
                  defaultValue={defaultAction}
                  value={defaultAction}
                  onChange={value => {
                    value === String("stop")
                      ? RemovePreviewAccesory(accesory)
                      : ExecutePreviewOperation(value, accesory);
                  }}
                >
                  {previewOperation &&
                    previewOperation[accesory] &&
                    previewOperation[accesory].map(operation => {
                      const tooltip = { operation } + { accesory };
                      const icon = operation === String("wear") ? "✔" : operation === String("remove") ? "🔥" : "❌";
                      return (
                        <Select.Option value={operation} tooltip={tooltip}>
                          {icon} {accesory}
                        </Select.Option>
                      );
                    })}
                </Select>
              );
            })}
          </div>
        )}
      </div>
      <div style={{ flex: 3, margin: "32px auto auto auto" }}>
        {userSigner ? (
          <div style={{ display: "flex", Width: "100%", margin: "auto", justifyContent: "center" }}>
            <Select
              style={{
                width: 120,
                margin: 10,
              }}
              defaultValue={selectedAccesory}
              onChange={value => {
                DEBUG && console.log("🤗 setSelectedAccesory:", value);
                setSelectedAccesory(value);
              }}
            >
              {accesories.map(accesory => (
                <Select.Option value={accesory}>{accesory}</Select.Option>
              ))}
            </Select>

            <Button
              type={"primary"}
              style={{
                margin: 10,
              }}
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

        <div style={{ Width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {yourAccesories &&
            yourAccesories.map(nft => {
              const id = nft.id.toNumber();
              const isEnabled =
                previewOperation &&
                previewOperation[selectedAccesory] &&
                previewOperation[selectedAccesory].length === 1 &&
                previewOperation[selectedAccesory][0] === String("remove");
              return (
                <div
                  style={{
                    minWidth: "200px",
                    minHeight: "200px",
                    width: "20%",
                    height: "100%",
                    margin: "10px",
                    padding: "2px",
                    border: "1px solid",
                  }}
                  key={id}
                >
                  <div>{nft.name}</div>
                  <div>
                    <a
                      href={
                        "https://opensea.io/assets/" +
                        (readContracts && readContracts[selectedAccesory] && readContracts[selectedAccesory].address) +
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
                  <Button
                    disabled={isEnabled}
                    onClick={() => {
                      AddPreviewAccesory(selectedAccesory, id);
                    }}
                  >
                    ➕
                  </Button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Preview;
