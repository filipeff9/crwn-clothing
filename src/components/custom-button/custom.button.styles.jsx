import styled, { css } from "styled-components";

const buttonSyles = css`
	color: hsl(40, 12%, 95%);
	background-color: black;
	border: 1px solid black;

	&:hover {
		background-color: hsl(40, 12%, 95%);
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: hsl(40, 12%, 95%);
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: hsl(40, 12%, 95%);
		border: 1px solid black;
	}
`;

const googleSignInStyles = css`
	background-color: #4185f4;
	color: hsl(40, 12%, 95%);
	border: none;

	&:hover {
		background-color: #275092;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonSyles;
};

export const CustomButtonComponent = styled.button`
	min-width: 165px;
	width: auto;
	min-height: 50px;
	letter-spacing: 0.5px;
	/* line-height: 50px; */
	padding: 0 35px 0 35px;
	margin: 4px;
	font-size: 14px;
	background-color: black;
	color: hsl(40, 12%, 95%);
	text-transform: uppercase;
	font-family: "Heebo";
	font-weight: bolder;
	border: 1px solid black;
	cursor: pointer;
	transition: all 0.25s ease-out;
	transition-property: background-color, color;

	${getButtonStyles}
`;
