import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

//Styles
import StyledForm from "./styles";

//Components
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import Input from "components/units/Input/Input";
import Body from "components/layout/Body/Body";
// import {blue} from "@material-ui/core/colors";

// USERS
const USERS = [
	{
		email: "juan@mail.com",
		password: "Juan1992",
	},
];

const authenticateUser = (email, password) => {
	let authenticated = false;
	for (let i = 0; i < USERS.length; i++) {
		const user = USERS[i];
		if (user.email === email && user.password === password) {
			authenticated = true;
		}
	}
	if (authenticated) {
		console.log("HEMOS ENCONTRADO AL USUARIO");
	} else {
		console.error("NO EXISTE, NO HEMOS ENCONTRADO AL USUARIO");
	}
};

const Login = ({id, name, className, method, action, formStyle, onSubmit}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	//input - state
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPasswordError, setIsPasswordError] = useState(false);
	const [userEmail, setUserEmail] = useState(""); // value - email
	const [passwordInput, setPasswordInput] = useState(""); // value - contrasena
	//input
	const validateEmail = (email) => {
		let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email) ? true : false;
	};
	//input
	const validatePassword = (password) => {
		var re = /[a-z]\d|\d[a-z]/i;
		return re.test(password) && password.length > 3;
	};
	//input - handleChange
	const handleChange = (e) => {
		if (e.target.name === "userEmail") {
			setUserEmail(e.target.value); //value
			const val = e.target.value;
			const isEmail = validateEmail(val);
			console.log("Regex validate email: ", validateEmail, isEmail);
			setIsEmailError(!isEmail); // logica inversa
		} else if (e.target.name === "passwordInput") {
			setPasswordInput(e.target.value);
			const password = e.target.value;
			const isPassword = validatePassword(password);
			setIsPasswordError(!isPassword); // logica inversa
			console.log("validate Password: ", validatePassword, isPassword);
		}
	};

	//input
	const handleFocus = () => {
		console.log("He pinchado dentro");
	};

	const handleBlur = () => {
		console.log("He pinchado fuera");
	};

	//button state
	const [loadingState, setloadingState] = useState(false);
	const [disabledState, setdisabledState] = useState(false);
	const [animatedState, setanimatedState] = useState(false);

	//submit method

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

	//button
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<Body title="página de login" isLoggedIn={isLoggedIn}>
			<div style={{display: "flex", justifyContent: "center"}}>
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
						onFocus={handleFocus}
						onBlur={handleBlur}
						inputStyles={{
							padding: 10,
							marginBottom: 5,
							marginTop: 5,
						}}
						error={isEmailError}
						errorText="<p style='color: #971132'>Introduce una dirección de correo electrónico válido.</p>"
						errorStyles={{
							textAlign: "justify",
							fontWeight: "bold",
							font: "italic normal normal 12px Helvetica Neue",
							letterSpacing: 0,
							color: "#909090",
							opacity: 1,
							padding: 5,
							marginBottom: 5,
							lineHeight: "1rem",
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
						onFocus={handleFocus}
						onBlur={handleBlur}
						inputStyles={{padding: 10, marginBottom: 5, marginTop: 5}}
						error={isPasswordError}
						errorText="<p style='color: #971132'>La contraseña debe tener al menos 4 caracteres e incluir al menos una letra y un número.</p>"
						errorStyles={{
							postion: "absolute",
							textAlign: "justify",
							fontWeight: "bold",
							font: "italic normal normal 12px Helvetica Neue",
							letterSpacing: 0,
							color: "#909090",
							opacity: 1,
							padding: 5,
							marginBottom: 5,
							lineHeight: "1rem",
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
						buttonStyles={{marginTop: 10, marginBottom: 5}}
					/>
					<Link
						to="/registration"
						className="link message"
						style={{textDecoration: "none"}}
					>
						{" "}
						<h6
							style={{
								textAlign: "center",
								font: "italic normal normal 15px Helvetica Neue",
							}}
						>
							¿Ya estás registrado?
						</h6>
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
