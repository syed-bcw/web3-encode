const { ethers } = require("ethers");
const ERC20ABI = require('./erc20abi.json');

const main = async () => {
    let iface = new ethers.utils.Interface(ERC20ABI);
    const callData = iface.encodeFunctionData("name()", []);
    console.log(callData)
}
main();
