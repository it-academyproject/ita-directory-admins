import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

//Styles
import StyledForm from "./styles";

//Components
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import Input from "components/units/Input/Input";
import Body from "components/layout/Body/Body";

const Login = ({id, name, className, method, action, formStyle, onSubmit}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	//input - state
	const [userEmail, setUserEmail] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPasswordError, setIsPasswordError] = useState(false);
	const [isAuthError, setIsAuthError] = useState(false);

	//input
	const validateEmail = (email) => {
		const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regexEmail.test(email) ? true : false;
	};
	//input
	const validatePassword = (password) => {
		const regexPassword = /[a-z]\d|\d[a-z]/i;
		return regexPassword.test(password) && password.length > 3;
	};
	//input - handleChange
	const handleChange = (e) => {
		if (e.target.name === "userEmail") {
			setUserEmail(e.target.value); //value
			const val = e.target.value;
			const isEmail = validateEmail(val);
			setIsEmailError(!isEmail); // logica inversa
		} else if (e.target.name === "passwordInput") {
			setPasswordInput(e.target.value);
			const password = e.target.value;
			const isPassword = validatePassword(password);
			setIsPasswordError(!isPassword); // logica inversa
		}
	};

	//button state
	const [loadingState, setloadingState] = useState(false);
	const [disabledState, setdisabledState] = useState(false);
	const [animatedState, setanimatedState] = useState(false);

	//submit method
	const users = [
		{
			email: "juan@mail.com",
			password: "Juan1992",
		},
		{
			email: "andrea@mail.com",
			password: "Andrea1992",
		},
	];

	const authenticateUser = (userEmail, passwordInput) => {
		if (users.includes(userEmail) && users.includes(passwordInput)) {
			console.log("the user is correct");
			localStorage.setItem("access-token", "itacademy");
		} else {
			console.log("the user is incorrect");
			setIsAuthError(true);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setloadingState(true);
		setdisabledState(true);
		setanimatedState(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			authenticateUser(userEmail, passwordInput);
		} catch (err) {
			console.log(err);
		}
		setloadingState(false);
		setdisabledState(false);
		setanimatedState(false);
	};

	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<Body title="Acceso Admins" isLoggedIn={isLoggedIn}>
			<div style={{display: "flex", justifyContent: "center", minHeight: "65vh"}}>
				{isAuthError ? <div>Error autenticación</div> : null}
				<StyledForm
					id={id}
					name={name}
					className={className}
					method={method}
					onSubmit={(e) => handleSubmit(e)}
					action={action}
					formStyle={formStyle}
					autocomplete="off"
				>
					<Input
						type="email"
						name="userEmail"
						value={userEmail}
						placeholder="Introduce tu email"
						onChange={handleChange}
						size={20}
						error={isEmailError}
						errorText="El formato de email no es válido"
						errorStyles={{
							width: 258,
							height: 15,
							textAlign: "left",
							font: "italic normal normal 13px/32px Helvetica Neue",
							letterSpacing: 0,
							color: "#909090",
							opacity: 1,
							padding: 10,
							marginBottom: 60,
							marginLeft: 10,
						}}
						className="success"
						divStyles={{display: "flex", flexDirection: "column"}}
						passwordError={isPasswordError}
						/* disabled="disabled" */
					/>
					<Input
						type="password"
						name="passwordInput"
						value={passwordInput}
						onChange={handleChange}
						placeholder="Introduce contrasena"
						size={20}
						inputStyles={{margin: "1rem 0"}}
						error={isPasswordError}
						errorText="La contraseña debe al menos un número y una mayúscula"
						errorStyles={{
							width: 258,
							postion: "absolute",
							height: 15,
							textAlign: "left",
							font: "italic normal normal 13px/32px Helvetica Neue",
							letterSpacing: 0,
							color: "#909090",
							opacity: 1,
							padding: 10,
							marginBottom: 20,
							marginLeft: 10,
						}}
						className="success"
						divStyles={{display: "flex", flexDirection: "column"}}
						/* disabled="disabled" */
					/>
					<AsyncButton
						text="Acceder"
						loadingText="Accediendo"
						iconPosition="left"
						type="submit"
						className="primary"
						isLoading={loadingState}
						animated={animatedState}
						disabled={disabledState}
						onClick={handleClick}
						buttonStyles={{margin: "1rem 0"}}
					/>
					<Link to="/registration" className="link message">
						Regístrate aquí
					</Link>
				</StyledForm>
			</div>
		</Body>
	);
};

Login.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	method: PropTypes.string,
	action: PropTypes.string,
	formStyle: PropTypes.object,
	onSubmit: PropTypes.func,
};

export default Login;
