import React from "react";
import styles from "./status.module.css";
import MyToken from "../my_token/my_token";
import TxList from "../tx_list/tx_list";


const Status = ({wallet, tokenBalance}) => {
  return(
    <div className={styles.status}>
      <MyToken wallet={wallet} tokenBalance={tokenBalance}/>
      <hr />
      <TxList />
    </div>
  )
}

export default Status;