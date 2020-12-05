import React from "react";
import styles from "./color_data.module.css";


const ColorData = () => {
  return(
    <div className={styles.listData}>
      <table className={styles.colorListTable}>
        <tr className={styles.colorListData}>
          <th className={styles.colorData}>조색제</th>
          <th className={styles.colorData}>0.25L</th>
          <th className={styles.colorData}>0.5L</th>
          <th className={styles.colorata}>1.0L</th>
          <th className={styles.colorData}>2.0L</th>
          <th className={styles.colorData}>배합(/g)</th>
        </tr>
        <tr className={styles.colorListMetaData}>
          <td>1111</td>
          <td>asd</td>
          <td>횐다</td>
          <td>ppg</td>
          <td>123</td>
          <td>1wa</td>
        </tr>
      </table>
    </div>
  )
}

export default ColorData;