// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;

import  "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ABudCoin is ERC20 {
    constructor() ERC20('ABUD', 'ABud Coin') {
        _mint(msg.sender, 3500 * 10**18);
    }
}