import styled from "styled-components";
import Colors from "theme/Colors";

const StyledInput = styled.input`
	top: 301px;
	left: 492px;
	width: 100%;
	height: 40px;
	border: 1px solid #dddddd;
	border-radius: 6px;
	opacity: 1;
	outline: none; /* mientras escribes */

	&.success {
		background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid "#DDDDDD";
	}
	&.disabled {
		background: #e7ebf0 0% 0% no-repeat padding-box;
		border: 2px solid "#DDDDDD";
	}
	&.error {
		background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid #971132;
	}
`;

export default StyledInput;
