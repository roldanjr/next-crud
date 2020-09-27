import * as t from "../types";

export const setModalOpen = (isModalOpen) => {
	return {
		type: t.SHOW_MODAL,
		payload: isModalOpen,
	};
};
