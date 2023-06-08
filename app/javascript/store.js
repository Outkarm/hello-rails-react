import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import greetingReducer from "./greetingReducer";

const store = createStore(greetingReducer, applyMiddleware(thunk));

export default store;
