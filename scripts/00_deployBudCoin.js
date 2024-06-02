async function main() {
    const [deployer] = await ethers.getSigners();

    const BudCoin = await ethers.getContractFactory('BudCoin', deployer);
    const budCoin = await BudCoin.deploy();

    console.log("Bud Coin deployed to ", budCoin.address)
}

// npx hardhat run scripts/00_deployBudCoin.js --network sepolia
// Bud Coin deployed to  0x20FeD52cf5eFD75b37A142037bE9af9782AcB202

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });