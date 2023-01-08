// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  // await deploy("EyeLibrary", {
  //   // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
  //   from: deployer,
  //   // args: [ "Hello", ethers.utils.parseEther("1.5") ],
  //   log: true,
  //   waitConfirmations: 5,
  // });

  await deploy("StyleLibrary", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: [ "Hello", ethers.utils.parseEther("1.5") ],
    log: true,
    waitConfirmations: 5,
  });

  await deploy("BodyLibrary", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: [ "Hello", ethers.utils.parseEther("1.5") ],
    log: true,
    waitConfirmations: 5,
  });

  // const EyeLibrary = await ethers.getContract("EyeLibrary", deployer);
  const StyleLibrary = await ethers.getContract("StyleLibrary", deployer);
  const BodyLibrary = await ethers.getContract("BodyLibrary", deployer);

  // const Eye = await deploy("Eye", {
  //   // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
  //   from: deployer,
  //   // args: [ "Hello", ethers.utils.parseEther("1.5") ],
  //   log: true,
  //   waitConfirmations: 5,
  //   libraries: {
  //     EyeLibrary: EyeLibrary.address,
  //   },
  // });

  await deploy("YourCollectible", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: [],
    log: true,
    waitConfirmations: 5,
    libraries: {
      StyleLibrary: StyleLibrary.address,
      BodyLibrary: BodyLibrary.address,
    },
  });

  // Getting a previously deployed contract
  const YourCollectible = await ethers.getContract("YourCollectible", deployer);
  // await YourCollectible.setPurpose("Hello");

  // await YourCollectible.addNft(Eye.address);

  // // To take ownership of YourCollectible using the ownable library uncomment next line and add the
  // // address you want to be the owner.

  // await YourCollectible.transferOwnership(
  //   "0x54179E1770a780F2F541f23CB21252De12977d3c"
  // );

  /*
    To take ownership of yourContract using the ownable library uncomment next line and add the 
    address you want to be the owner. 
    // yourContract.transferOwnership(YOUR_ADDRESS_HERE);

    //const yourContract = await ethers.getContractAt('YourContract', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

  // Verify your contracts with Etherscan
  // You don't want to verify on localhost
  // try {
  //   if (chainId !== localChainId) {
  //     await run("verify:verify", {
  //       address: EyeLibrary.address,
  //       contractArguments: [],
  //     });
  //   }
  // } catch (err) {
  //   if (err.message.includes("Reason: Already Verified")) {
  //     console.log("Contract is already verified!");
  //   }
  // }

  // try {
  //   if (chainId !== localChainId) {
  //     await run("verify:verify", {
  //       address: Eye.address,
  //       contractArguments: [],
  //       libraries: {
  //         EyeLibrary: EyeLibrary.address,
  //       },
  //     });
  //   }
  // } catch (err) {
  //   if (err.message.includes("Reason: Already Verified")) {
  //     console.log("Contract is already verified!");
  //   }
  // }

  try {
    if (chainId !== localChainId) {
      await run("verify:verify", {
        address: YourCollectible.address,
        contractArguments: [],
        libraries: {
          StyleLibrary: StyleLibrary.address,
          BodyLibrary: BodyLibrary.address,
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
  // "EyeLibrary",
  // "Eye",
  "YourCollectible",
];
