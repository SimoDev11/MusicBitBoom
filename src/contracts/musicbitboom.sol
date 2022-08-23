// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract musicbitboom is ERC721, ERC721Enumerable, ERC721Burnable  {

    using Strings for uint256;
	using SafeMath for uint256;
    using Counters for Counters.Counter;

	Counters.Counter private _tokenIdTracker;

    address public owner;
    string public baseTokenURI = "https://gateway.pinata.cloud/ipfs/";
    mapping(address => bool) public allowedMinters;
    mapping(uint256 => string) public nftsIpfsHashes;

	modifier onlyOwner() {
        require(owner == msg.sender, "Caller is not Owner");
  	    _;
    }

    constructor() ERC721("MusicBitBoom", "MBB") {
        //owner should be set to fiverr user address;	
	    owner = msg.sender;
    }

    function showOwner() public view returns (address) {
        return(owner);
    }

	function _totalSupply() internal view returns (uint) {
  	    return _tokenIdTracker.current();
    }

    function totalMint() public view returns (uint256) {
        return _totalSupply();
    }

    function approveMinter(address addr) public onlyOwner {
        allowedMinters[addr] = true;
    }

    function mint(string memory ipfsHash) public {

        require(allowedMinters[msg.sender] == true, "User not allowed to mint");

		uint id = _totalSupply();
        _tokenIdTracker.increment();
		_safeMint(msg.sender, id);

		nftsIpfsHashes[id] = ipfsHash;
	}

    function setBaseURI(string memory baseURI) public onlyOwner {
  	    baseTokenURI = baseURI;
    }

	function _baseURI() internal view virtual override returns (string memory) {
  	    return baseTokenURI;
    }

	function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
    {
        require(
          _exists(tokenId),
          "ERC721Metadata: URI query for nonexistent token"
        );

        //string memory currentBaseURI = _baseURI();
        //return bytes(currentBaseURI).length > 0
        //? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        //: "";
        string memory currentBaseURI = _baseURI();
        return string(abi.encodePacked(currentBaseURI, nftsIpfsHashes[tokenId]));
    }

	function _beforeTokenTransfer(
    address from,
    address to,
  	uint256 tokenId
    ) internal virtual override(ERC721, ERC721Enumerable) {
  	    super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
  	    return super.supportsInterface(interfaceId);
    }
}
