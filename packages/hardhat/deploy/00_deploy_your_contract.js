// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  await deploy("PinLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const PinLibrary = await ethers.getContract("PinLibrary", deployer);

  await deploy("PinMetadataLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const PinMetadataLibrary = await ethers.getContract(
    "PinMetadataLibrary",
    deployer
  );

  await deploy("BackgroundLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const BackgroundLibrary = await ethers.getContract(
    "BackgroundLibrary",
    deployer
  );

  await deploy("BackgroundMetadataLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const BackgroundMetadataLibrary = await ethers.getContract(
    "BackgroundMetadataLibrary",
    deployer
  );

  await deploy("SockLayoutLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const SockLayoutLibrary = await ethers.getContract(
    "SockLayoutLibrary",
    deployer
  );

  await deploy("StyleLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const StyleLibrary = await ethers.getContract("StyleLibrary", deployer);

  await deploy("ThisSocks", {
    from: deployer,
    // args: [],
    log: true,
    waitConfirmations: 5,
    libraries: {
      SockLayoutLibrary: SockLayoutLibrary.address,
      BackgroundLibrary: BackgroundLibrary.address,
      BackgroundMetadataLibrary: BackgroundMetadataLibrary.address,
      PinLibrary: PinLibrary.address,
      PinMetadataLibrary: PinMetadataLibrary.address,
      StyleLibrary: StyleLibrary.address,
    },
  });

  const ThisSocks = await ethers.getContract("ThisSocks", deployer);

  try {
    if (chainId !== localChainId) {
      await run("verify:verify", {
        address: ThisSocks.address,
        contractArguments: [],
        libraries: {
          SockLayoutLibrary: SockLayoutLibrary.address,
          BackgroundLibrary: BackgroundLibrary.address,
          BackgroundMetadataLibrary: BackgroundMetadataLibrary.address,
          PinLibrary: PinLibrary.address,
          PinMetadataLibrary: PinMetadataLibrary.address,
          StyleLibrary: StyleLibrary.address,
        },
      });
    }
  } catch (err) {
    if (err.message.includes("Reason: Already Verified")) {
      console.log("Contract is already verified!");
    }
  }
};
module.exports.tags = [
  // "SockPinLibrary",
  // "Eye",
  "ThisSock",
];
