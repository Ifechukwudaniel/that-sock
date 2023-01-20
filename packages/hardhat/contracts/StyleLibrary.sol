pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

// Defining Library
library StyleLibrary {
    function GetStyle() public pure returns (string memory) {
        string memory style = string(
            abi.encodePacked("")
        );
        return style;
    }

    function HideBackClipStyle() public pure returns(string memory){
        string memory style = string(
            abi.encodePacked(
            '     <defs>', 
            '         <style>', 
            '             .backClip {', 
            '                 opacity: 0;', 
            '             }', 
            '         </style>', 
            '     </defs>'
            ));
        return style;
    }

     function ShowBackClipStyle() public pure returns(string memory){
        string memory style = string(
            abi.encodePacked(
            '     <defs>', 
            '         <style>', 
            '             .backClip {', 
            '                 opacity: 1;', 
            '             }', 
            '         </style>', 
            '     </defs>'
            ));
        return style;
    }
}
