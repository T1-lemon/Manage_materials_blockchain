import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducer from "./reducers/UserReducer"

import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
    UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));


export default store;
