import React from "react";
import styles from "./register.module.css";
import Header from "../header/header";
import RegisterInput from "../register_input/register_input";

const Register = () => {
  return(
    <>
    <Header />
      <div className={styles.background}>
        <img className={styles.image} src="/images/mypageLogo.png" />
      </div>
    <div className={styles.mypage}>
      <div className={styles.page}>
        <div className={styles.container}>
          <RegisterInput />
        </div>
      </div>
    </div>
    </>
  )
}

export default Register;