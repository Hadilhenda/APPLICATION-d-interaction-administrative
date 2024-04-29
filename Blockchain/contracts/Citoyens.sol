//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
contract Citoyens {
 uint256 citoyencount;
 event Transfer(string nom, string prenom, string pere,string mere,string sexe,string naissance, uint256 timestamp, string keyword);
 struct TransferStruct {
  string nom;
  string prenom;
  string pere;
  string mere;
  string sexe;
  string naissance;
  uint256 timestamp;
  string keyword;
 }

TransferStruct[] citoyens;

// add to blockchain
function addToBlockchain(string memory nom,string memory prenom,string memory pere,string memory mere,string memory sexe,string memory naissance, string memory keyword ) public {
citoyencount += 1;
citoyens.push(TransferStruct(nom, prenom, pere, mere, sexe, naissance, block.timestamp, keyword));
 emit Transfer(nom, prenom, pere, mere, sexe, naissance, block.timestamp, keyword);
}


function getAllCitoyens() public view returns (TransferStruct[] memory){
return citoyens;
}


function getCitoyensCount() public view returns (uint256){
 return citoyencount;
}




}
