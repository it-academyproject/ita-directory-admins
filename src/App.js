import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
// import ProtectedRoute from "components/composed/ProtectedRoute";
// import axios from "axios";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// // Userflow
import Login from "screens/UserFlow/Login/Login";
import Portal from "screens/UserFlow/Portal/Portal";
// import Registration from "screens/UserFlow/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

const App = () => {
	return (
		// <Login
		// 	isLoggedIn={isLoggedIn}
		// 	id="formOne" //sera un MAP de Json file
		// 	name="formOne" //sera un MAP de Json file
		// 	method="post"
		// 	action="urlDestino"
		// 	formStyle={{
		// 		display: "flex",
		// 		flexDirection: "column",
		// 	}}
		// />

		<Switch>
			{/* Userflow */}
			<Route exact path="/login" component={Login} />
			<Route exact path="/portal" component={Portal} />
			{/* <Route exact path="/registration" component={Registration} />
			<Route exact path="/recover-password/:hash" component={RecoverPassword} />  */}
		

			{/* Caregiver */}
			{/* <ProtectedRoute exact path="/" component={Home} />

			<ProtectedRoute path="/chat" component={Chat} />
			<ProtectedRoute component={Page404} /> */}
		</Switch>
	);
};

export default App;
