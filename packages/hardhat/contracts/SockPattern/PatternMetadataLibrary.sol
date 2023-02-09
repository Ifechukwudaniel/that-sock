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

library PatternMetadataLibrary {
    function GetPatternMetadata(
        uint256 currentPattern
    ) public pure returns (string memory) {
        if (currentPattern == 0) {
            return '{"trait_type":"Pattern", "value":"Bones"}';
        } else if (currentPattern == 1) {
            return '{"trait_type":"Pattern", "value":"Chilli Paper"}';
        } else if (currentPattern == 2) {
            return '{"trait_type":"Pattern", "value":"Clouds"}';
        } else if (currentPattern == 3) {
            return '{"trait_type":"Pattern", "value":"Fire"}';
        } else if (currentPattern == 4) {
            return '{"trait_type":"Pattern", "value":"HeartBreaks"}';
        } else if (currentPattern == 5) {
            return '{"trait_type":"Pattern", "value":"Hearts"}';
        } else if (currentPattern == 6) {
            return '{"trait_type":"Pattern", "value":"Lemons"}';
        } else if (currentPattern == 7) {
            return '{"trait_type":"Pattern", "value":"Lighting"}';
        } else if (currentPattern == 8) {
            return '{"trait_type":"Pattern", "value":"Rainbows"}';
        } else if (currentPattern == 9) {
            return '{"trait_type":"Pattern", "value":"Stars"}';
        } else if ((currentPattern == 10)) {
            return '{"trait_type":"Pattern", "value":"Stripes"}';
        } else if (currentPattern == 11) {
            return '{"trait_type":"Pattern", "value":"Ufos"}';
        } else {
            return '{"trait_type":"Pattern", "value":"None"}';
        }
    }

    function GetPatternText(
        uint256 currentPattern
    ) public pure returns (string memory) {
        if (currentPattern == 0) {
            return "Bones";
        } else if (currentPattern == 1) {
            return "Chilli Paper";
        } else if (currentPattern == 2) {
            return "Clouds";
        } else if (currentPattern == 3) {
            return "Fire";
        } else if (currentPattern == 4) {
            return "HeartBreaks";
        } else if (currentPattern == 5) {
            return "Hearts";
        } else if (currentPattern == 6) {
            return "Lemons";
        } else if (currentPattern == 7) {
            return "Lighting";
        } else if (currentPattern == 8) {
            return "Rainbows";
        } else if (currentPattern == 9) {
            return "Stars";
        } else if ((currentPattern == 10)) {
            return "Stripes";
        } else if (currentPattern == 11) {
            return "Ufos";
        } else {
            return "No";
        }
    }
}
