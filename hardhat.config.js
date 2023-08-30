require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
const { ALCHEMY_GOERLI_URL, PRIVATE_KEY } = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: ALCHEMY_GOERLI_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
