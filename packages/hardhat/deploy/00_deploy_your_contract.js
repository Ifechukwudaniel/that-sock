// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  // deploy Patterns
  await deploy("BonePattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("ChilliPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("CloudPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("FirePattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("HeartBreakPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("HeartPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("LemonPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("LightingPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("MultiplePattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("StarPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });
  await deploy("StripePattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  await deploy("UfoPattern", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const BonePattern = await ethers.getContract("BonePattern", deployer);
  const ChilliPattern = await ethers.getContract("ChilliPattern", deployer);
  const CloudPattern = await ethers.getContract("CloudPattern", deployer);
  const FirePattern = await ethers.getContract("FirePattern", deployer);
  const HeartBreakPattern = await ethers.getContract(
    "HeartBreakPattern",
    deployer
  );
  const HeartPattern = await ethers.getContract("HeartPattern", deployer);
  const LemonPattern = await ethers.getContract("LemonPattern", deployer);
  const LightingPattern = await ethers.getContract("LightingPattern", deployer);
  const MultiplePattern = await ethers.getContract("MultiplePattern", deployer);
  const StarPattern = await ethers.getContract("StarPattern", deployer);
  const StripePattern = await ethers.getContract("StripePattern", deployer);
  const UfoPattern = await ethers.getContract("UfoPattern", deployer);

  await deploy("PatternLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
    libraries: {
      BonePattern: BonePattern.address,
      ChilliPattern: ChilliPattern.address,
      CloudPattern: CloudPattern.address,
      FirePattern: FirePattern.address,
      HeartBreakPattern: HeartBreakPattern.address,
      HeartPattern: HeartPattern.address,
      LemonPattern: LemonPattern.address,
      LightingPattern: LightingPattern.address,
      MultiplePattern: MultiplePattern.address,
      StarPattern: StarPattern.address,
      StripePattern: StripePattern.address,
      UfoPattern: UfoPattern.address,
    },
  });

  const PatternLibrary = await ethers.getContract("PatternLibrary", deployer);

  await deploy("PatternMetadataLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const PatternMetadataLibrary = await ethers.getContract(
    "PatternMetadataLibrary",
    deployer
  );

  // Pin Library
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

  //  Additional Backgrounds

  await deploy("FlowerBackground", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  await deploy("LeavesBackground", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  await deploy("PillowBackground", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  await deploy("RugBackground", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  await deploy("WaterBackground", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });

  const FlowerBackground = await ethers.getContract(
    "FlowerBackground",
    deployer
  );
  const LeavesBackground = await ethers.getContract(
    "LeavesBackground",
    deployer
  );
  const PillowBackground = await ethers.getContract(
    "PillowBackground",
    deployer
  );
  const RugBackground = await ethers.getContract("RugBackground", deployer);
  const WaterBackground = await ethers.getContract("WaterBackground", deployer);

  await deploy("BackgroundLibrary", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
    libraries: {
      FlowerBackground: FlowerBackground.address,
      LeavesBackground: LeavesBackground.address,
      PillowBackground: PillowBackground.address,
      RugBackground: RugBackground.address,
      WaterBackground: WaterBackground.address,
    },
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
      PatternLibrary: PatternLibrary.address,
      PatternMetadataLibrary: PatternMetadataLibrary.address,
    },
  });

  const ThisSocks = await ethers.getContract("ThisSocks", deployer);

  try {
    if (chainId !== localChainId) {
      await run("verify:verify", {
        address: ThisSocks.address,
        contractArguments: [],
        libraries: {
          FlowerBackground: FlowerBackground.address,
          LeavesBackground: LeavesBackground.address,
          PillowBackground: PillowBackground.address,
          RugBackground: RugBackground.address,
          WaterBackground: WaterBackground.address,
          BonePattern: BonePattern.address,
          ChilliPattern: ChilliPattern.address,
          CloudPattern: CloudPattern.address,
          FirePattern: FirePattern.address,
          HeartBreakPattern: HeartBreakPattern.address,
          HeartPattern: HeartPattern.address,
          LemonPattern: LemonPattern.address,
          LightingPattern: LightingPattern.address,
          MultiplePattern: MultiplePattern.address,
          StarPattern: StarPattern.address,
          StripePattern: StripePattern.address,
          UfoPattern: UfoPattern.address,
          PatternLibrary: PatternLibrary.address,
          PatternMetadataLibrary: PatternMetadataLibrary.address,
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
