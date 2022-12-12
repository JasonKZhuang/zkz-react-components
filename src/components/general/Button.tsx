//How to Build a Basic Custom Button Component in React TypeScript
//ttps://www.twilio.com/blog/intro-custom-button-component-typescript-react

import React from "react";

interface Props {
  border?: string;
  width: string;
  height: string;
  radius?: string;
  color?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  border = 1,
  width,
  height,
  radius = 5,
  color = "#fff",
  backgroundColor = "#000",
  children = "button",
  onClick = () => {
    console.log("you clicked this button");
  },
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        border,
        width,
        height,
        borderRadius: radius,
        color: color,
        backgroundColor: backgroundColor,
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
