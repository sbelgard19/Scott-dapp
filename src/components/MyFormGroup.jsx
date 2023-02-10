import React from "react";
import MyFormButton from "./MyFormButton.jsx";
import MyText from "./MyText.jsx";

function MyFormGroup(props) {
	return (
		<div class="div-1">
			<MyText text={props.text} link={props.link} />
			<MyFormButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);
}
export default MyFormGroup;

