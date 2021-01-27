import React, {useState} from "react";
import {
	StyledTitle,
	StyledHeaderTop,
	StyledImg,
	StyledDropdown,
	StyledLi,
	StyledButton,
	StyledMiPerfil,
	StyledLogo,
	StyledText,
	StyledUl,
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
					<StyledLogo>Logo Empresa</StyledLogo>
					<StyledMiPerfil>
						<StyledButton onClick={handleClick}>
							<StyledImg src={profilePicSrc} alt="profile" />
							<StyledText>Mi perfil</StyledText>
						</StyledButton>

						{dropdownVisible ? (
							<StyledDropdown>
								<StyledUl>
									<StyledLi>Editar perfil</StyledLi>
									<StyledLi>Cerrar sesión</StyledLi>
								</StyledUl>
							</StyledDropdown>
						) : null}
					</StyledMiPerfil>
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
