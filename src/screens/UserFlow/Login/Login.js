import React, {useState} from "react";
import PropTypes from "prop-types";

//Styles
import StyledForm from "./styles";
import Colors from "theme/Colors";

//Components
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import Input from "components/units/Input/Input";

const Login = ({id, name, className, method, action, formStyle, onSubmit}) => {
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

	/* const handleClick = () => {
		setloadingState(true);
		setdisabledState(true);
		setanimatedState(true);

		setTimeout(() => {
			setloadingState(false);
			setdisabledState(false);
			setanimatedState(false);
		}, 5000);
	}; */

	//form method
	const handleSubmit = async (e) => {
		e.preventDefault();
		setloadingState(true);
		setdisabledState(true);
		setanimatedState(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
		} catch (err) {
			console.log(err);
		}
		setloadingState(false);
		setdisabledState(false);
		setanimatedState(false);
		console.log("submitted", userEmail, passwordInput);
	};

	//button
	const handleClick = () => {
		console.log("clicked");
	};

	return (
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
						marginLeft: 10,
						marginTop: 5,
					}}
					labelText="Introduce tu email:"
					labelStyles={{
						width: 297,
						height: 40,
						textAlign: "left",
						font: "normal normal normal 14px/32px Helvetica Neue",
						letterSpacing: 0,
						color: "#4A4A4A",
						opacity: 1,
						paddingLeft: 10,
						marginBottom: 5,
						marginLeft: 5,
					}}
					error={isEmailError}
					errorText="<p>El email no se puede modificar.Ponte en <a href=#/users/123>Michael</a> si necesitas 
				<span style='color: red'> STYLE </span>actualizarlo</p>"
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
					onFocus={handleFocus}
					onBlur={handleBlur}
					inputStyles={{padding: 10, marginBottom: 5, marginLeft: 10, marginTop: 5}}
					labelText="Introduce tu contrasena:"
					labelStyles={{
						width: 297,
						height: 40,
						textAlign: "left",
						font: "normal normal normal 14px/32px Helvetica Neue",
						letterSpacing: 0,
						color: "#4A4A4A",
						opacity: 1,
						padding: 10,
						marginBottom: 5,
						marginLeft: 5,
					}}
					error={isPasswordError}
					errorText="<p>El email no se puede modificar.Ponte en <a href=#/users/123>Michael</a> si necesitas 
				<span style='color: red'> STYLE </span>actualizarlo</p>"
					errorStyles={{
						width: 258,
						height: 15,
						textAlign: "left",
						font: "italic normal normal 13px/32px Helvetica Neue",
						letterSpacing: 0,
						color: "#909090",
						opacity: 1,
						padding: 10,
						marginBottom: 80,
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
					buttonStyles={{
						marginLeft: 10,
						marginBottom: 30,
						marginRight: 40,
						marginTop: 20,
					}}
				/>
			</StyledForm>
		</div>
	);
	Login.propTypes = {
		id: PropTypes.string,
		name: PropTypes.string,
		method: PropTypes.string,
		action: PropTypes.string,
		formStyle: PropTypes.object,
		onSubmit: PropTypes.func,
	};
};

export default Login;
