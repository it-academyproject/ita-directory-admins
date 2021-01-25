import React, {useState} from "react";
//import PropTypes from "prop-types";

//Styles
import StyledForm from "./styles";

//Components
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import Input from "components/units/Input/Input";

const LoginForm = ({id, name, className, method, action, formStyle}) => {
	//input state
	const [userInput, setuserInput] = useState("");
	const [passwordInput, setpasswordInput] = useState("");
	const [isUserValid, setisUserValid] = useState(true);
	const [isPasswordValid, setisPasswordValid] = useState(true);
	//
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	//button state
	const [loadingState, setloadingState] = useState(false);
	const [disabledState, setdisabledState] = useState(false);
	const [animatedState, setanimatedState] = useState(false);

	//form method
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isUserValid || !isPasswordValid) {
			return;
		}
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
		console.log("submitted", userInput, passwordInput);
	};

	//input
	const handleChange = (e) => {
		if (e.target.name === "userInput") {
			setuserInput(e.target.value);
			if (userInput.match(mailFormat)) {
				setisUserValid(true);
				console.log("mail ok");
			} else {
				setisUserValid(false);
			}
		} else if (e.target.name === "passwordInput") {
			setpasswordInput(e.target.value);
			if (passwordInput.match(passFormat)) {
				setisPasswordValid(true);
				console.log("password ok");
			} else {
				setisPasswordValid(false);
			}
		}
	};
	//useEffect ???
	//button
	const handleClick = () => {
		console.log("clicked");
	};

	return (
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
				name="userInput"
				value={userInput}
				onChange={handleChange}
				valid={isUserValid}
			/>
			<Input
				type="password"
				name="passwordInput"
				value={passwordInput}
				onChange={handleChange}
				valid={isPasswordValid}
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
			/>
		</StyledForm>
	);
};

export default LoginForm;
