import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import css from "../styles/welcome.module.css";
import Button from "../src/components/Button";

const Home: React.FC = () => {
  return (
    <main className={css.homeBackground}>
      <div>
        <h1 className={css.logo}>
          R<span className={css.textDesign}>AK</span>IA
        </h1>
        <p className={css.slogan}>
          There is no better time to plan your <br/> events
        </p>
      </div>
      <div className={css.buttons}>
        <Button name="SIGN UP" color={"#09E85E"} />
        <Button name="LOGIN" color={"#6D5A72"} />
      </div>
    </main>
  );
};

export default Home;
