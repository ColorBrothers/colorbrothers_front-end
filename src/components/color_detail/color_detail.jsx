import React from "react";
import styles from "./color_detail.module.css";

const ColorDetail = () => {
  return(
    <div className={styles.colorDetail}>
      <h1 className={styles.title}>43호 1234 / NEW AVANTE / UA7</h1>
      <div className={styles.metadata}>
        <div className={styles.carImage}>
          <img className={styles.image} src="/images/search_image.png" />
        </div>
        <div className={styles.data}>
          <div className={styles.subtitle1}>
            <h5>등록일자</h5>
            <h3>2020/11/27</h3>
          </div>
          <div className={styles.subtitle2}>
            <div className={styles.data2}>
              <h5>회사명</h5>
              <h3>한성자동차</h3>
            </div>
          <div className={styles.data2}>
            <h5>수리부위 (파츠)</h5>
            <h3>Fender_FL</h3>
          </div>
          <div className={styles.data2}>
            <h5>페인트</h5>
            <h3>PPG</h3>
          </div>
        </div>
        <div className={styles.subtitle3}>
          <h5>참고 사항</h5>
          <h3>도장 시간은 1~7시간 정도. 실내 건조</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ColorDetail;