async function main() {
    const [deployer] = await ethers.getSigners();

    const ABudCoin = await ethers.getContractFactory('ABudCoin', deployer);
    const abudCoin = await ABudCoin.deploy();

    console.log("ABud Coin deployed to ", abudCoin.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });