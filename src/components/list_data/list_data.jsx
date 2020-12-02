import React from "react";
import styles from "./list_data.module.css";
import ListBanner from "../list_banner/list_banner";

const ListData = () => {
  return(
    <div className={styles.listData}>
    <h3>동일 차량번호</h3>
      <table className={styles.txListTable}>
        <tr className={styles.txListData}>
          <th className={styles.txData}>차량번호</th>
          <th className={styles.txData}>컬러 코드</th>
          <th className={styles.txData}>수리 부위(파츠)</th>
          <th className={styles.txData}>페인트</th>
          <th className={styles.txData}>등록일자</th>
          <th className={styles.txData}>지갑 주소</th>
        </tr>
        <tr className={styles.txListMetaData}>
          <td>1111</td>
          <td>asd</td>
          <td>횐다</td>
          <td>ppg</td>
          <td>123123123</td>
          <td>1wasd123dasd</td>
          <button className={styles.button}>조회 하기</button>
        </tr>
      </table>
    </div>
  )
}

export default ListData;