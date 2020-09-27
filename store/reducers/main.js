import * as t from "../types";

const initialState = {
	isModalOpen: false,
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.SHOW_MODAL:
			return {
				...state,
				isModalOpen: action.payload,
			};
		default:
			return state;
	}
};

export default mainReducer;
