// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;

import  "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BudCoin is ERC20 {
    constructor() ERC20('BUD', 'Bud Coin') {
        _mint(msg.sender, 2500 * 10**18);
    }
}