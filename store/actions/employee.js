import * as t from "../types";

export const setModalOpen = (isModalOpen) => {
	return {
		type: t.SHOW_MODAL,
		payload: isModalOpen,
	};
};

export const addEmployee = (employee) => {
	return {
		type: t.ADD_EMPLOYEE,
		payload: employee,
	};
};

export const updateEmployee = (employee) => {
	return {
		type: t.UPDATE_EMPLOYEE,
		payload: employee,
	};
};

export const deleteEmployee = (id) => {
	return {
		type: t.DELETE_EMPLOYEE,
		payload: id,
	};
};

export const setSelectedEmployee = (id) => {
	return {
		type: t.SELECT_EMPLOYEE,
		payload: id,
	};
};
