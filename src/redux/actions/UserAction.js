import { ACCESS_TOKEN, USER } from "../../constannts/storage";
import {
  getInforUserService,
  loginService,
  registerService,
} from "../../services/userService";
import { USER_LOGIN } from "../types/UserType";

export const registerUserApi = (values, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await registerService(values);

      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUserApi = (values, navigate) => {
  return async (dispatch) => {
    const { data } = await loginService(values);
    const { accessToken } = data;
    //lưu vào local storage
    await localStorage.setItem(ACCESS_TOKEN, accessToken);

    await dispatch(getInforUserApi());

    navigate("/home/dashboard/overview");
  };
};

export const getInforUserApi = () => {
  return async (dispatch) => {
    const { data } = await getInforUserService();
    await localStorage.setItem(USER, JSON.stringify(data));

    //dispatch lên reducer
    await dispatch({
      type: USER_LOGIN,
      userLoggedIn: data,
    });
  };
};
