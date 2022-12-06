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
