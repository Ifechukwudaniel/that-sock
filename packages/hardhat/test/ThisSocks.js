const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("ThisSocks", function () {
  let SocksContract = null;
  let signers = null;

  beforeEach(async function () {
    signers = await ethers.getSigners();

    const StyleLibrary = await ethers.getContractFactory("StyleLibrary");
    const style = await StyleLibrary.deploy();

    const SockPinLibrary = await ethers.getContractFactory("SockPinLibrary");
    const sockPin = await SockPinLibrary.deploy();

    const SockBackgroundLibrary = await ethers.getContractFactory(
      "SockBackgroundLibrary"
    );
    const sockBackground = await SockBackgroundLibrary.deploy();

    const ThisSocks = await ethers.getContractFactory("ThisSocks", {
      signer: signers[0],
      libraries: {
        StyleLibrary: style.address,
        SockPinLibrary: sockPin.address,
        SockBackgroundLibrary: sockBackground.address,
      },
    });

    SocksContract = await ThisSocks.deploy();
  });

  it("Should deploy ThisSocks", async function () {
    signers = await ethers.getSigners();

    const StyleLibrary = await ethers.getContractFactory("StyleLibrary");
    const style = await StyleLibrary.deploy();

    const SockPinLibrary = await ethers.getContractFactory("SockPinLibrary");
    const sockPin = await SockPinLibrary.deploy();

    const SockBackgroundLibrary = await ethers.getContractFactory(
      "SockBackgroundLibrary"
    );
    const sockBackground = await SockBackgroundLibrary.deploy();

    const ThisSocks = await ethers.getContractFactory("ThisSocks", {
      signer: signers[0],
      libraries: {
        StyleLibrary: style.address,
        SockPinLibrary: sockPin.address,
        SockBackgroundLibrary: sockBackground.address,
      },
    });

    SocksContract = await ThisSocks.deploy();
  });

  // it("Should Mint ThisSocks", async function () {
  //     SocksContract.
  // });
});
