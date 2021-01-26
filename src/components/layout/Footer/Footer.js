import React from "react";
import PropTypes from "prop-types";

//Style
import StyledFooter from "./styles";
import Colors from "theme/Colors";

const Footer = () => {
	return (
		<StyledFooter>
			<hr />
			<div>
				<p>
					<strong>LOGO EMPRESA</strong>
				</p>
				<ul>
					<li>&copy; miempresa.com</li>
					<li>todos los derechos reservados</li>
					<li>Aviso Legal &ndash; Privacidad &ndash; Cookies</li>
				</ul>
			</div>
		</StyledFooter>
	);
};

Footer.propTypes = {
	footerDivStyles: PropTypes.object,
	paragraphStyles: PropTypes.object,
	ulStyles: PropTypes.object,
};
export default Footer;
