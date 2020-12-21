import React from "react";
import styles from "./search.module.css";

const Search = () => {
  return(
    <div className={styles.search}>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>차량번호</i>
            <input className={styles.input} type="text" placeholder="" />
          </div>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>차종</i>
            <input className={styles.input} type="text" placeholder="" />
          </div>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>컬러코드</i>
            <input className={styles.input} type="text" placeholder="" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>조회하기</button>
        </div>
      </form>
    </div>
  )
}

export default Search;