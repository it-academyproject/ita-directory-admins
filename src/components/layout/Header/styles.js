import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledTitle = styled.div`
	color: white;
	background-color: ${Colors.darkBlueColor};
	padding: 2px 15vw;
	text-align: center;
	&.logged {
		text-align: left;
	}
`;
export const StyledHeaderTop = styled.div`
	display: flex;
	justify-content: center;
	color: ${Colors.darkBlueColor};
	padding: 2px 15vw;

	&.logged {
		justify-content: space-between;
	}
`;

export const StyledImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

export const StyledDropdown = styled.div`
	position: absolute;
	padding: 0;
	margin-top: 0.3rem;
	z-index: 1;
	text: center;
	background: #ffffff 0% 0% no-repeat padding-box;
	border: 1px solid #dddddd;
	border-radius: 6px 6px 0px 0px;
	opacity: 1;
`;

export const StyledLi = styled.li`
	border: 1px solid #dddd;
	padding: 0 1rem;
	margin: 0;
	min-height: 2.5rem;
`;

export const StyledButton = styled.button`
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 2px 4px #00000029;
	border: none;
	border-radius: 6px;
	opacity: 1;
`;
