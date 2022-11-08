import Image from "next/image";
import styles from "../styles/bottombox.module.css";

import cards from "../Data/bottomCards";

function BottomBox() {
  return (
    <div className={styles.bottomCards}>
      {cards.map((item, index) => (
        <div key={index} className={styles.bottomCard}>
          <Image
            className={styles.bottomCardImage}
            src={`/bottom${index + 1}.png`}
            height={100}
            width={100}
          />
          <div className={styles.months}>
            <p className={styles.monthText}>3 Months</p>
          </div>

          

          <p className={styles.bottomCardName}>{item}</p>
          <div className={styles.bottomCardMiddle}>
            <p className={styles.bottomCardName}>Bought</p>
            <div className={styles.flexBox}>
              <p className={styles.ethValueTop}>02.82</p>
              <Image src="/ethereum.svg" height={15} width={15} />
            </div>
          </div>

          <div className={styles.bottomCardMiddle}>
            <p className={styles.bottomCardName}>Floor</p>
            <div className={styles.flexBox}>
              <p className={styles.ethValue}>02.82</p>
              <Image src="/ethereum.svg" height={15} width={15} />
            </div>
            <p className={styles.greenText}>+21.6%</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BottomBox;
