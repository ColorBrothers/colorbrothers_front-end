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
    <>
    <section className={styles.section}>
      <img className={styles.background} src="/images/login_back.png" />
    </section>
    <div className={styles.loginBox}>
        <form>
          <div>
            <input ref={emailRef} type="text" name="email" placeholder="이메일을 입력해주세요" />
          </div>
          <div>
            <input ref={passwordRef} type="text" name="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <button type="submit" onClick={onSubmit}>로그인하기</button>
        </form>
        <Link to="/join">
          <b>회원가입</b>
        </Link>
    </div>
    </>
  )
}

export default Home;