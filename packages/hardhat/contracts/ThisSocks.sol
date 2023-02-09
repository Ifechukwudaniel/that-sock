pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "base64-sol/base64.sol";

import "./StyleLibrary.sol";
import "./SockPin/PinLibrary.sol";
import "./SockPin/PinLibraryMetadata.sol";
import "./SockLayoutLibrary.sol";
import "./SockBackground/BackgroundLibrary.sol";
import "./SockBackground/BackgroundMetadataLibrary.sol";
import "./SockPattern/PatternLibrary.sol";
import "./SockPattern/PatternMetadataLibrary.sol";

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract ThisSocks is ERC721Enumerable, Ownable {
    using Strings for uint256;
    using Strings for uint160;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    uint256 mintDeadline = block.timestamp + 3650 days;

    // all funds go to buidlguidl.eth
    address payable public constant recipient =
        payable(0x54179E1770a780F2F541f23CB21252De12977d3c);

    uint256 public constant limit = 3728;
    uint256 public constant curve = 1002; // price increase 0,4% with each purchase
    uint256 public price = 0.001 ether;
    // the 1154th optimistic parrot cost 0.01 ETH, the 2306th cost 0.1ETH, the 3459th cost 1 ETH and the last ones cost 1.7 ETH

    // create some DS that gives color set number and then color set number gives color values
    // YOUR_STORAGE_DS_HERE

    //Pin By token Id
    mapping(uint256 => uint256) tokenPin;
    mapping(uint256 => uint256[]) sockColors;
    mapping(uint256 => uint256) sockBackgroundColor;
    mapping(uint256 => uint256) sockBackgroundType;
    mapping(uint256 => uint256) sockPatterns;

    constructor() ERC721("ThisSock", "THS") {}

    function mintItem() public payable returns (uint256) {
        require(block.timestamp < mintDeadline, "DONE MINTING");
        require(msg.value >= price, "NOT ENOUGH");

        price = (price * curve) / 1000;

        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _mint(msg.sender, id);

        bytes32 predictableRandom = keccak256(
            abi.encodePacked(
                id,
                blockhash(block.number - 1),
                msg.sender,
                address(this)
            )
        );

        tokenPin[id] = getPredicableRandomNumber(predictableRandom, 5, 6, 20);
        sockColors[id] = [
            getPredicableRandomNumber(predictableRandom, 1, 2, 12),
            getPredicableRandomNumber(predictableRandom, 8, 9, 12),
            getPredicableRandomNumber(predictableRandom, 20, 30, 12)
        ];
        sockBackgroundColor[id] = getPredicableRandomNumber(
            predictableRandom,
            27,
            31,
            11
        );
        sockBackgroundType[id] = getPredicableRandomNumber(
            predictableRandom,
            20,
            22,
            31
        );
        sockPatterns[id] = getPredicableRandomNumber(
            predictableRandom,
            10,
            30,
            25
        );

        (bool success, ) = recipient.call{value: msg.value}("");
        require(success, "could not send");

        return id;
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        require(_exists(id), "!exist");

        string memory name = string(abi.encodePacked("Sock #", id.toString()));

        string memory base = string("Sock");

        string memory image = Base64.encode(bytes(generateSVGofTokenById(id)));

        (uint256 color1, uint256 color2, uint256 color3) = getColorsByTokenId(
            id
        );

        string memory description = string(
            abi.encodePacked(
                "This Socks has ",
                BackgroundMetadataLibrary.GetBackgroundTypeText(
                    getBackgroundTypeByTokenId(id)
                ),
                " background, ",
                BackgroundMetadataLibrary.GetBackgroundColorText(
                    getBackgroundTypeByTokenId(id)
                ),
                " background color, ",
                PatternMetadataLibrary.GetPatternText(getPinByTokenId(id)),
                " pattern, ",
                PinMetadataLibrary.GetPinText(getPinByTokenId(id)),
                "  pin. ",
                "And has ",
                SockLayoutLibrary.GetColorName(color1),
                ",",
                SockLayoutLibrary.GetColorName(color2),
                ",",
                SockLayoutLibrary.GetColorName(color3),
                " colors"
            )
        );

        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                name,
                                '","description":"',
                                description,
                                '","external_url":"https://thissocks.com/token/',
                                id.toString(),
                                '", "owner":"',
                                (uint160(ownerOf(id))).toHexString(20),
                                '","image": "',
                                "data:image/svg+xml;base64,",
                                image,
                                '",',
                                '"attributes":[',
                                BackgroundMetadataLibrary
                                    .GetBackgroundColorMetadata(
                                        getBackgroundByTokenId(id)
                                    ),
                                ",",
                                BackgroundMetadataLibrary
                                    .GetBackgroundTypeMetadata(
                                        getBackgroundTypeByTokenId(id)
                                    ),
                                ",",
                                SockLayoutLibrary.GetLayoutMetadata(
                                    color1,
                                    color2,
                                    color3
                                ),
                                ",",
                                PinMetadataLibrary.GetPinMetadata(
                                    getPinByTokenId(id)
                                ),
                                ",",
                                PatternMetadataLibrary.GetPatternMetadata(
                                    getPatternByTokenId(id)
                                ),
                                "]",
                                "}"
                            )
                        )
                    )
                )
            );
    }

    // function generateSVGofTokenById(uint256 id) internal view returns (string memory) {
    function generateSVGofTokenById(
        uint256 id
    ) internal view returns (string memory) {
        string memory svg = string(
            abi.encodePacked(
                '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">',
                renderTokenById(id),
                "</svg>"
            )
        );
        return svg;
    }

    // Visibility is `public` to enable it being called by other contracts for composition.
    function renderTokenById(uint256 id) public view returns (string memory) {
        (uint256 color1, uint256 color2, uint256 color3) = getColorsByTokenId(
            id
        );
        uint256 backgroundType = getBackgroundTypeByTokenId(id);
        uint256 patternType = getPatternByTokenId(id);
        string memory render = string(
            abi.encodePacked(
                BackgroundLibrary.GetBackground(
                    backgroundType,
                    BackgroundLibrary.GetBackgroundColor(
                        getBackgroundByTokenId(id)
                    )
                ),
                '<g transform="translate(180, 130)">',
                BackgroundLibrary.BackClip(backgroundType),
                SockLayoutLibrary.GetLayout(
                    SockLayoutLibrary.GetColor(color1),
                    SockLayoutLibrary.GetColor(color2),
                    SockLayoutLibrary.GetColor(color3)
                ),
                PinLibrary.GetPin(getPinByTokenId(id)),
                "</g>",
                BackgroundLibrary.FrontClip(backgroundType),
                PatternLibrary.GetPattern(patternType)
            )
        );
        // we want tail to render first so
        // we list the order in which item should render so that no one hides other
        return render;
    }

    function getPinByTokenId(uint256 id) private view returns (uint256) {
        return tokenPin[id];
    }

    function getBackgroundByTokenId(uint256 id) private view returns (uint256) {
        return sockBackgroundColor[id];
    }

    function getBackgroundTypeByTokenId(
        uint256 id
    ) private view returns (uint256) {
        return sockBackgroundType[id];
    }

    function getColorsByTokenId(
        uint256 id
    ) private view returns (uint256 color1, uint256 color2, uint256 color3) {
        require(_exists(id), "!exist");
        color1 = sockColors[id][0];
        color2 = sockColors[id][1];
        color3 = sockColors[id][2];
    }

    function getPatternByTokenId(uint256 id) private view returns (uint256) {
        require(_exists(id), "!exist");
        return sockPatterns[id];
    }

    function getPredicableRandomNumber(
        bytes32 data,
        uint256 minByte,
        uint256 maxByte,
        uint8 maxNumber
    ) private pure returns (uint256) {
        return
            uint256(
                ((uint8(data[minByte]) << maxNumber) | uint8(data[maxByte])) %
                    maxNumber
            );
    }
}
