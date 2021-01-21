import React from "react";
import PropTypes from "prop-types";

//styles
import StyledButton from "./styles";

//icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const AsyncButton = ({
	type,
	text,
	loadingText,
	isLoading,
	onClick,
	disabled,
	icon,
	iconPosition,
	className,
	buttonStyles,
	textStyles,
	iconStyles,
	animated,
}) => {
	
	const handleClick = () => {
		if (disabled) {
			return;
		}
		onClick();
	};

	return (
		<StyledButton
			type={type}
			disabled={disabled}
			onClick={handleClick}
			className={`${className} ${animated && "animated"} ${disabled && "disabled"}`}
			style={{...buttonStyles}}
		>
			{iconPosition === "left" && (
				<FontAwesomeIcon icon={isLoading ? faSpinner : icon} style={{...iconStyles}} />
			)}
			<span style={{...textStyles}}>{isLoading ? loadingText : text}</span>
			{iconPosition === "right" && (
				<FontAwesomeIcon icon={isLoading ? faSpinner : icon} style={{...iconStyles}} />
			)}
		</StyledButton>
	);
};

AsyncButton.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string,
	loadingText: PropTypes.string,
	isLoading: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	iconPosition: PropTypes.string,
	className: PropTypes.string,
	buttonStyles: PropTypes.string,
	textStyles: PropTypes.string,
	iconStyles: PropTypes.string,
	animated: PropTypes.bool,
};

export default AsyncButton;
