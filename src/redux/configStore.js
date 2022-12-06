import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import CategoryReducer from "./reducers/CategoryReducer";
import AgencyReducer from "./reducers/AgencyReducer";

const composedEnhances = composeWithDevTools(applyMiddleware(reduxThunk));

const rootReducer = combineReducers({
    CategoryReducer,
    AgencyReducer,
    UserReducer,
    ProductReducer
});

const store = createStore(rootReducer, composedEnhances);


export default store;

