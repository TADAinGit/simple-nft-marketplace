// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ESDC_NFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    IERC20 public _tokenAddress;
    uint256 _rate = 100 * 10**uint256(18);

    constructor(address tokenAddress) ERC721("ESDC_NFT", "ENFT") {
        _tokenAddress = IERC20(tokenAddress);
    }

    // Mint NFT
    function mintNFT(string memory tokenURI) public returns (uint256) {
        _tokenAddress.transferFrom(msg.sender, address(this), _rate);

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    // Set fee of minting NFT
    function setRate(uint256 rate) public onlyOwner {
        _rate = rate;
    }

    // Withdraw token to owner address
    function withdrawToken() public onlyOwner {
        _tokenAddress.transfer(
            msg.sender,
            _tokenAddress.balanceOf(address(this))
        );
    }

    // Return token balance of this contract
    function tokenBalance() public view onlyOwner returns (uint256) {
        return _tokenAddress.balanceOf(address(this));
    }
}
