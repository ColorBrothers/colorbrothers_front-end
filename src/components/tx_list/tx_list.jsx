import React from "react";
import styles from "./tx_list.module.css";

const TxList = () => {
  return(
    <>
      <h2>최근 Tx 내역</h2>
      <table className={styles.txListTable}>
        <tr className={styles.txListData}>
          <th className={styles.txData}>#</th>
          <th className={styles.txData}>보낸 주소</th>
          <th className={styles.txData}>받은 주소</th>
          <th className={styles.txData}>보낸 토큰 수량</th>
          <th className={styles.txData}>Hash</th>
        </tr>
        <tr className={styles.txListData}>
          <td>1</td>
          <td>나</td>
          <td>너</td>
          <td>100</td>
          <td>해쉬</td>
        </tr>
      </table>
      </>
  )
}

export default TxList;