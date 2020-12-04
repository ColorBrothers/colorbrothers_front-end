import React from "react";
import styles from "./color_detail.module.css";

const ColorDetail = () => {
  return(
    <div className={styles.colorDetail}>
      <h1>43호 1234 / NEW AVANTE / UA7</h1>
      <div className={styles.metadata}>
        <img className={styles.image} src="/image/search_image.png" />
        <div className={styles.subtitle}>
          <h4>등록일자</h4>
          <h3>2020/11/27</h3>
        </div>
        <div className={styles.subtitle}>
          <h4>등록일자</h4>
          <h3>2020/11/27</h3>
        </div>
        <div className={styles.subtitle}>
          <h4>등록일자</h4>
          <h3>2020/11/27</h3>
        </div>
      </div>
    </div>
  )
}

export default ColorDetail;