import React from "react";
import MyFormButton from "./MyFormButton.jsx";
import MyText from "./MyText.jsx";

function MyFormGroup(props) {
	return (
		<div style="border:thin">
			<MyText text={props.text} link={props.link} />
			<MyFormButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);
}
export default MyFormGroup;

