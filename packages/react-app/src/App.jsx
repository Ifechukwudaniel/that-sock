import { Button, Col, Menu, Row, Modal, Select } from "antd";
import "antd/dist/antd.css";
import {
  useBalance,
  useContractLoader,
  useContractReader,
  useGasPrice,
  useOnBlock,
  useUserProviderAndSigner,
} from "eth-hooks";
import { useExchangeEthPrice } from "eth-hooks/dapps/dex";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import {
  Account,
  Contract,
  Faucet,
  GasGauge,
  Header,
  Ramp,
  ThemeSwitch,
  NetworkDisplay,
  FaucetHint,
  NetworkSwitch,
} from "./components";
import { NETWORKS, ALCHEMY_KEY } from "./constants";
import externalContracts from "./contracts/external_contracts";
// contracts
import deployedContracts from "./contracts/hardhat_contracts.json";
import { Transactor, Web3ModalSetup } from "./helpers";
import { Home, Accesories, Preview } from "./views";
import { useStaticJsonRPC } from "./hooks";

const { ethers } = require("ethers");
/*

    Code:
    https://github.com/scaffold-eth/scaffold-eth

    Support:
    https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA
    or DM @austingriffith on twitter or telegram

    You should get your own Alchemy.com & Infura.io ID and put it in `constants.js`
    (this is your connection to the main Ethereum network for ENS etc.)


    🌏 EXTERNAL CONTRACTS:
    You can also bring in contract artifacts in `constants.js`
    (and then use the `useExternalContractLoader()` hook!)
*/

/// 📡 What chain are your contracts deployed to?
let initialNetwork = NETWORKS.localhost; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// 😬 Sorry for all the console logging
let DEBUG = true;
const NETWORKCHECK = true;
const USE_BURNER_WALLET = true; // toggle burner wallet feature
const USE_NETWORK_SELECTOR = false;

if (process.env.NODE_ENV === "production") {
  DEBUG = false;
  initialNetwork = NETWORKS.goerli;
}

const web3Modal = Web3ModalSetup();

// 🛰 providers
const providers = [
  "https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406",
  `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  "https://rpc.scaffoldeth.io:48544",
];

function App(props) {
  // specify all the chains your app is available on. Eg: ['localhost', 'mainnet', ...otherNetworks ]
  // reference './constants.js' for other networks
  const networkOptions = [initialNetwork.name, "mainnet", "rinkeby"];

  const [injectedProvider, setInjectedProvider] = useState();
  const [address, setAddress] = useState();
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
  const location = useLocation();

  const targetNetwork = NETWORKS[selectedNetwork];

  // 🔭 block explorer URL
  const blockExplorer = targetNetwork.blockExplorer;

  // load all your providers
  const localProvider = useStaticJsonRPC([
    process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : targetNetwork.rpcUrl,
  ]);
  const mainnetProvider = useStaticJsonRPC(providers);

  if (DEBUG) console.log(`Using ${selectedNetwork} network`);

  // 🛰 providers
  if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == "function") {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  /* 💵 This hook will get the price of ETH from 🦄 Uniswap: */
  const price = useExchangeEthPrice(targetNetwork, mainnetProvider);

  /* 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation */
  const gasPrice = useGasPrice(targetNetwork, "fast");
  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
  const userProviderAndSigner = useUserProviderAndSigner(injectedProvider, localProvider, USE_BURNER_WALLET);
  const userSigner = userProviderAndSigner.signer;

  useEffect(() => {
    async function getAddress() {
      if (userSigner) {
        const newAddress = await userSigner.getAddress();
        setAddress(newAddress);
      }
    }
    getAddress();
  }, [userSigner]);

  // You can warn the user if you would like them to be on a specific network
  const localChainId = localProvider && localProvider._network && localProvider._network.chainId;
  const selectedChainId =
    userSigner && userSigner.provider && userSigner.provider._network && userSigner.provider._network.chainId;

  // For more hooks, check out 🔗eth-hooks at: https://www.npmjs.com/package/eth-hooks

  // The transactor wraps transactions and provides notificiations
  const tx = Transactor(userSigner, gasPrice);

  // handy hooks like this one to get your balance:
  const yourLocalBalance = useBalance(localProvider, address);

  // Just plug in different 🛰 providers to get your balance on different chains:
  const yourMainnetBalance = useBalance(mainnetProvider, address);

  // const contractConfig = useContractConfig();

  const contractConfig = { deployedContracts: deployedContracts || {}, externalContracts: externalContracts || {} };

  // Load in your local 📝 contract and read a value from it:
  const readContracts = useContractLoader(localProvider, contractConfig);

  // If you want to make 🔐 write transactions to your contracts, use the userSigner:
  const writeContracts = useContractLoader(userSigner, contractConfig, localChainId);

  // EXTERNAL CONTRACT EXAMPLE:
  // If you want to bring in the mainnet DAI contract it would look like:
  const mainnetContracts = useContractLoader(mainnetProvider, contractConfig);

  // If you want to call a function on a new block
  useOnBlock(mainnetProvider, () => {
    console.log(`⛓ A new mainnet block is here: ${mainnetProvider._lastBlockNumber}`);
  });

  // Then read your DAI balance like:
  const myMainnetDAIBalance = useContractReader(mainnetContracts, "DAI", "balanceOf", [
    "0x34aA3F359A9D614239015126635CE7732c18fDF3",
  ]);

  /*
  const addressFromENS = useResolveName(mainnetProvider, "austingriffith.eth");
  console.log("🏷 Resolved austingriffith.eth as:",addressFromENS)
  */

  const ContractName = "YourCollectible";

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new ethers.providers.Web3Provider(provider));

    provider.on("chainChanged", chainId => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code, reason) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
    // eslint-disable-next-line
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  const faucetAvailable = localProvider && localProvider.connection && targetNetwork.name.indexOf("local") !== -1;

  const accesories = ["Eye", "Head", "Neck", "Perch", "Background"];
  const [selectedCollectible, setSelectedCollectible] = useState();
  const [yourCollectibleSVG, setYourCollectibleSVG] = useState();

  const [selectedAccesory, setSelectedAccesory] = useState(accesories[0]);
  const [selectedAccesoryBalance, setSelectedAccesoryBalance] = useState(accesories[0]);
  const [yourAccesories, setYourAccesories] = useState();
  const [previewAccesory, setPreviewAccesory] = useState({});
  const perPage = 10;

  // 🧠 This effect will update yourCollectibles by polling when your balance changes
  const AccesoryBalanceContract = useContractReader(readContracts, selectedAccesory, "balanceOf", [address]);

  useEffect(() => {
    if (AccesoryBalanceContract) {
      setSelectedAccesoryBalance(AccesoryBalanceContract);
    }
  }, [AccesoryBalanceContract]);

  useEffect(() => {
    const updateYourCollectibleSVG = async () => {
      try {
        console.log("Getting token index " + selectedCollectible);
        const tokenId = selectedCollectible;
        console.log("tokenId: " + tokenId);
        const svg =
          readContracts[ContractName] && tokenId && (await readContracts[ContractName].renderTokenById(tokenId));
        const newYourCollectibleSVG =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300" viewBox="0 0 880 880">' +
          svg +
          "</svg>";
        setYourCollectibleSVG(newYourCollectibleSVG);
      } catch (err) {
        console.log(err);
      }
    };
    if (address && selectedCollectible) {
      updateYourCollectibleSVG();
    }
  }, [address, readContracts, selectedCollectible]);

  useEffect(() => {
    const updateYourAccesories = async () => {
      const accesoriesUpdate = [];
      const balance = readContracts[selectedAccesory] && (await readContracts[selectedAccesory].balanceOf(address));
      for (let tokenIndex = 0; tokenIndex < balance; ++tokenIndex) {
        try {
          console.log("Getting token index " + tokenIndex);
          const tokenId =
            readContracts[selectedAccesory] &&
            (await readContracts[selectedAccesory].tokenOfOwnerByIndex(address, tokenIndex));
          console.log("tokenId: " + tokenId);
          const tokenURI = readContracts[selectedAccesory] && (await readContracts[selectedAccesory].tokenURI(tokenId));
          const jsonManifestString = Buffer.from(tokenURI.substring(29), "base64").toString();
          console.log("jsonManifestString: " + jsonManifestString);

          try {
            const jsonManifest = JSON.parse(jsonManifestString);
            console.log("jsonManifest: " + jsonManifest);
            accesoriesUpdate.push({ id: tokenId, uri: tokenURI, owner: address, ...jsonManifest });
          } catch (err) {
            console.log(err);
          }
        } catch (err) {
          console.log(err);
        }
      }
      setYourAccesories(accesoriesUpdate.reverse());
    };
    if (address) {
      updateYourAccesories();
    }
  }, [address, readContracts, selectedAccesory, selectedAccesoryBalance]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setPreviewAccesory({});
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setPreviewAccesory({});
  };

  const [debugAccessorySelected, setDebugAccessorySelected] = useState(accesories[0]);

  return (
    <div className="App">
      {/* ✏️ Edit the header and change the title to your project name */}
      <Header title="Arrogant Parrot">
        {/* 👨‍💼 Your account is in the top right with a wallet at connect options */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flex: 1 }}>
            {USE_NETWORK_SELECTOR && (
              <div style={{ marginRight: 20 }}>
                <NetworkSwitch
                  networkOptions={networkOptions}
                  selectedNetwork={selectedNetwork}
                  setSelectedNetwork={setSelectedNetwork}
                />
              </div>
            )}
            <Account
              useBurner={USE_BURNER_WALLET}
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
            />
          </div>
        </div>
      </Header>
      {yourLocalBalance.lte(ethers.BigNumber.from("0")) && selectedNetwork === "localhost" && (
        <FaucetHint localProvider={localProvider} targetNetwork={targetNetwork} address={address} />
      )}
      <NetworkDisplay
        NETWORKCHECK={NETWORKCHECK}
        localChainId={localChainId}
        selectedChainId={selectedChainId}
        targetNetwork={targetNetwork}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        USE_NETWORK_SELECTOR={USE_NETWORK_SELECTOR}
      />

      <Menu
        style={{ textAlign: "center", marginTop: 20, justifyContent: "center" }}
        selectedKeys={[location.pathname]}
        mode="horizontal"
      >
        <Menu.Item key="/">
          <Link to="/">Your Collectible</Link>
        </Menu.Item>
        <Menu.Item key="/accesories">
          <Link to="/accesories">Your Accesories</Link>
        </Menu.Item>
        <Menu.Item key="/debug">
          <Link to="/debug">Debug Contracts</Link>
        </Menu.Item>
        <Menu.Item key="/debug2">
          <Link to="/debug2">Debug Accesories</Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/">
          {/* pass in any web3 props to this Home component. For example, yourLocalBalance */}
          <Home
            userSigner={userSigner}
            readContracts={readContracts}
            writeContracts={writeContracts}
            tx={tx}
            loadWeb3Modal={loadWeb3Modal}
            blockExplorer={blockExplorer}
            address={address}
            setSelectedCollectible={setSelectedCollectible}
            ContractName={"YourCollectible"}
            showModal={showModal}
            DEBUG={DEBUG}
            perPage={perPage}
            gasPrice={gasPrice}
          />
          <Modal
            width="70%"
            title={"Add or remove accessories"}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Preview
              userSigner={userSigner}
              readContracts={readContracts}
              writeContracts={writeContracts}
              tx={tx}
              loadWeb3Modal={loadWeb3Modal}
              blockExplorer={blockExplorer}
              address={address}
              ContractName={"YourCollectible"}
              accesories={accesories}
              selectedCollectible={selectedCollectible}
              selectedAccesory={selectedAccesory}
              setSelectedAccesory={setSelectedAccesory}
              yourAccesories={yourAccesories}
              yourCollectibleSVG={yourCollectibleSVG}
              selectedAccesoryBalance={selectedAccesoryBalance}
              previewAccesory={previewAccesory}
              setPreviewAccesory={setPreviewAccesory}
              DEBUG={DEBUG}
              gasPrice={gasPrice}
            />
          </Modal>
        </Route>
        <Route exact path="/accesories">
          {/* pass in any web3 props to this Home component. For example, yourLocalBalance */}
          <Accesories
            userSigner={userSigner}
            readContracts={readContracts}
            writeContracts={writeContracts}
            tx={tx}
            loadWeb3Modal={loadWeb3Modal}
            blockExplorer={blockExplorer}
            address={address}
            accesories={accesories}
            DEBUG={DEBUG}
            perPage={perPage}
            gasPrice={gasPrice}
          />
        </Route>
        <Route exact path="/debug">
          {/*
                🎛 this scaffolding is full of commonly used components
                this <Contract/> component will automatically parse your ABI
                and give you a form to interact with it locally
            */}

          <Contract
            name="YourCollectible"
            price={price}
            signer={userSigner}
            provider={localProvider}
            address={address}
            blockExplorer={blockExplorer}
            contractConfig={contractConfig}
          />
        </Route>
        <Route exact path="/debug2">
          {/*
                🎛 this scaffolding is full of commonly used components
                this <Contract/> component will automatically parse your ABI
                and give you a form to interact with it locally
            */}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Select
              style={{
                width: 120,
                margin: 10,
              }}
              defaultValue={debugAccessorySelected}
              onChange={value => {
                setDebugAccessorySelected(value);
              }}
            >
              {accesories.map((accesory, index) => (
                <Select.Option key={index} value={accesory}>
                  {accesory}
                </Select.Option>
              ))}
            </Select>
          </div>

          <Contract
            name={debugAccessorySelected}
            price={price}
            signer={userSigner}
            provider={localProvider}
            address={address}
            blockExplorer={blockExplorer}
            contractConfig={contractConfig}
          />
        </Route>
      </Switch>

      <ThemeSwitch />

      {/* 🗺 Extra UI like gas price, eth price, faucet, and support: */}
      <div style={{ position: "fixed", textAlign: "left", left: 0, bottom: 20, padding: 10 }}>
        <Row align="middle" gutter={[4, 4]}>
          <Col span={8}>
            <Ramp price={price} address={address} networks={NETWORKS} />
          </Col>

          <Col span={8} style={{ textAlign: "center", opacity: 0.8 }}>
            <GasGauge gasPrice={gasPrice} />
          </Col>
          <Col span={8} style={{ textAlign: "center", opacity: 1 }}>
            <Button
              onClick={() => {
                window.open("https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA");
              }}
              size="large"
              shape="round"
            >
              <span style={{ marginRight: 8 }} role="img" aria-label="support">
                💬
              </span>
              Support
            </Button>
          </Col>
        </Row>

        <Row align="middle" gutter={[4, 4]}>
          <Col span={24}>
            {
              /*  if the local provider has a signer, let's show the faucet:  */
              faucetAvailable ? (
                <Faucet localProvider={localProvider} price={price} ensProvider={mainnetProvider} />
              ) : (
                ""
              )
            }
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
