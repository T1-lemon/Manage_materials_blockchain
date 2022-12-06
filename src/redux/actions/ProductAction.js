import {
  addProductService,
  editProductService,
  getAllProductService,
  getDetailProductService,
} from "../../services/productService";
import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from "../types/ProductType";
import { toast } from "react-toastify";

export const getAllProductApi = () => {
  return async (dispatch) => {
    try {
      const { data } = await getAllProductService();

      await dispatch({
        type: GET_ALL_PRODUCT,
        listProducts: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailProductApi = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await getDetailProductService(id);

      await dispatch({
        type: GET_DETAIL_PRODUCT,
        product: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProductApi = (id, values) => {
  return async (dispatch) => {
    try {
      const { data } = await editProductService(id, values);

      await dispatch(getAllProductApi());
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProductApi = (values, navigate) => {
  return async (dispatch) => {
    try {
      await addProductService(values);

      await toast.success("Add Product to Database Successfully!");

      await dispatch(getAllProductApi());

      navigate("/home/all-product");
    } catch (error) {
      console.log(error);
    }
  };
};
