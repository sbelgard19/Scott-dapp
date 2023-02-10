import React from "react";

function MyFormButton(props) {
	return (
		<div>
			<form>
				<label for="fname">Token Name</label>
				<input type="text" id="fname" name="fname"></input>
			</form>
			<button onClick={props.fcn} className="cta-button">
				{props.buttonLabel}
			</button>
		</div>
	);
}
export default MyFormButton;
