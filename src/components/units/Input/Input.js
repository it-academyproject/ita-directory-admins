import React from "react";
import PropTypes from "prop-types";
//Style
import StyledInput from "./styles";

const Input = ({
	type,
	value,
	onChange,
	minlength,
	disabled,
	onKeyPress,
	onFocus,
	onBlur,
	placeholder,
	required,
	size,
	id,
	name,
	inputStyles,
	labelText,
	labelStyles,
	errorText,
	errorStyles,
	className,
}) => {
	return (
		<>
			<label style={{...labelStyles}} id={id}>
				{labelText}
			</label>
			<StyledInput
				type={type}
				value={value}
				onChange={onChange}
				minLength={minlength}
				disabled={disabled}
				onKeyPress={onKeyPress}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={placeholder}
				required={required}
				size={size}
				id={id}
				name={name}
				style={{...inputStyles}}
				className={`${className} ${disabled ? "disabled" : ""}`}
			/>

			<span style={{...errorStyles}}>{errorText}</span>
		</>
	);
};
Input.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.any,
	onChange: PropTypes.func,
	minlength: PropTypes.number,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	size: PropTypes.number,
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	inputStyles: PropTypes.object,
	labelStyles: PropTypes.object,
	errorText: PropTypes.string,
	errorStyles: PropTypes.object,
	className: PropTypes.string,
};

export default Input;
