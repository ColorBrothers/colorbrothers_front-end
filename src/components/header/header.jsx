import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link to="/colbro">
          <img className={styles.logo} src="/images/header.png" alt="logo"/>
        </Link>
        <Link className={styles.register} to="/register">등록하기</Link>
      </div>
      <div className={styles.buttons}>
        <img src="/images/bell.png" alt="" />
        <Link to="/mypage">
          <img className={styles.userIcon} src="/images/user.png"/>
        </Link>
      </div>
    </header>
  )
}

export default Header;