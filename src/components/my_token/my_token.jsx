import React from "react";
import styles from "./my_token.module.css";

const MyToken = () => {
  return(
    <>
    <h3>토큰 전송</h3>
    <form className={styles.form}>
      <div className={styles.inputbox}>
      <b className={styles.b1}>보낼 토큰</b>
      <input className={styles.input} type="text"/>
      <b>CBT</b>
      </div>
      <div className={styles.inputbox}>
      <b className={styles.b2}>보낼 지갑 주소</b>
      <input className={styles.input} type="text"/>
      <button className={styles.button}>보내기</button>
      </div>
    </form>
    <hr />
    <h3>토큰 환전</h3>
    <form>
      <input className={styles.input2}type="text"/>
      <b className={styles.b3}>CBT</b>
      <button className={styles.button}>환전 하기</button>
    </form>
    <hr />
    <h3>사용료 예치</h3>
    <form>
      <input className={styles.input2}type="text"/>
      <b className={styles.b3}>CBT</b>
      <button className={styles.button}>구매 하기</button>
    </form>
    </>
  )
}

export default MyToken;