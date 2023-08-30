const { ethers } = require("hardhat");

async function main() {
    const Bitizens = await ethers.deployContract("Bitizens");
    await Bitizens.waitForDeployment();
    const address = await Bitizens.getAddress()

    console.log(
        `Deployed to ${Bitizens.target}`
    )
}

main()
.catch((e) => {
    console.error(e);
    process.exitCode = 1;
})