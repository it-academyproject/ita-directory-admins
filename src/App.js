import React from "react";
import LoginForm from "components/composed/ProtectedRoute/LoginForm/LoginForm";
// import {Route, Switch} from "react-router-dom";
// import ProtectedRoute from "components/composed/ProtectedRoute";
// import axios from "axios";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// // Userflow
// import Login from "screens/UserFlow/Login";
// import Registration from "screens/UserFlow/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

const App = () => {

	return (

		<>
			<LoginForm />
		</>

		// <Switch>
		// 	{/* Userflow */}
		// 	<Route exact path="/login" component={Login} />
		// 	<Route exact path="/registration" component={Registration} />
		// 	<Route exact path="/recover-password/:hash" component={RecoverPassword} />

		// 	{/* Caregiver */}
		// 	<ProtectedRoute exact path="/" component={Home} />

		// 	<ProtectedRoute path="/chat" component={Chat} />
		// 	<ProtectedRoute component={Page404} />
		// </Switch>
	);
};

export default App;
