import React from "react";
import css from "./button.module.css";
//button interface
interface ButtonProps {
  name: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ name, color }) => {
  // button component takes ina props of name
  return (

      <button style={{ backgroundColor: "blue" }} className={css.button}>
        {name}
      </button>

  );
};

export default Button;
