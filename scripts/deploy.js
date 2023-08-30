const { ethers } = require("hardhat");

async function main() {
    const Bitizens = await ethers.deployContract("Bitizens");
    await Bitizens.waitForDeployment();

    ethers.getContractFactory("")

    console.log(
        `Deployed to ${Bitizens.target}`
    )
}

main()
.catch((e) => {
    console.error(e);
    process.exitCode = 1;
})