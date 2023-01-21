pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

library SockBackgroundLibrary {
     function GetBackgroundColor(uint256 colorInt) public pure returns(string memory){ 
       string memory color ;
       if(colorInt == 0 ) {
            // WHITE
           color = "#F5F5F5";
       }
       else if (colorInt == 1) {
            // GRAY
            color = "#DCDCDC";
       }
       else if(colorInt == 2) {
          //Orange
          color ="#FDB0B0";
       } 
       else if(colorInt == 3) {
         //Pink
         color = "#FFD6F1";
       }
       else if(colorInt == 4) {
         //YELLOW
         color = "#FCDFB4";
       }
       else if(colorInt == 5) {
         //BRIGHT YELLOW
         color = "#FDFFBC";
       }
       else if(colorInt == 6) {
         //Green
         color = "#A5F7C6";
       }
       else if(colorInt == 7) {
         //Blue
         color = "#D6E4FF";
       }
       else if(colorInt == 8) {
         //Dark Blue
         color = "#A5BCF7";
       }
       else if(colorInt == 9) {
         //Dark PinK
         color = "#E8C2FF";
       }
       else {
         // Black
         color ="#282828";
       }
      return color;
     }

     function GetBackground(string memory backgroundColor) public pure returns(string memory){ 
       return  string( abi.encodePacked(
          '<rect width="1080" height="1080" '
          ' fill="',backgroundColor,'"',
          ' />'
          ));
     }

} 