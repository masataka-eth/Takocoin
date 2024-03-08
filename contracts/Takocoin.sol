// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract Takocoin is ERC20, ERC20Burnable, ERC20Permit {
    constructor() ERC20("Takocoin", "TAKO") ERC20Permit("Takocoin") {
        _mint(msg.sender, 1000000000000 * 10 ** decimals());
    }

    // Live on the Edge, Love the Thrill
}
