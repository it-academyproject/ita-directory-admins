import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledTitle = styled.div`
	@media only screen and (min-width: 469px) {
		margin-top: 1rem;
		margin-bottom: 2rem;
		color: white;
		background-color: ${Colors.darkBlueColor};
		padding: 2px 15vw;
		text-align: center;
		&.logged {
			text-align: left;
		}
	}
	@media only screen and (max-width: 468px) {
		margin-top: 1rem;
		margin-bottom: 2rem;
		color: white;
		background-color: ${Colors.darkBlueColor};
		padding: 2px 15vw;
		text-align: center;
		font: normal normal normal 20px Helvetica Neue;
		&.logged {
			text-align: left;
			font: normal normal normal 10px Helvetica Neue;
		}
	}
`;

export const StyledHeaderTop = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	color: ${Colors.darkBlueColor};
	padding: 2px 15vw;

	&.logged {
		justify-content: space-between;
	}
`;

export const StyledMiPerfil = styled.div`
	position: relative;
	display: inline-block;
`;

export const StyledLogo = styled.div`
	text-align: left;
	font: normal normal normal 18px Korb-Bold;
	letter-spacing: 0px;
	color: ${Colors.headerBlue};
	text-transform: uppercase;
	opacity: 1;
	justify-conten: flex-end;
	min-width: 10rem;
	padding-top: 15px;
`;

export const StyledImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-left: 0px;
	margin-right: 5px;
`;

export const StyledText = styled.h6`
	text-align: left;
	font: normal normal normal 12px Helvetica Neue;
	letter-spacing: 0px;
	color: ${Colors.headerGrey};
	margin-left: 4px;
	opacity: 1;
`;

export const StyledDropdown = styled.div`
	position: absolute;
	padding: 0;
	z-index: 1;
	text: center;
	background: ${Colors.whiteColor} 0% 0% no-repeat padding-box;
	border: 1px solid ${Colors.lightGrey};
	border-radius: 6px 6px 0px 0px;
	opacity: 1;
`;

export const StyledUl = styled.ul`
	list-style-type: none;
	padding: 0px;
	margin: 0px;
	position: absolute;
`;

export const StyledLi = styled.li`
	border: 1px solid ${Colors.lightGrey};
	padding-top: 10px;
	align-items: center;
	text-align: center;
	min-height: 2.5rem;
	min-width: 6rem;
	line-height: 100%;

	display: block;
	background-color: white;
	position: relative;

	top: 20px;
	z-index: 2;
`;

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${Colors.white} 0% 0% no-repeat padding-box;
	box-shadow: 0px 4px 8px ${Colors.boxShadow};
	border: none;
	border-radius: 10px;
	opacity: 1;
	min-width: 6rem;
	height: 50px;
`;
