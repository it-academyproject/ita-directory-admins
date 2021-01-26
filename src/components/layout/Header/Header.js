import React from "react";
import {StyledTitle, StyledHeaderTop} from "./styles";

const Header = ({isLoggedIn, title}) => {
	if (isLoggedIn) {
		return (
			<header>
				<StyledHeaderTop className={`logged`}>
					<span>Logo Empresa</span>
					<a href="/">
						{/* <img src="" /> */}
						Mi perfil
					</a>
				</StyledHeaderTop>
				<StyledTitle className={`logged`}>
					<h1>{title}</h1>
				</StyledTitle>
			</header>
		);
	} else {
		return (
			<header>
				<StyledHeaderTop>Logo Empresa</StyledHeaderTop>
				<StyledTitle>
					<h1>{title}</h1>
				</StyledTitle>
			</header>
		);
	}
};

export default Header;
