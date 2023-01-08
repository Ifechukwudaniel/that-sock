pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

// Defining Library
library BodyLibrary {
    function GetTail(
        string memory color1,
        string memory color2,
        string memory color3
    ) public pure returns (string memory) {
        string memory tail = string(abi.encodePacked());
        return tail;
    }

    function GetFeet(string memory color) public pure returns (string memory) {
        string memory feet = string(abi.encodePacked());
        return feet;
    }

    function GetBody(
        string memory color0,
        string memory color1,
        string memory color2,
        string memory color3,
        string memory color4
    ) public pure returns (string memory) {
        string memory body = string(abi.encodePacked(GetFeet(color4)));
        body = string(abi.encodePacked(body, ""));

        return body;
    }
}
