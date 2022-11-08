import Head from "next/head";
import styles from "../styles/Home.module.css";

import LeftPanel from "../Components/LeftPanel";

export default function Home() {
  return (
    <div className={styles.background}>
      <LeftPanel />
      <div className={styles.rightPanel}>
        <div className={styles.topCards}></div>
        <div className={styles.bottomCards}></div>
      </div>
    </div>
  );
}
