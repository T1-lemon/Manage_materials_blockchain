import { CREATE_BLOCKCHAIN, EDIT_BLOCKCHAIN, GET_BLOCKCHAIN } from "../types/BlockchainType";

export const getAllProductsInsideBlockchain = (data) => {
    return {
        type: GET_BLOCKCHAIN,
        payload: data,
    }
}
