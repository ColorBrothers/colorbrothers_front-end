import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link to="/">
          <img className={styles.logo} src="header.png" alt="logo"/>
        </Link>
        <Link className={styles.register} to="/register">등록하기</Link>
      </div>
      <div className={styles.buttons}>
        <img src="bell.png" alt="" />
        <Link to="/mypage">
          <img className={styles.userIcon} src="user.png"/>
        </Link>
      </div>
    </header>
  )
}

export default Header;