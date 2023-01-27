pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

// Defining Library

library SockLayoutLibrary {
    function GetColor(uint256 colorInt) public pure returns(string memory){ 
       string memory color ; 
       if(colorInt == 0 ) {
            // RED
           color = "#EB4545";
       }
       else if (colorInt == 1) {
            // Pink
            color = "#FDA2F4";
       }
       else if(colorInt == 2) {
          //Orange
          color ="#FF8A01";
       } 
       else if(colorInt == 3) {
         //Yellow
         color = "#FDED5E";
       }
       else if(colorInt == 4) {
         //Green
         color = "#B4E847";
       }
       else if(colorInt == 5) {
         //Dark Green
         color = "#70AE3F";
       }
       else if(colorInt == 6) {
         //Blue
         color = "#98C1FF";
       }
       else if(colorInt == 7) {
         //Dark Blue
         color = "#3E3BD3";
       }
       else if(colorInt == 8) {
         //Purple
         color = "#CF81FF";
       }
       else if(colorInt == 9) {
         //Gray
         color = "#D9D9D9";
       }
       else if(colorInt == 10) {
         //White
         color = "#FFFFFF";
       }
       else {
         // Black
         color ="#000000";
       }
      return color;
     }

     function GetColorName(uint256 colorInt) public pure returns(string memory){ 
       string memory color ; 
       if(colorInt == 0 ) {
            // RED
           color = "Red";
       }
       else if (colorInt == 1) {
            // Pink
            color = "Pink";
       }
       else if(colorInt == 2) {
          //Orange
          color ="Orange";
       } 
       else if(colorInt == 3) {
         //Yellow
         color = "Yellow";
       }
       else if(colorInt == 4) {
         //Green
         color = "Green";
       }
       else if(colorInt == 5) {
         //Dark Green
         color = "Dark Green";
       }
       else if(colorInt == 6) {
         //Blue
         color = "Blue";
       }
       else if(colorInt == 7) {
         //Dark Blue
         color = "Dark Blue";
       }
       else if(colorInt == 8) {
         //Purple
         color = "Purple";
       }
       else if(colorInt == 9) {
         //Gray
         color = "Gray";
       }
       else if(colorInt == 10) {
         //White
         color = "White";
       }
       else {
         // Black
         color ="Black";
       }
      return color;
     }

      function GetLayoutMetadata(uint256 towAndHeelColor, uint256 cuffColor,  uint256 color) public pure returns(string memory){ 
         return string(abi.encodePacked(
          '{"trait_type": "Tow Color", "value":"',
           GetColorName(towAndHeelColor),
          '"},',
          '{"trait_type": "Cuff Color", "value":"',
           GetColorName(cuffColor),
          '"},',
           '{"trait_type": "Color", "value":"',
           GetColorName(color),
          '"}'
          ));
     }

    function GetLayout(string memory towAndHeelColor , string memory cuffColor, string memory color) public pure returns(string memory){
      string memory sockLayout;
      sockLayout =  string(abi.encodePacked(
            '<g transform="translate(-140 -100)">', 
            '   <path', 
            '        d="M785.9 275.626C725.097 247.898 669.212 239.882 661.077 257.721L611.495 366.449C635.241 404.755 712.524 478.465 831.681 466.859L881.263 358.13C889.398 340.292 846.702 303.353 785.9 275.626Z"', 
            '     ', 
            '   fill="', cuffColor, '" stroke="black" stroke-width="8" />'
      ));
       sockLayout = string(abi.encodePacked(
             sockLayout,
            '    ', 
            '  <path', 
            '      d="M881.497 358.237C873.362 376.076 817.477 368.06 756.674 340.332C695.871 312.605 653.176 275.666 661.311 257.827C669.445 239.989 725.33 248.005 786.133 275.732C846.936 303.46 889.632 340.398 881.497 358.237Z"', 
            '            fill="black" />', 
            '  <path', 
            '      d="M168.509 667.263C175.832 606.857 230.421 582.109 256.8 577.286C290.206 612.486 334.446 699.85 244.153 767.703C232.038 760.529 159.354 742.771 168.509 667.263Z"', 
            '     ', 
            ' fill="',towAndHeelColor,'"  stroke="black" stroke-width="8" />'
            '     '
            ));
         sockLayout = string(abi.encodePacked(
            sockLayout,
            ' <path', 
            '   d="M604.34 791.275C737.081 797.037 736.069 677.143 736.069 677.143C698.338 671.111 619.168 685.492 604.34 791.275Z"', 
            '   fill="', towAndHeelColor,'" stroke="black" stroke-width="8" />', 
            ' <path', 
            '    d="M256.592 577.74L474.708 564.611C504.256 562.832 530.407 544.882 542.689 517.949L611.728 366.555C635.475 404.861 712.757 478.571 831.914 466.965L735.861 677.597C698.13 671.565 618.96 685.946 604.133 791.729C471.392 785.967 253.638 773.896 243.946 768.157C334.238 700.305 289.999 612.941 256.592 577.74Z"', 
            ' fill="',color ,'" stroke="black" stroke-width="8" /> ', 
            '</g>'
      ));
      return sockLayout;
    }
}
