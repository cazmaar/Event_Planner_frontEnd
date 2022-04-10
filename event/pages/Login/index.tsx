import css from "./login.module.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { getAuth } from "firebase/auth";
import Button from "../../src/components/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  password: string;
  email: string;
};
const LoginForm: React.FC = () => {



  const [passwordState, setPasswordState] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<Inputs>();
  // function run when eye is clicked
  const handleClick = (): void => {
    setPasswordState(!passwordState);
  };
  const passwordType: string = passwordState ? "password" : "text"; //sets the password type

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
  };

  return (
    <div>
      <h1 className={css.logo}>
        R<span className={css.textDesign}>AK</span>IA
      </h1>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="text"
          placeholder="Email Address or Phone Number"
          className={css.inputEmail}
          required
        />
        <div className={css.password}>
          <input
            {...register("password")}
            type={passwordType}
            placeholder="Enter Password"
            className={css.inputPassword}
            required
          />
          <FontAwesomeIcon
            icon={faEye}
            onClick={handleClick}
            className={css.eye}
          />
        </div>
        <input type="submit" className={css.submit} value="LOGIN" />
        <p className={css.reset}>Forgot Password?</p>
        <p className={css.newUser}>
          New User?<span className={css.createAccount}>Create Account</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
