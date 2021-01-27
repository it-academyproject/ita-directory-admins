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
	width: 4vw;
`;

export const StyledDropdown = styled.div`
	position: relative;
	top: 0;
	left: 0;
	text: center;
	border: 1px solid ${Colors.lightGrey};
`;
