import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledForm = styled.form`
	background: ${Colors.whiteColor} 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px ${Colors.boxShadow};
	border: 1px solid ${Colors.borderColor};
	border-radius: 6px;
	opacity: 1;
	width: 50%;
	min-width: 15rem;
	boxsizing: border - box;
	padding: 2rem;
	margin: 2rem;
`;

export const StyledRegistration = styled.h6`
	text-align: center;
	font: italic normal normal 15px Helvetica Neue;
`;
