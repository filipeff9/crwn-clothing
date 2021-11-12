import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const OptionContainerStyles = css`
	display: inline-block;
	padding: 10px 15px;
	cursor: pointer;
`;

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	border-bottom: 1px solid black;
	position: sticky;
	top: 0;
	background-color: hsl(40, 12%, 95%);
	z-index: 5;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoAnimated = styled(Logo)`
	transition: all 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	transition-property: filter;

	${LogoContainer}:hover & {
		filter: opacity(50%);
		transition: all 0.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		transition-property: filter;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles};

	&::after {
		content: "";
		display: block;
		width: 0;
		height: 1px;
		background: #000;
		transition: width 0.3s;
	}

	&:hover::after {
		width: 100%;
	}
`;

export const OptionDiv = styled.div`
	${OptionContainerStyles};

	&::after {
		content: "";
		display: block;
		width: 0;
		height: 1px;
		background: #000;
		transition: width 0.3s;
	}

	&:hover::after {
		width: 100%;
	}
`;
