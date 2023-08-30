# Token deploy to Goerli using Hardhat

This project is a simple token deploy ($BTZ) that can be deployed to Goerli testnet.

It was first deployed here:
https://goerli.etherscan.io/token/0xcd11742ca1f6383c48d8491cd4471b4b4434fa4e

Documentation used:
https://hardhat.org/hardhat-runner/docs/guides/deploying

To deploy it again:

## Run NPM 
```shell npm i ```

## Create an .env file
- ALCHEMY_GOERLI_URL= < API URL FROM ALCHEMY>
- PRIVATE_KEY= < PRIVATE KEY OF THE WALLET THAT WILL DEPLOY THE TOKEN>

## Deploy
```  npx hardhat run --network ropsten scripts/deploy.js ```