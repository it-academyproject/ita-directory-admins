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
    //input state
    const [userInput, setuserInput] = useState("");
    const [passwordInput, setpasswordInput] = useState("")
    //button state
    const [loadingState, setloadingState] = useState(false);
	const [disabledState, setdisabledState] = useState(false);
	const [animatedState, setanimatedState] = useState(false);

    //form method
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted", userInput, passwordInput)

    }
    //button method
	const handleClick = async () => {
		setloadingState(true);
		setdisabledState(true);
		setanimatedState(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("clicked");
            //handleSubmit();
            
		} catch (err) {
			console.log(err);
		}
		setloadingState(false);
		setdisabledState(false);
        setanimatedState(false);
    };


    //input
    const handleChange = (e) =>{
        if (e.target.name==="userInput"){
            setuserInput(e.target.value);
        }else if (e.target.name==="passwordInput"){
            setpasswordInput(e.target.value);
        }
    }

    return(
        <StyledForm id={id} name={name} className={className} method={method} onSubmit={(e)=>handleSubmit(e)} action={action} formStyle={formStyle}>
            <input name="userInput" value={userInput} onChange={handleChange}/>
            <input name="passwordInput" value={passwordInput} onChange={handleChange}/>
            <AsyncButton
				text="Acceder"
				loadingText="Accediendo"
				iconPosition="left"
				type="submit"
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