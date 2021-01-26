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
