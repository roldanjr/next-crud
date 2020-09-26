import { PencilSVG, TrashSVG } from "@/icons";

export function Table() {
	return (
		<table className="table">
			<thead className="table__head">
				<tr>
					<th>Full name</th>
					<th>Email</th>
					<th>Address</th>
					<th>Phone</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody className="table__body">
				<tr>
					<td>Roldan Montilla Jr</td>
					<td>roldanjrmontilla@gmail.com</td>
					<td>Lupon Davao Oriental</td>
					<td>09562031579</td>
					<td>
						<button className="btn btn__compact btn__edit">
							<PencilSVG />
						</button>
						<button className="btn btn__compact btn__delete">
							<TrashSVG />
						</button>
					</td>
				</tr>
				<tr>
					<td>Remark Montilla</td>
					<td>remarkmontilla@gmail.com</td>
					<td>Lupon Davao Oriental</td>
					<td>09566782760</td>
					<td>
						<button className="btn btn__compact btn__edit">
							<PencilSVG />
						</button>
						<button className="btn btn__compact btn__delete">
							<TrashSVG />
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
