import { PersonAddSVG } from "@/icons";

export function Header() {
	return (
		<header className="header">
			<h1 className="header__h1">
				Manage <span>Employees</span>
			</h1>
			<button className="btn btn__primary btn__icon">
				<PersonAddSVG /> Add new
			</button>
		</header>
	);
}
