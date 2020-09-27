import { combineReducers } from "redux";
import employeeReducer from "./employee";

const rootReducer = combineReducers({
	employee: employeeReducer,
});

export default rootReducer;
