pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

library WaterBackground  {
      function background(string memory backgroundColor) public pure returns(string memory){
        return  string(abi.encodePacked(
             '<rect width="1080" height="1080" '
            ' fill="',backgroundColor,'"',
            ' />',
            '     <g>', 
            '         <g filter="url(#filter0_d_33_140)">', 
            '             <path', 
            '                 d="M360.5 397C256.9 597 79.6667 570.667 4 532.5V0H826.5C837.167 8.66667 845.8 53.6 795 164C731.5 302 490 147 360.5 397Z"', 
            '                 fill="#98C1FF" fill-opacity="0.8" />', 
            '             <circle cx="896.5" cy="141.5" r="43.5" fill="#98C1FF" fill-opacity="0.5" />', 
            '             <circle cx="64.5" cy="608.5" r="21.5" fill="#98C1FF" fill-opacity="0.5" />', 
            '             <circle cx="961.5" cy="76.5" r="21.5" fill="#98C1FF" fill-opacity="0.5" />', 
            '         </g>', 
            '         <defs>', 
            '             <filter id="filter0_d_33_140" x="0" y="0" width="987" height="638" filterUnits="userSpaceOnUse"', 
            '                 color-interpolation-filters="sRGB">', 
            '                 <feFlood flood-opacity="0" result="BackgroundImageFix" />', 
            '                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"', 
            '                     result="hardAlpha" />', 
            '                 <feOffset dy="4" />', 
            '                 <feGaussianBlur stdDeviation="2" />', 
            '                 <feComposite in2="hardAlpha" operator="out" />', 
            '                 <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />', 
            '                 <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_140" />', 
            '                 <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_33_140" result="shape" />', 
            '             </filter>', 
            '         </defs>', 
            '     </g>'
        ));
      }
}