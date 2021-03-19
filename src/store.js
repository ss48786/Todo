import { createStore } from "redux";
import reducer from "./reducer";
import types from "./types";



const store = createStore(reducer);

export default store;
