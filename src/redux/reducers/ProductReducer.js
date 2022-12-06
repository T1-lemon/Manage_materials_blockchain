import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from "../types/ProductType";

const initialState = {
  listProducts: [],
  currentProduct:{},
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      state.listProducts = action.listProducts;
      // console.log("products",state.listProducts);
      return { ...state };
    case GET_DETAIL_PRODUCT:
      state.currentProduct = action.product;
      console.log("products",state.currentProduct);
      return { ...state };

    default:
      return state;
  }
};

export default ProductReducer;
