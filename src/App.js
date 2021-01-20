import React, {useState, useEffect} from "react";
// import {Route, Switch} from "react-router-dom";
// import ProtectedRoute from "components/composed/ProtectedRoute";
import Input from "components/units/Input/Input";
import axios from "axios";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// // Userflow
// import Login from "screens/UserFlow/Login";
// import Registration from "screens/UserFlow/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

const App = () => {
	const [value, setValue] = useState("");
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	// Handle disabled
	const [isDisabled, setIsDisabled] = useState(false);
	const handleDisabled = async () => {
		// AQUI MI FUNCIÓN
		setIsDisabled(true);
		try {
			await axios.get("mi-url", {params: {hola: "adios"}});
			setIsDisabled(false);
		} catch (error) {
			setIsDisabled(false);
			console.log(error);
		}

		// CON SET TIMEOUT
		setIsDisabled(true);
		setTimeout(() => {
			setIsDisabled(false);
		}, 3000);
	};

	// Handle Click
	const handleFocus = () => {
		console.log("HE PINCHADO DENTRO");
	};

	const handleBlur = () => {
		console.log("HE PINCHADO FUERA");
	};

	return (
		<>
			<Input
				type="text"
				placeholder="Texto placeholder"
				// defaultValue="Hola clase"
				onChange={handleChange}
				value={value}
				disabled={isDisabled}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<button disabled={handleDisabled} onClick={handleDisabled}>
				DISABLE ME
			</button>
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
