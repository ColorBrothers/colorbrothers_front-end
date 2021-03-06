import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Home = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: emailRef.current.value || "",
      password: passwordRef.current.value || ""
    }
    axios.post("/api/users/login",user)
    .then((res) => {
      // console.log(res);
      if (res.data.loginSuccess) history.push("/colbro");
      else alert("이메일 혹은 비밀번호가 틀렸습니다.");
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
            <input className={styles.input} ref={emailRef} type="text" name="email" placeholder="이메일을 입력해주세요" />
          </div>
          <div className={styles.inputs}>
            <input className={styles.input} ref={passwordRef} type="text" name="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className={styles.inputs}>
            <button className={styles.button} type="submit" onClick={onSubmit}>로그인</button>
          </div>
        </form>
        <div className={styles.join}>
          아직 계정이 없으신가요 ?
          <Link to="/join">
            <b>회원가입</b>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home;