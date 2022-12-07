import {
  CREATE_BLOCKCHAIN,
  EDIT_BLOCKCHAIN,
  GET_BLOCKCHAIN,
} from "../types/BlockchainType";

const initialState = {
  productBlockchain: [],
};

const BlockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKCHAIN:
      return {
        ...state,
        productBlockchain: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default BlockchainReducer;
