import ReactDOM from "react-dom";
import { CheckSVG, CloseSVG } from "@/icons";

export function Modal() {
	return ReactDOM.createPortal(
		<div className="modal">
			<div className="modal__content">
				<header className="header modal__header">
					<h1 className="header__h2">
						Add <span>Employee</span>
					</h1>
					<button className="btn btn__compact btn__close">
						<CloseSVG />
					</button>
				</header>

				<form className="form modal__form">
					<div className="form__element">
						<label htmlFor="nameInput" className="label">
							Full name
						</label>
						<input
							type="text"
							className="input"
							id="nameInput"
							placeholder="Full name"
						/>
					</div>

					<div className="form__element">
						<label htmlFor="emailInput" className="label">
							Email
						</label>
						<input
							type="email"
							className="input"
							id="emailInput"
							placeholder="Email"
						/>
					</div>

					<div className="form__element">
						<label htmlFor="addressArea" className="label">
							Address
						</label>
						<textarea
							type="text"
							className="area"
							id="addressArea"
							placeholder="Address"
						/>
					</div>

					<div className="form__element">
						<label htmlFor="phoneNumber" className="label">
							Phone
						</label>
						<input
							type="number"
							className="input"
							id="phoneNumber"
							placeholder="Phone"
						/>
					</div>

					<div className="form__action">
						<button className="btn btn__icon" type="button">
							<CloseSVG /> Cancel
						</button>
						<button className="btn btn__primary btn__icon" type="submit">
							<CheckSVG /> Submit
						</button>
					</div>
				</form>
			</div>
		</div>,
		document.body
	);
}
