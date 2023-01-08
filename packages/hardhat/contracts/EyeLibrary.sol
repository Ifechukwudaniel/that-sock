pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

// Defining Library
library EyeLibrary {
    function GetEye(uint256 index) public pure returns (string memory) {
        string memory eye;

        if (index == 1) {
            eye = string(abi.encodePacked());
        } else if (index == 2) {
            eye = string(abi.encodePacked());
        } else if (index == 3) {
            eye = string(abi.encodePacked());
        } else if (index == 4) {
            eye = string(abi.encodePacked());
        } else if (index == 5) {
            eye = string(abi.encodePacked());
        } else if (index == 6) {
            eye = string(abi.encodePacked());
        } else if (index == 7) {
            eye = string(abi.encodePacked());
        }
        return eye;
    }
}
