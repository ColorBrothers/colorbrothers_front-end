import React from "react";
import styles from "./mypage.module.css";
import Header from "../header/header";
import SideBarMenu from "../sidebar_menu/sidebar_menu";
import Status from "../status/status";

const Mypage = () => {
  return(
    <>
    <Header />
      <div className={styles.background}>
        <img className={styles.image} src="mypageLogo.png" />
      </div>
    <div className={styles.mypage}>
      <div className={styles.page}>
        <div className={styles.container}>
        <SideBarMenu />
        <Status />
        </div>
      </div>
    </div>
    </>
  )
}

export default Mypage;