import React from "react";

const Input = ({type, placeholder, defaultValue, onChange, onFocus, onBlur, disabled}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			defaultValue={defaultValue}
			disabled={disabled}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
};

export default Input;
