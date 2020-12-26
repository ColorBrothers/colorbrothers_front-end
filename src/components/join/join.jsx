import React , { useRef } from "react";
import styles from "./join.module.css";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (event) => {
    const join = {
      name: nameRef.current.value || "",
      email: emailRef.current.value || "",
      password: passwordRef.current.value || "",
      walletAddress: "", 
    }
    event.preventDefault();
    axios.post("/api/users/register",join)
    .then((res) => {
      console.log(res);
      if (res.data.success) history.push("/");
      else alert("회원가입에 실패했습니다.")
    })
  }


  return(
    <section className={styles.section}>
      <div className={styles.images}>
        <img className={styles.background} src="/images/login_back.png" />
      </div>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
          <img className={styles.title} src="/images/login_logo.png" />
        </div>
      <img className={styles.loginTitle} src="/images/login_title.png" />
        <form>
          <div className={styles.inputs}>
            <input className={styles.input} ref={nameRef} type="text" name="name" placeholder="이름을 입력해주세요" />
          </div>
          <div className={styles.inputs}>
            <input className={styles.input} ref={emailRef} type="text" name="email" placeholder="이메일을 입력해주세요" />
          </div>
          <div className={styles.inputs}>
            <input className={styles.input} ref={passwordRef} type="text" name="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className={styles.inputs}>
            <button className={styles.button} type="submit" onClick={onSubmit}>회원가입</button>
          </div>
        </form>
        <div className={styles.join}>
          이미 회원가입을 하셨나요?
          <Link to="/">
            <b>로그인</b>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Join;