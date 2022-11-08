import Image from "next/image";
import styles from "../styles/leftpanel.module.css";

function LeftPanel() {
  const chips = [
    { name: "Art", active: true },
    { name: "Utility", active: true },
    { name: "PFP", active: false },
    { name: "Metaverse", active: false },
    { name: "Gaming", active: false },
    { name: "PFP", active: false },
    { name: "ens", active: false },
  ];

  return (
    <div className={styles.leftPanel}>
      <div className={styles.topBox}>
        <div className={styles.topBoxLeft}>
          <Image src="/avatar.png" width={70} height={70} />
          <div className={styles.topBoxLvl}>
            <p className={styles.lvl}>LVL 2</p>
          </div>
        </div>
        <div className={styles.topRightBox}>
          <h3 className={styles.avatarName}>dingaling.eth</h3>
          <h3 className={styles.dotsText}>0xadgf....jkld</h3>
        </div>
      </div>

      <div className={styles.iconsBox}>
        <div className={styles.twitterBox}>
          <Image src="/twitter.svg" height={20} width={20} />
          <h3 className={styles.twitterName}>@dingalingts</h3>
        </div>
        <div className={styles.globeBox}>
          <Image src="/globe.svg" height={20} width={20} />
        </div>
      </div>

      <h3 className={styles.leftPanelText}>
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner
        of 📦 @nftboxes
      </h3>

      <div className={styles.commonCom}>
        <h2 className={styles.commonHeading}>Common communties (3)</h2>
        <div className={styles.comcom}>
          {[1, 2, 3, 4].map((item) => (
            <Image
              key={item}
              className={styles.comcomItem}
              src={`/comcom${item}.png`}
              height={50}
              width={50}
            />
          ))}
        </div>
      </div>

      <div className={styles.chips}>
        {chips.map((item) => (
          <div
            key={item.name}
            className={item.active ? styles.chipItemActive : styles.chipItem}
          >
            <p
              className={item.active ? styles.chipTextActive : styles.chipText}
            >
              {item.name}
            </p>
            <p
              className={item.active ? styles.chipTextActive : styles.chipText}
            >
              12%
            </p>
          </div>
        ))}
      </div>

      <div className={styles.subscribe}>
        <p>Subscribe</p>
        <Image src="/rightArrow.svg" height={20} width={20} />
      </div>
    </div>
  );
}

export default LeftPanel;
