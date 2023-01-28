pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

// Defining Library

library StarPattern {
      function pattern() public pure returns(string memory){
        return  string(abi.encodePacked(
            '         <g transform="translate(230, 310)">', 
            '             <mask id="mask0_109_112" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="60" y="95" width="576"', 
            '                 height="417">', 
            '                 <path', 
            '                     d="M412.599 511.123C427.084 407.789 504.42 393.741 541.278 399.634L598.118 274.99L635.107 193.878C518.709 205.216 443.215 133.212 420.018 95.7931L407.793 122.602L353.106 242.524C340.789 269.533 314.529 287.502 284.892 289.2L157.513 296.497L115.02 298.931L74.6788 301.242C73.8289 301.29 73.4002 302.291 73.9757 302.918C106.421 338.282 147.654 422.791 60.7515 488.097C65.5205 490.92 121.854 495.313 193.167 499.698C263.434 504.018 348.245 508.329 412.599 511.123Z"', 
            '                     fill="black" />', 
            '             </mask>', 
            '             <g mask="url(#mask0_109_112)">', 
            '                 <path', 
            '                     d="M592.541 285.996C574.311 285.258 536.855 295.362 532.871 341.676L546.764 347.337C546.936 345.391 547.232 343.219 547.67 340.898L566.645 346.588C566.805 344.42 567.062 342.123 567.438 339.761L585.113 344.581C582.372 337.394 581.205 318.804 598.468 301.936L589.228 305.164L590.885 295.58L592.541 285.996Z"', 
            '                     fill="#FFF066" />', 
            '                 <path', 
            '                     d="M589.228 305.164L590.885 295.58M589.228 305.164C575.506 310.921 569.567 326.381 567.438 339.761M589.228 305.164L598.468 301.936M607.708 298.707L598.468 301.936M590.885 295.58L592.541 285.996C574.311 285.258 536.855 295.362 532.871 341.676L546.764 347.337C546.936 345.391 547.232 343.219 547.67 340.898M590.885 295.58C562.826 296.24 551.046 323.008 547.67 340.898M567.438 339.761L585.113 344.581C582.372 337.394 581.205 318.804 598.468 301.936M567.438 339.761C567.062 342.123 566.805 344.42 566.645 346.588L547.67 340.898"', 
            '                     stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M579.709 280.24L587.512 290.228L588.602 291.624L588.302 293.369L586.653 302.946L586.155 305.839L589.003 304.85L598.257 301.634L599.9 301.063L601.439 301.876L612.776 307.87L612.35 295.307L612.289 293.518L613.583 292.28L622.669 283.594L610.372 279.956L608.703 279.462L607.927 277.905L602.212 266.439L595.031 276.857L594.026 278.315L592.27 278.551L579.709 280.24Z"', 
            '                     fill="#FFF066" stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M386.574 384.851C404.804 384.114 442.26 394.217 446.245 440.531L432.352 446.193C432.18 444.247 431.883 442.075 431.445 439.753L412.471 445.443C412.31 443.276 412.053 440.978 411.678 438.616L394.003 443.436C396.744 436.25 397.91 417.659 380.647 400.791L389.888 404.02L388.231 394.435L386.574 384.851Z"', 
            '                     fill="#FFF066" />', 
            '                 <path', 
            '                     d="M389.888 404.02L388.231 394.435M389.888 404.02C403.609 409.777 409.549 425.237 411.678 438.616M389.888 404.02L380.647 400.791M371.407 397.563L380.647 400.791M388.231 394.435L386.574 384.851C404.804 384.114 442.26 394.217 446.245 440.531L432.352 446.193C432.18 444.247 431.883 442.075 431.445 439.753M388.231 394.435C416.289 395.096 428.07 421.864 431.445 439.753M411.678 438.616L394.003 443.436C396.744 436.25 397.91 417.659 380.647 400.791M411.678 438.616C412.053 440.978 412.31 443.276 412.471 445.443L431.445 439.753"', 
            '                     stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M399.406 379.096L391.603 389.083L390.513 390.479L390.814 392.225L392.462 401.801L392.96 404.695L390.112 403.705L380.859 400.489L379.215 399.918L377.676 400.732L366.339 406.725L366.765 394.163L366.826 392.373L365.532 391.136L356.446 382.449L368.743 378.812L370.412 378.318L371.188 376.76L376.903 365.294L384.084 375.713L385.09 377.171L386.845 377.407L399.406 379.096Z"', 
            '                     fill="#FFF066" stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M216.697 298.04C234.928 297.302 272.384 307.406 276.368 353.72L262.475 359.381C262.303 357.435 262.006 355.263 261.568 352.942L242.594 358.632C242.434 356.464 242.177 354.167 241.801 351.805L224.126 356.625C226.867 349.438 228.034 330.848 210.771 313.98L220.011 317.208L218.354 307.624L216.697 298.04Z"', 
            '                     fill="#FFF066" />', 
            '                 <path', 
            '                     d="M220.011 317.208L218.354 307.624M220.011 317.208C233.733 322.965 239.672 338.425 241.801 351.805M220.011 317.208L210.771 313.98M201.53 310.751L210.771 313.98M218.354 307.624L216.697 298.04C234.928 297.302 272.384 307.406 276.368 353.72L262.475 359.381C262.303 357.435 262.006 355.263 261.568 352.942M218.354 307.624C246.412 308.284 258.193 335.052 261.568 352.942M241.801 351.805L224.126 356.625C226.867 349.438 228.034 330.848 210.771 313.98M241.801 351.805C242.177 354.167 242.434 356.464 242.594 358.632L261.568 352.942"', 
            '                     stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M229.53 292.284L221.727 302.272L220.636 303.668L220.937 305.413L222.585 314.99L223.083 317.883L220.235 316.894L210.982 313.678L209.338 313.107L207.799 313.92L196.463 319.914L196.889 307.351L196.949 305.562L195.655 304.324L186.569 295.638L198.866 292L200.535 291.506L201.312 289.949L207.026 278.483L214.208 288.901L215.213 290.359L216.968 290.595L229.53 292.284Z"', 
            '                     fill="#FFF066" stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M424.864 196.305C406.634 195.568 369.178 205.671 365.194 251.985L379.087 257.647C379.259 255.701 379.555 253.529 379.993 251.207L398.968 256.897C399.128 254.73 399.385 252.432 399.761 250.07L417.436 254.89C414.695 247.704 413.528 229.113 430.791 212.245L421.551 215.474L423.208 205.89L424.864 196.305Z"', 
            '                     fill="#FFF066" />', 
            '                 <path', 
            '                     d="M421.551 215.474L423.208 205.89M421.551 215.474C407.829 221.231 401.89 236.691 399.761 250.07M421.551 215.474L430.791 212.245M440.031 209.017L430.791 212.245M423.208 205.89L424.864 196.305C406.634 195.568 369.178 205.671 365.194 251.985L379.087 257.647C379.259 255.701 379.555 253.529 379.993 251.207M423.208 205.89C395.149 206.55 383.369 233.318 379.993 251.207M399.761 250.07L417.436 254.89C414.695 247.704 413.528 229.113 430.791 212.245M399.761 250.07C399.385 252.432 399.128 254.73 398.968 256.897L379.993 251.207"', 
            '                     stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M412.032 190.55L419.835 200.537L420.925 201.933L420.625 203.679L418.976 213.255L418.478 216.149L421.326 215.159L430.58 211.944L432.223 211.372L433.762 212.186L445.099 218.179L444.673 205.617L444.612 203.827L445.906 202.59L454.992 193.904L442.695 190.266L441.026 189.772L440.25 188.214L434.535 176.748L427.354 187.167L426.349 188.625L424.593 188.861L412.032 190.55Z"', 
            '                     fill="#FFF066" stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M562.574 419.851C580.804 419.114 618.26 429.217 622.245 475.531L608.352 481.193C608.18 479.247 607.883 477.075 607.445 474.753L588.471 480.443C588.31 478.276 588.053 475.978 587.678 473.616L570.003 478.436C572.744 471.25 573.91 452.659 556.647 435.791L565.888 439.02L564.231 429.435L562.574 419.851Z"', 
            '                     fill="#FFF066" />', 
            '                 <path', 
            '                     d="M565.888 439.02L564.231 429.435M565.888 439.02C579.609 444.777 585.549 460.237 587.678 473.616M565.888 439.02L556.647 435.791M547.407 432.563L556.647 435.791M564.231 429.435L562.574 419.851C580.804 419.114 618.26 429.217 622.245 475.531L608.352 481.193C608.18 479.247 607.883 477.075 607.445 474.753M564.231 429.435C592.289 430.096 604.07 456.864 607.445 474.753M587.678 473.616L570.003 478.436C572.744 471.25 573.91 452.659 556.647 435.791M587.678 473.616C588.053 475.978 588.31 478.276 588.471 480.443L607.445 474.753"', 
            '                     stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M575.407 414.096L567.604 424.083L566.513 425.479L566.814 427.225L568.462 436.801L568.96 439.695L566.112 438.705L556.859 435.489L555.215 434.918L553.676 435.732L542.34 441.725L542.766 429.163L542.826 427.373L541.532 426.136L532.446 417.449L544.743 413.812L546.412 413.318L547.188 411.76L552.903 400.294L560.085 410.713L561.09 412.171L562.845 412.407L575.407 414.096Z"', 
            '                     fill="#FFF066" stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M224.864 454.002C206.634 453.264 169.178 463.368 165.194 509.682L179.086 515.343C179.259 513.397 179.555 511.225 179.993 508.904L198.968 514.593C199.128 512.426 199.385 510.129 199.761 507.767L217.436 512.587C214.695 505.4 213.528 486.81 230.791 469.942L221.551 473.17L223.207 463.586L224.864 454.002Z"', 
            '                     fill="#FFF066" />', 
            '                 <path', 
            '                     d="M221.551 473.17L223.207 463.586M221.551 473.17C207.829 478.927 201.889 494.387 199.761 507.767M221.551 473.17L230.791 469.942M240.031 466.713L230.791 469.942M223.207 463.586L224.864 454.002C206.634 453.264 169.178 463.368 165.194 509.682L179.086 515.343C179.259 513.397 179.555 511.225 179.993 508.904M223.207 463.586C195.149 464.246 183.369 491.014 179.993 508.904M199.761 507.767L217.436 512.587C214.695 505.4 213.528 486.81 230.791 469.942M199.761 507.767C199.385 510.129 199.128 512.426 198.968 514.593L179.993 508.904"', 
            '                     stroke="black" stroke-width="8" />', 
            '                 <path', 
            '                     d="M212.032 448.246L219.835 458.234L220.925 459.629L220.625 461.375L218.976 470.951L218.478 473.845L221.326 472.855L230.58 469.64L232.223 469.069L233.762 469.882L245.099 475.876L244.673 463.313L244.612 461.523L245.906 460.286L254.992 451.6L242.695 447.962L241.026 447.468L240.25 445.911L234.535 434.445L227.354 444.863L226.349 446.321L224.593 446.557L212.032 448.246Z"', 
            '                     fill="#FFF066" stroke="black" stroke-width="8" />', 
            '             </g>', 
            '         </g>'
        ));
      }
}