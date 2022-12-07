import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import CategoryReducer from "./reducers/CategoryReducer";
import AgencyReducer from "./reducers/AgencyReducer";
import UserReducer from './reducers/UserReducer';
import ProductReducer from './reducers/ProductReducer';
import BlockchainReducer from "./reducers/BlockchainReducer";

const composedEnhances = composeWithDevTools(applyMiddleware(reduxThunk));

const rootReducer = combineReducers({
    CategoryReducer,
    AgencyReducer,
    UserReducer,
    ProductReducer,
    BlockchainReducer,
});

const store = createStore(rootReducer, composedEnhances);


export default store;

