import React from "react";

const Header = ({isLoggedIn}) => {
	if (isLoggedIn) {
		return <header>Header when logged</header>;
	} else {
		return (
			<header>
				<div>LOGO EMPRESA</div>
				<div>Acceso admins</div>
			</header>
		);
	}
};

export default Header;
