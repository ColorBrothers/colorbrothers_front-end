import React from "react";
import styles from "./register_input.module.css";

const RegisterInput = () => {
  return(
    <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>회사</i>
            <input className={styles.input} type="text" placeholder="" />
          </div>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>차종</i>
            <input className={styles.input} type="text" placeholder="예)소나타" />
          </div>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>등록일자</i>
            <input className={styles.input} type="text" placeholder="" />
          </div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>차량번호</i>
            <input className={styles.input} type="text" placeholder="예)11가1111" />
          </div>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>파츠</i>
            <input className={styles.input} type="text" placeholder="" />
          </div>
          <div className={styles.inputbox}>
            <i className={styles.inputTitle}>컬러코드</i>
            <input className={styles.input} type="text" placeholder="" />
          </div>
        </div>
        <textarea className={styles.textarea} name="" id="" cols="73" rows="5" placeholder="참고사항을 입력해 주세요" />
        <div className={styles.inputColor}>
          <div className={styles.colorTitle}>
            <h3 className={styles.title}>조색제</h3>
            <h3 className={styles.title}>배합(/g)</h3>
          </div>
          <hr/>
        </div>
        <div className={styles.colorInputs}>
          <input className={styles.colorInput} type="text"/>
          <input className={styles.colorInput} type="text"/>
        </div>
        <button className={styles.button}> 등록하기</button>
    </form>
  )
}

export default RegisterInput;