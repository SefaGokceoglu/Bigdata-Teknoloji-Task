import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { nodeReducer } from "./reducers/nodeReducer";

import { productReducer } from "./reducers/productReducer";
const reducer = combineReducers({
  products: productReducer,
  selectedNode: nodeReducer,
});

const initialstate = {};
const store = createStore(reducer, initialstate, applyMiddleware(thunk));

export default store;
