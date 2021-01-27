import React, {useState} from "react";
import {StyledTitle, StyledHeaderTop, StyledImg, StyledDropdown} from "./styles";
const profilePicSrc =
	"https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg";

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
					<div style={{position: "relative"}}>
						<button onClick={handleClick}>
							<StyledImg src={profilePicSrc} alt="profile" />
							Mi perfil
						</button>

						{/* Dropdown!!! */}
						{dropdownVisible ? (
							<StyledDropdown>
								<ul style={{listStyleType: "none", padding: "0 1rem"}}>
									<li>Editar perfil</li>
									<li>Cerrar sesión</li>
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
