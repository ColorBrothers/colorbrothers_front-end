import React, {useEffect} from "react";
import styles from "./sidebar_menu.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CaverExtKAS from "caver-js-ext-kas";
require('dotenv').config()

const SideBarMenu = () => {
  const history = useHistory();
  //KAS SDK
  const caver = new CaverExtKAS();
  caver.initKASAPI(process.env.CHAIN_ID, process.env.ACCESS_KEY, process.env.SECRET_ACCESS_KEY);
  
  const onLogout = () => {
    axios.get("/api/users/logout");
    history.push("/");
  }
  
  const addWallet = async () => {
    const account = await caver.kas.wallet.getAccountList();
    console.log(account);
  };

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
        <img className={styles.image} src="/images//user.png" alt="profile image"/>
        <div className={styles.address}>
        <button onClick={addWallet}>지갑 생성</button>
        <h3 className={styles.name}>지갑 주소</h3>
        </div>
        <p className={styles.myToken}>보유 토큰 : 100 PTT</p>
        <button className={styles.logout} onClick={onLogout}>로그 아웃</button>
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