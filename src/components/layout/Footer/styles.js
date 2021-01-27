import styled from "styled-components";
import Colors from "theme/Colors";

const StyledFooter = styled.footer`
	@media only screen and (min-width: 800px) {
		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 2px 15vw;
		}
		p {
			text-align: left;
			font: normal normal normal 15px/15px Korb-Bold;
			letter-spacing: 0px;
			color: ${Colors.blackColor};
			text-transform: "uppercase";
			opacity: 1;
		}
		ul {
			text-align: right;
			font: normal normal normal 12px Helvetica Neue;
			letter-spacing: 0;
			color: #4a4a4a;
			opacity: 1;
			list-style-type: none;
		}
		hr {
			margin: 2px 15vw;
		}
	}
	@media only screen and (max-width: 800px) {
		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		p {
			text-align: center;
			font: normal normal normal 15px/15px Korb-Bold;
			letter-spacing: 0px;
			color: ${Colors.blackColor};
			text-transform: uppercase;
			opacity: 1;
			padding-left: 25px;
		}
		ul {
			text-align: center;
			font: normal normal normal 12px Helvetica Neue;
			letterspacing: 0;
			color: #4a4a4a;
			opacity: 1;
			list-style-type: none;
			margin: 0px;
			padding-left: 0;
		}
	}
`;

export default StyledFooter;
