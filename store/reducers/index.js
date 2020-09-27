import { combineReducers } from "redux";
import mainReducer from "./main";

const rootReducer = combineReducers({
	main: mainReducer,
});

export default rootReducer;
