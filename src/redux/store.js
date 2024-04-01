import {createStore,combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { todoReducers } from "./reducers/todoReducers";
const reducer = combineReducers({
  Todo:todoReducers
});
let initialState = {};
const middleware = []
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store; 