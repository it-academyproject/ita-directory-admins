import styled from "styled-components";
import Colors from "theme/Colors";

const StyledFooter = styled.footer`
	@media only screen and (min-width: 600px) {
		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 20px;
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
	}
	@media only screen and (max-width: 600px) {
		div {
			display: flex;
			flex-wrap: wrap;
			/* 	justify-content: space-between; */
			margin-left: 40px;
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
