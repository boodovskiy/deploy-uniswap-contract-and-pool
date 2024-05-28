async function main() {
    const [deployer] = await ethers.getSigners();

    const BudCoin = await ethers.getContractFactory('BudCoin', deployer);
    const budCoin = await BudCoin.deploy();

    console.log("Bud Coin deployed to ", budCoin.address)
}

// npx hardhat run scripts/00_deployBudCoin.js --network sepolia

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });