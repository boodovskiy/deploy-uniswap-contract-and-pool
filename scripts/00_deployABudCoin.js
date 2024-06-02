async function main() {
    const [deployer] = await ethers.getSigners();

    const ABudCoin = await ethers.getContractFactory('ABudCoin', deployer);
    const abudCoin = await ABudCoin.deploy();

    console.log("ABud Coin deployed to ", abudCoin.address)
}

// npx hardhat run scripts/00_deployABudCoin.js --network sepolia
// ABud Coin deployed to  0x62c8Eee9F3376Af4971fEbEA44De5e0021021C37

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });