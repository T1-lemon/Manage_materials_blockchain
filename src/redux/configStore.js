import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducer from "./reducers/UserReducer"
import ProductReducer from "./reducers/ProductReducer"


import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
    UserReducer,
    ProductReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));


export default store;
