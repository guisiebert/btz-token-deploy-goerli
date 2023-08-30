// Testing an alternative way of deploying

const { ethers } = require("hardhat");

async function main() {

    const Bitizens = await ethers.getContractFactory("Bitizens");
    const btz = await Bitizens.deploy()
    const address = await btz.getAddress()

    console.log(
        `Deployed to ${address}`
    )
}

main()
.catch((e) => {
    console.error(e);
    process.exitCode = 1;
})