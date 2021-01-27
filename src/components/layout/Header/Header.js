import React, {useState} from "react";
import {
	StyledTitle,
	StyledHeaderTop,
	StyledImg,
	StyledDropdown,
	StyledLi,
	StyledButton,
} from "./styles";
const profilePicSrc =
	"https://upload.wikimedia.org/wikipedia/commons/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg";

const Header = ({isLoggedIn, title}) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const handleClick = () => {
		console.log("profile clicked");
		setDropdownVisible(!dropdownVisible);
	};
	if (isLoggedIn) {
		return (
			<header>
				<StyledHeaderTop className={`logged`}>
					<span>Logo Empresa</span>
					<div style={{position: "relative", display: "inline-block", minWidth: "10rem"}}>
						<StyledButton onClick={handleClick}>
							<StyledImg src={profilePicSrc} alt="profile" />
							Mi perfil
						</StyledButton>

						{dropdownVisible ? (
							<StyledDropdown>
								<ul style={{listStyleType: "none", padding: 0, margin: 0}}>
									<StyledLi>Editar perfil</StyledLi>
									<StyledLi>Cerrar sesión</StyledLi>
								</ul>
							</StyledDropdown>
						) : null}
					</div>
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
