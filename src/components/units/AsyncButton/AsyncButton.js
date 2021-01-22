import React from "react";
// Styles
import {ButtonWrapper} from "./styles";
//Icons
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
		<ButtonWrapper
			type={type}
			disabled={disabled}
			onClick={handleClick}
			className={`${className} ${animated ? "animated" : ""} ${disabled ? "disabled" : ""}`}
			style={{...buttonStyles}} // Spread operator javascript
		>
			{iconPosition === "left" && (
				<FontAwesomeIcon icon={isLoading ? faSpinner : icon} style={{...iconStyles}} />
			)}
			<span style={{...textStyles}}>{isLoading ? loadingText : text}</span>
			{iconPosition === "right" && <FontAwesomeIcon icon={icon} style={{...iconStyles}} />}
		</ButtonWrapper>
	);
};

export default AsyncButton;