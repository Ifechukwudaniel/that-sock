pragma solidity ^0.8.0;

//SPDX-License-Identifier: MIT

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

// Defining Library
library PinMetadataLibrary {
    function GetPinMetadata(
        uint256 currentPin
    ) public pure returns (string memory) {
        string memory pinProperty = '{"trait_type":"Pin", "value":"';
        if (currentPin == 0) {
            //Lighting
            return string(abi.encodePacked(pinProperty, 'Lighting"}'));
        } else if (currentPin == 1) {
            // Alien
            return string(abi.encodePacked(pinProperty, 'Alien"}'));
        } else if (currentPin == 2) {
            // Alien
            return string(abi.encodePacked(pinProperty, 'Alien"}'));
        } else if (currentPin == 3) {
            // Cloud
            return string(abi.encodePacked(pinProperty, 'Cloud"}'));
        } else if (currentPin == 4) {
            // Heart
            return string(abi.encodePacked(pinProperty, 'Heart"}'));
        } else if (currentPin == 5) {
            //Flower
            return string(abi.encodePacked(pinProperty, 'Flower"}'));
        } else if (currentPin == 6) {
            // Star
            return string(abi.encodePacked(pinProperty, 'Star"}'));
        } else if (currentPin == 7) {
            //Skull
            return string(abi.encodePacked(pinProperty, 'Skull"}'));
        } else if (currentPin == 8) {
            // Frog
            return string(abi.encodePacked(pinProperty, 'Frog"}'));
        } else if (currentPin == 9) {
            // Bear
            return string(abi.encodePacked(pinProperty, 'Bear"}'));
        } else if ((currentPin == 10)) {
            //Chilli
            return string(abi.encodePacked(pinProperty, 'Chilli"}'));
        } else if (currentPin == 11) {
            // Shark
            return string(abi.encodePacked(pinProperty, 'Shark"}'));
        } else if (currentPin == 12) {
            // Devil
            return string(abi.encodePacked(pinProperty, 'Devil"}'));
        } else if (currentPin == 13) {
            //Fire
            return string(abi.encodePacked(pinProperty, 'Fire"}'));
        } else {
            return string(abi.encodePacked(pinProperty, 'None"}'));
        }
    }

    function GetPinText(
        uint256 currentPin
    ) public pure returns (string memory) {
        if (currentPin == 0) {
            //Lighting
            return "Lighting";
        } else if (currentPin == 1) {
            // Alien
            return "Alien";
        } else if (currentPin == 2) {
            // Alien
            return "Alien";
        } else if (currentPin == 3) {
            // Cloud
            return "Cloud";
        } else if (currentPin == 4) {
            // Heart
            return "Heart";
        } else if (currentPin == 5) {
            //Flower
            return "Flower";
        } else if (currentPin == 6) {
            // Star
            return "Star";
        } else if (currentPin == 7) {
            //Skull
            return "Skull";
        } else if (currentPin == 8) {
            // Frog
            return "Frog";
        } else if (currentPin == 9) {
            // Bear
            return "Bear";
        } else if ((currentPin == 10)) {
            //Chilli
            return "Chilli";
        } else if (currentPin == 11) {
            // Shark
            return "Shark";
        } else if (currentPin == 12) {
            // Devil
            return "Devil";
        } else if (currentPin == 13) {
            //Fire
            return "Fire";
        } else {
            return "No";
        }
    }
}
