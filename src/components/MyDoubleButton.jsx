import React from "react";

import MyText from "./MyText.jsx";

function MyDoubleButton(props) {
	return (
		<div>
{/* 			<MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /><MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /> */} 

		<MyText text={props.text1} /> 
		<button onClick={props.fcn1} className="cta-button">{props.buttonLabel1}</button>	
		<MyText text={props.text2} />	
		<button onClick={props.fcn2} className="cta-button">{props.buttonLabel2}</button>  

		</div>
	);

}

export default MyDoubleButton;
