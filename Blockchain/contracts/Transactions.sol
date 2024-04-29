//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
contract Transactions {
 uint256 transactioncount;

 event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
 struct TransferStruct {
  address sender;
  address receiver;
  uint amount;
  string message;
  uint256 timestamp;
  string keyword;
 }

TransferStruct[] transactions;
//payable adress existe wl le 
// add to blockchain
function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword ) public {
 transactioncount += 1;
 transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
 emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
}


// get all transaction return view if transferStruct from memory
function getAllTransactions() public view returns (TransferStruct[] memory){
return transactions;
}


// get transaction count return number
function getTransactionsCount() public view returns (uint256){
 return transactioncount;
}




}