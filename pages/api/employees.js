import { v4 as uuid } from "uuid";

export default (req, res) => {
	return res.json({
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
	});
};
