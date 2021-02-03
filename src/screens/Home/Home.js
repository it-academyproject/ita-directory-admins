import React from "react";
<<<<<<< HEAD

//import PropTypes from "prop-types";

//Styles
//import StyledForm from "./styles";

//Components
import Body from "components/composed/layout/Body/Body";

const Home = () => {
	return (
		<Body title="Usuarios registrados" isLoggedIn={true}>
			<div style={{display: "flex", justifyContent: "center"}}>
				
			</div>
		</Body>
	);
=======
import UserList from "components/UserList/UserList";

import {ViewWeek} from "@material-ui/icons";

const Home = () => {
	return <UserList />;
>>>>>>> develop
};

export default Home;
