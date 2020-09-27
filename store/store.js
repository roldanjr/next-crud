import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "./reducers";

const store = createStore(rootReducer, devToolsEnhancer());

export const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
