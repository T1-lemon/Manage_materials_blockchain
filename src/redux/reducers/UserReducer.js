import { USER } from "../../constannts/storage";
import { USER_LOGIN } from "../types/UserType";
let userLogin = {};

if (localStorage.getItem(USER)) {
  userLogin = JSON.parse(localStorage.getItem(USER));
}

const initialState = {
  user: userLogin,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      state.user = action.userLoggedIn;

      // console.log("user",state.user);

      return { ...state };

    default:
      return state;
  }
};

export default UserReducer;
