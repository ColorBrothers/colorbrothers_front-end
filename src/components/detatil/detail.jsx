import React from "react";
import styles from "./detail.module.css";
import Header from "../header/header";
import ColorDetail from "../color_detail/color_detail";

const Detail = () => {
  return(
    <>
    <Header />
      <div className={styles.background}>
        <img className={styles.image} src="/images/mypageLogo.png" />
      </div>
    <div className={styles.mypage}>
      <div className={styles.page}>
        <div className={styles.container}>
          <ColorDetail/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Detail;