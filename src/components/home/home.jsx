import React, { useState , useRef } from "react";
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
    <section src="">
    <form>
      <div>
        <input ref={emailRef} type="text" name="email" placeholder="이메일을 입력해주세요" />
      </div>
      <div>
        <input ref={passwordRef} type="text" name="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <button type="submit" onClick={onSubmit}>로그인하기</button>
    </form>
    
    </section>
  )
}

export default Home;