import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
// import Head from "next/head";
// import Image from "next/image";
import css from "../styles/welcome.module.css";
import Button from "../src/components/Button";

const Home: React.FC = () => {
  const router = useRouter()
  const handleLogin = ()=>{
router.push("/Login")
  }
  return (
    <main className={css.homeBackground}>
      <div>
        <h1 className={css.logo}>
          R<span className={css.textDesign}>AK</span>IA
        </h1>
        <p className={css.slogan}>
          There is no better time to plan your <br /> events
        </p>
      </div>
      <div className={css.buttons}>
        <Button name="SIGN UP" color={"#09E85E"}  handleRouter={handleLogin}/>
    
          <Button name="LOGIN" color={"#6D5A72"} handleRouter={handleLogin} />
        
      </div>
    </main>
  );
};

export default Home;
