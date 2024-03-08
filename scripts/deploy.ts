const hre = require("hardhat");

async function main() {
    const deployedContract = await hre.ethers.deployContract("Takocoin");
    await deployedContract.waitForDeployment();
    console.log(
        `contract deployed to https://zkatana.explorer.startale.com/address/${deployedContract.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});