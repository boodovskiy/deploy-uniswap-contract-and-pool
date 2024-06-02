const { ethers } = require('ethers')
const axios = require('axios')
require('dotenv').config()

const UNISWAP_V3_FACTORY_ADDRESS = '0x0227628f3F023bb0B980b67D528571c95c6DaC1c'
const UNISWAP_V3_FACTORY_ADDRESS_ABI = '0x1F98431c8aD98523631AE4a59f267346ea31F984'


const SEPOLIA_PROVIDER = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL_SEPOLIA)
const WALLET_ADDRESS = process.env.WALLET_ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY
const BUD_COIN_ADDRESS = '0x20FeD52cf5eFD75b37A142037bE9af9782AcB202'
const ABUD_COIN_ADDRESS = '0x62c8Eee9F3376Af4971fEbEA44De5e0021021C37'

const wallet = new ethers.Wallet(PRIVATE_KEY)
const connectedWallet = wallet.connect(SEPOLIA_PROVIDER)

async function main() {
    // setup V3 factory
    const apiKey = process.env.ETHERSCAN_KEY
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${UNISWAP_V3_FACTORY_ADDRESS_ABI}&apikey=${apiKey}`
    const res = await axios.get(url)
    const abi = JSON.parse(res.data.result)

    const factoryContract = new ethers.Contract(
        UNISWAP_V3_FACTORY_ADDRESS,
        abi, 
        SEPOLIA_PROVIDER
    )

    const estimation = await factoryContract.estimateGas.createPool(BUD_COIN_ADDRESS,ABUD_COIN_ADDRESS,500)
    console.log('estimation:', estimation)

    // create the pool
    const tx = await factoryContract.connect(connectedWallet).createPool(
        BUD_COIN_ADDRESS,
        ABUD_COIN_ADDRESS,
        500,
        {
            gasPrice: 5000000,
            gasLimit: 5000000,
        }
    )

    const receipt = await tx.wait()
    console.log('receipt:', receipt)

    // get pool address
    const newPoolAddress = await factoryContract.getPool(
        BUD_COIN_ADDRESS,
        ABUD_COIN_ADDRESS,
        500
    )
    console.log('newPoolAddress:', newPoolAddress)

    //newPoolAddress: 0xb10751be319ea42623AF51FbBb642201e89190c1
}


main()