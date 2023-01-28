pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "./Patterns/BonePattern.sol";
import "./Patterns/ChilliPattern.sol";
import "./Patterns/CloudPattern.sol";
import "./Patterns/FirePattern.sol";
import "./Patterns/HeartBreakPattern.sol";
import "./Patterns/HeartPattern.sol";
import "./Patterns/LemonPattern.sol";
import "./Patterns/LightingPattern.sol";
import "./Patterns/MultiplePattern.sol";
import "./Patterns/StarPattern.sol";
import "./Patterns/StripePattern.sol";
import "./Patterns/UfoPattern.sol";

library PatternLibrary {

    function GetPattern(uint256 currentPattern) public pure returns(string memory){
      if (currentPattern == 0) {
         return BonePattern.pattern();
      }
      else if (currentPattern == 1) {
         return ChilliPattern.pattern();
      }
      else if (currentPattern == 2) {
         return CloudPattern.pattern();
      }
      else if(currentPattern == 3) {
        return FirePattern.pattern();
      }
      else if(currentPattern == 4){
         return HeartBreakPattern.pattern();
      }
      else if(currentPattern == 5) {
          return HeartPattern.pattern();
      }
      else if(currentPattern == 6){
         return LemonPattern.pattern();
      }
      else if(currentPattern == 7){
        return LightingPattern.pattern();
      }
      else if(currentPattern == 8){
        return MultiplePattern.pattern();
      }
      else if(currentPattern == 9) {
        return StarPattern.pattern();
      }
      else if((currentPattern == 10)) {
        return StripePattern.pattern();
      }
      else if(currentPattern == 11){
        return  UfoPattern.pattern();
      }
      else {
         return "";
      }
    }
}
