import Web3 from "web3";
import ProductFactory from "../contracts/ProductFactory.json";

const ABI = ProductFactory.abi;

const initContract = async () => {
    const web3 = new Web3("http://127.0.0.1:7545");
    const id = await web3.eth.net.getId();
    const deployedNetwork = await ProductFactory.networks[id];
    const addressContract = await deployedNetwork.address;
    const contract = await new web3.eth.Contract(ABI, addressContract);
    return {web3, contract}
}

export default initContract
