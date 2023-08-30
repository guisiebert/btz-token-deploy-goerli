// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Bitizens is ERC20 {
    uint _initial_supply = 1000 * (10**18);

    constructor() ERC20("Bitizens", "BTZ"){
        _mint(msg.sender, _initial_supply);
    }
 }