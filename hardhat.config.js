require("@nomicfoundation/hardhat-toolbox")
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:  "0.8.18",
  networks: {
    sepolia: {
      url: process.env.INFURA_URL_SEPOLIA,
      accounts: [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_3]
    },
  },
};
