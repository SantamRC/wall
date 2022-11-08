import Head from "next/head";
import styles from "../styles/Home.module.css";

import LeftPanel from "../Components/LeftPanel";
import TopBox from "../Components/TopBox";
import BottomBox from "../Components/BottomBox";

export default function Home() {
  return (
    <div className={styles.background}>
      <LeftPanel />
      <div className={styles.rightPanel}>
        <TopBox />
        <BottomBox />
      </div>
    </div>
  );
}
