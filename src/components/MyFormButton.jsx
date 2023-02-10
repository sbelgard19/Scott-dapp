import React from "react";

function MyFormButton(props) {
	return (
		<div>
			<form>
				<label>Token Name</label>
				<input size="100px" type="text" id="fname1" name="fname1"></input>
				<label >Token Symbol</label>
				<input size="20px" type="text" id="fname2" name="fname2"></input>
			</form>
			<button onClick={props.fcn} className="cta-button">
				{props.buttonLabel}
			</button>
		</div>
	);
}
export default MyFormButton;
