import React from "react";
import { CustomButtonComponent } from "./custom.button.styles";

const CustomButton = ({ children, ...props }) => (
	<CustomButtonComponent {...props}>{children}</CustomButtonComponent>
);

export default CustomButton;
