import css from "./register.module.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../../src/components/Button";
import auth from "../../utils/firebase";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import {useRouter} from "next/router";

type Inputs = {
  password: string;
  email: string;
};

const SignUp: React.FC = () => {
const router = useRouter()
  const [userState, setUserState] = useState<any>(null);

  const [passwordState, setPasswordState] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<Inputs>();
  // function run when eye is clicked
  const handleClick = (): void => {
    setPasswordState(!passwordState);
  };
  const passwordType: string = passwordState ? "password" : "text"; //sets the password type

  const onSubmit:SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setUserState(user);
    } catch (e) {
alert(e)
    }
  };
  if (userState) {
  router.push("/")
  } 


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
        <input type="submit" className={css.submit} value="SIGN-UP" />

        <p className={css.newUser}>
          Current User?
          <Link href="/Login" passHref>
            <span className={css.login}>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
