import React, {useEffect, useState} from "react";
import styles from "./sidebar_menu.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import caver from "../../klaytn/caver";
import * as config from "../../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const SideBarMenu = () => {
  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  const [wallet, setWallet] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(null);
  const history = useHistory();

  const onLogout = () => {
    axios.get("/api/users/logout");
    history.push("/");
  }
  
  const addWallet = () => {
    axios.get("/api/kas/addWallet");
    window.location.reload();
  };

  const fetchWallet = async () => {
    try {
      //KAS SDK를 활용하여 만든 지갑주소를 백엔드에서 가져오기
      const respons = await axios.get("/api/users/wallet");
      setWallet(respons.data.walletAddress);
      // 콜 데이터를 통한 토큰 수량 가져오기
      contract.methods.balanceOf(wallet).call().
      then(balance => {
      setTokenBalance(balance);
    })
    } catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    fetchWallet();
  });
  return(
    <div className={styles.box}>
    <div className={styles.sideBarMenu}>
        <img className={styles.image} src="/images/user.png" alt="images"/>
        <div className={styles.address}>
        {wallet? <h3 className={styles.name}>{wallet}</h3> : <button onClick={addWallet}>지갑 생성</button>}
        </div>
        <p className={styles.myToken}>보유 토큰 : {tokenBalance}</p>
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