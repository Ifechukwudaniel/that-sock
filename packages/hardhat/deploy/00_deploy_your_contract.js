// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  await deploy("SockPinLibrary", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const SockPinLibrary = await ethers.getContract("SockPinLibrary", deployer);

  await deploy("SockLayoutLibrary", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const SockLayoutLibrary = await ethers.getContract(
    "SockLayoutLibrary",
    deployer
  );

  await deploy("StyleLibrary", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const StyleLibrary = await ethers.getContract("StyleLibrary", deployer);

  await deploy("ThisSocks", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: [],
    log: true,
    waitConfirmations: 5,
    libraries: {
      SockLayoutLibrary: SockLayoutLibrary.address,
      SockPinLibrary: SockPinLibrary.address,
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
          SockPinLibrary: SockPinLibrary.address,
          SockLayoutLibrary: SockLayoutLibrary.address,
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
