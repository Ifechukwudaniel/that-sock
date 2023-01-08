pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

// Defining Library
library StyleLibrary {
    function GetStyle() public pure returns (string memory) {
        string memory style = string(
            abi.encodePacked(
                "<defs>",
                "   <style>",
                "       .cls-1 {",
                "           isolation: isolate;",
                "       }",
                "       .cls-2,",
                "       .cls-3,",
                "       .cls-4,",
                "       .cls-8,",
                "       .cls-9 {",
                "           stroke: #000;",
                "           stroke-miterlimit: 10;",
                "       }"
            )
        );
        style = string(
            abi.encodePacked(
                style,
                "       .cls-2,",
                "       .cls-3,",
                "       .cls-4,",
                "       .cls-8,",
                "       .cls-9 {",
                "           stroke-width: 4.33px;",
                "       }",
                "       .cls-10,",
                "       .cls-11,",
                "       .cls-5 {",
                "           mix-blend-mode: multiply;",
                "       }"
            )
        );
        style = string(
            abi.encodePacked(
                style,
                "       .cls-5 {",
                "           opacity: 0.31;",
                "       }",
                "       .cls-6 {",
                "           fill: #979797;",
                "       }",
                "       .cls-10 {",
                "           opacity: 0.25;",
                "       }",
                "       .cls-11 {",
                "           opacity: 0.27;",
                "       }",
                "   </style>",
                "</defs>"
            )
        );
        return style;
    }
}
