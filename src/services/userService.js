import { ACCESS_TOKEN } from "../constannts/storage";
import requestApi from "../ultils/requestApi";

export const registerService = (values) => {
  return requestApi({
    method: "post",
    url: 'user/register',
    data: values,
  });
};

export const loginService = (values) => {
  return requestApi({
    method: "post",
    url: 'user/login',
    data: values,
  });
};

export const getInforUserService = () => {
  return requestApi({
    method: "get",
    url: `user/get_info`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
    },
  });
};

export const editProfileService = (id,userEdit) => {
  return requestApi({
    method: "put",
    url: `user/${id}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
    },
    data:userEdit
  });
};
