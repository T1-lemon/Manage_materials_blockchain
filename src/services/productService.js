import { ACCESS_TOKEN } from "../constannts/storage";
import requestApi from "../ultils/requestApi";

export const getAllProductService = () => {
  return requestApi({
    method: "get",
    url: 'product',
  });
};

export const getDetailProductService = (id) => {
    return requestApi({
      method: "get",
      url: `product/${id}`,
    });
  };


export const addProductService = (values) => {
    return requestApi({
      method: "post",
      url: `product`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
      data:values,
    });
};

export const editProductService = (id,values) => {
    return requestApi({
      method: "put",
      url: `product/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
      data:values,
    });
};