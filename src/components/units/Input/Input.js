import React from "react";
import PropTypes from "prop-types";

const Input = ({
	type,
	placeholder,
	defaultValue,
	onChange,
	onFocus,
	onBlur,
	disabled,
	error,
	success,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			defaultValue={defaultValue}
			disabled={disabled}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			error={error}
			success={success}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

export default Input;
