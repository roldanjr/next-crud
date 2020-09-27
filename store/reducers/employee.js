import { v4 as uuid } from "uuid";
import * as t from "../types";

const initialState = {
	employees: [
		{
			id: uuid(),
			name: "Roldan Montilla Jr",
			email: "roldanjrmontilla@gmail.com",
			address: "Lupon Davao Oriental",
			phone: "09562031579",
		},
		{
			id: uuid(),
			name: "Remark Montilla",
			email: "remarkmontilla@gmail.com",
			address: "Lupon Davao Oriental",
			phone: "09566782760",
		},
	],
	selectedEmployee: null,
	isModalOpen: false,
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.SHOW_MODAL:
			return {
				...state,
				isModalOpen: action.payload,
			};
		case t.ADD_EMPLOYEE:
			const newEmployee = {
				id: uuid(),
				...action.payload,
			};
			return {
				...state,
				employees: [newEmployee, ...state.employees],
			};
		case t.UPDATE_EMPLOYEE:
			const updatedEmployee = state.employees.map((employee) => {
				if (employee.id === action.payload.id) {
					return {
						...employee,
						name: action.payload.name,
						email: action.payload.email,
						address: action.payload.address,
						phone: action.payload.phone,
					};
				}
				return employee;
			});

			return { ...state, employees: updatedEmployee };
		case t.DELETE_EMPLOYEE:
			const newEmployeeList = state.employees.filter(
				(employee) => employee.id !== action.payload
			);
			return {
				...state,
				employees: newEmployeeList,
			};
		case t.SELECT_EMPLOYEE:
			const selectedEmployee = state.employees.find(
				(employee) => employee.id === action.payload
			);
			return {
				...state,
				selectedEmployee,
			};
		default:
			return state;
	}
};

export default mainReducer;
