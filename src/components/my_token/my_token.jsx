import React, { useRef } from "react";
import styles from "./my_token.module.css";
import caver from "../../klaytn/caver";
import * as config from "../../config";

const DEPLOYED_ADDRESS = config.DEPLOYED_ADDRESS;
const DEPLOYED_ABI = config.DEPLOYED_ABI;

const MyToken = ({wallet, tokenBalance}) => {
  const contract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);
  const toAddressRef = useRef();
  const amountRef = useRef();

  const onTransfer = () => {
    const from = wallet;
    const gas = 300000;
    const to = toAddressRef.current.value;
    const amount = caver.utils.toPeb(amountRef.current.value, "KLAY");

    if (amount <= 0) {
      alert("보낼 토큰의 수량을 정확히 입력해주세요.");
    } else if (amount > tokenBalance) {
      alert("보유한 토큰이 부족합니다.");
    } else {
      contract.methods
      .transfer(to, amount)
      .send({
      from,
      gas
      })
      .on("transactionHash", (transactionHash) => {
        console.log("txHash", transactionHash);
      })
      .on("receipt", (receipt) => {
        console.log("receipt", receipt);
      })
      .on("error", (error) => {
        console.log(error);
      })
      .then(() => {
        alert("토큰을 전송하였습니다.");
        // window.location.reload();
      })
    };
  }

  return(
    <>
    <h3>토큰 전송</h3>
    <form className={styles.form}>
      <div className={styles.inputbox}>
      <b className={styles.b1}>보낼 토큰</b>
      <input ref={amountRef} className={styles.input} type="text" name="amount" placeholder="예) 1"/>
      <b>CBT</b>
      </div>
      <div className={styles.inputbox}>
      <b className={styles.b2}>보낼 지갑 주소</b>
      <input ref={toAddressRef} className={styles.input} type="text" name="toAddress" placeholder="예) 0x9a3Ad8C13Ea932b792326B34575ce726222e3d17"/>
      <button className={styles.button} type="submit" onClick={onTransfer}>보내기</button>
      </div>
    </form>
    </>
  )
}

export default MyToken;