import React from "react";
import UserList from "components/composed/UserList/UserList"

//Styles
//import StyledForm from "./styles";

//Components
import Body from "components/layout/Body/Body";

const Home = () => {
	return (
		<Body title="Usuarios registrados" isLoggedIn={true}>
			<div style={{display: "flex", justifyContent: "center"}}>
				<UserList />
			</div>
		</Body>
	);
};

export default Home;
