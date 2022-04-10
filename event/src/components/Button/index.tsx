import React from "react";
import css from "./button.module.css";
//button interface
interface ButtonProps {
  name: string;
  color: string;
  handleRouter(): void;
  opacity:number
}

const Button: React.FC<ButtonProps> = ({ name, color, handleRouter, opacity}) => {
  // button component takes ina props of name
  return (
    <button style={{ backgroundColor: color, opacity:opacity}} className={css.button} onClick={handleRouter}>
      {name}
    </button>
  );
};

export default Button;
