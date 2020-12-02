import React, {useEffect} from "react";
import styles from "./sidebar_menu.module.css";
import { useHistory } from "react-router-dom";

const SideBarMenu = () => {
  // const history = useHistory();
  
  // const onLogout = () => {
  //   authService
  //   .logOut();
  // }

  // useEffect(() => {
  //   authService
  //   .onAuthChange(user => {
  //     if(!user) {
  //       history.push("/");
  //     }
  //   })
  // });
  
  return(
    <div className={styles.box}>
    <div className={styles.sideBarMenu}>
        <img className={styles.image} src="/user.png" alt="profile image"/>
        <h3 className={styles.name}>지갑 주소</h3>
        <p className={styles.myToken}>보유 토큰 : 100 PTT</p>
        <button className={styles.logout}>로그 아웃</button>
        {/* {onLogout && <button className={styles.logout} onClick={onLogout}>로그 아웃</button>} */}
        <h4>내 컬러데이터 시편 현황</h4>
        <hr className={styles.colorBar1}/>
        <p>등록한 조색 데이터</p>
        <p>조회한 조색 데이터</p>
        <h4>토큰 관리</h4>
        <hr className={styles.colorBar2}/>
        <p>토큰 전송</p>
        <p>토큰 환전</p>
        <p>트랜잭션 리스트</p>
      </div>
      </div>
  )
}

export default SideBarMenu;