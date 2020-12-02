import React from "react";
import styles from "./banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.image}>
        <img src="home.png" />
      </div>
      <h2 className={styles.text}>시편 데이터를 저장하고</h2>
      <h2 className={styles.text}>공유하는 곳, 콜브로.</h2>
      <hr className={styles.line}/>
      <h3 className={styles.text}>언제든지 시편을 조회, 저장이 가능한</h3>
      <h3 className={styles.text}>테크니션들의 작업 공간</h3>
      <button className={styles.button} type="text">Learn more ></button>
    </div>
  )
}

export default Banner;