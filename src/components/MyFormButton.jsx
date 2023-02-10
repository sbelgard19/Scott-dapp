import React from "react";

function MyFormButton(props) {
	return (
		<div style="border: 1px solid #000000;">
			<form>
				<label>Token Name:  </label>
				<input size="25" type="text" id="fname1" name="TokenName"></input>
				<label >   Token Symbol:  </label>
				<input size="3" maxlength="3" type="text" id="fname2" name="TokenSymbol"></input>
				<label >   Max Supply:  </label>
				<input size="3" maxlength="3" type="text" id="fname2" name="MaxSupply"></input>
			</form>
			<br></br>
			<button onClick={props.fcn} className="cta-button">
				{props.buttonLabel}
			</button>
		</div>
	);
}
export default MyFormButton;