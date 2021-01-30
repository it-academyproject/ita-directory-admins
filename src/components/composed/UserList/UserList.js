import React from "react";

//Styles
import {StyledList, StyledRow, StyledIcons, StyledItem} from "./styles";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faUserAltSlash,
	faUserCheck,
	faUserClock,
	faEye,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

const UserList = () => {
	return (
		<StyledList>
			<StyledRow>
				<StyledItem>Foto</StyledItem>
				<StyledItem>Nombre</StyledItem>
				<StyledItem style={{flex: 2}}>Email</StyledItem>
				<StyledItem style={{flex: 3, textAlign: "center"}}>Acciones</StyledItem>
			</StyledRow>

			<StyledRow>
				<StyledItem>img</StyledItem>
				<StyledItem>itacademy</StyledItem>
				<StyledItem style={{flex: 2}}>itacademy@mail.com</StyledItem>
				<StyledIcons>
					<div>
						<FontAwesomeIcon icon={faUserCheck} />
					</div>
					<div>
						<FontAwesomeIcon icon={faEye} />
					</div>
					<div>
						<FontAwesomeIcon icon={faTrash} />
					</div>
				</StyledIcons>
			</StyledRow>
		</StyledList>
	);
};

export default UserList;
