import React , {useState} from "react";
//import PropTypes from "prop-types";

//Styles
import StyledForm from "./styles";

//Components
import AsyncButton from "components/units/AsyncButton/AsyncButton"

const LoginForm = ({
    id,
    name,
    className,
    method,
    onSubmit,
    action,
    formStyle,
}) =>{
    const [loadingState, setloadingState] = useState(false);
	const [disabledState, setdisabledState] = useState(false);
	const [animatedState, setanimatedState] = useState(false);

	const handleClick = async () => {
		setloadingState(true);
		setdisabledState(true);
		setanimatedState(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("clicked");
            handleSubmit()
		} catch (err) {
			console.log(err);
		}
		setloadingState(false);
		setdisabledState(false);
        setanimatedState(false);
    };

    const handleSubmit=()=>{
        console.log("submitted")
    }
    return(
        <StyledForm id={id} name={name} className={className} method={method} onSubmit={handleSubmit()} action={action} formStyle={formStyle}>
            <input />
            <input />
            <AsyncButton
				text="Acceder"
				loadingText="Accediendo"
				iconPosition="left"
				type="button"
				className="primary"
				isLoading={loadingState}
				animated={animatedState}
				disabled={disabledState}
				onClick={() => handleClick()}
			/>
        </StyledForm>
    );
}

export default LoginForm;