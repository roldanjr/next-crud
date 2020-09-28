import Employee from "@/models/Employee";
import "@/utils/dbConnect";

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const employees = await Employee.find({}).sort({
					createdAt: "desc",
				});

				return res.status(200).json({
					success: true,
					data: employees,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		case "POST":
			try {
				const employees = await Employee.create(req.body);
				return res.status(201).json({
					success: true,
					data: employees,
				});
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};
