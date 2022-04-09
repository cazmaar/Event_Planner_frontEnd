import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import css from "../styles/welcome.module.css";
import Button from "../src/components/Button";

const Home: React.FC = () => {
  return (
    <div className={css.homeBackground}>
      <Button name="SIGN UP" />

      <Button name="LOGIN" />
    </div>
  );
};

export default Home;
