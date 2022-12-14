import Image from "next/image";
import styles from "../styles/topbox.module.css";

import cards from "../Data/topCards";

function TopBox() {
  return (
    <div className={styles.topCards}>
      <h2 className={styles.highlightHeading}>Highlights</h2>
      <div className={styles.cardsBox}>
        {cards.map((card, index) => (
          <div
            key={card.name}
            className={styles.card}
            style={{
              background: `linear-gradient(to bottom right, ${card.gradient}, #111111)`,
            }}
          >
            <div className={styles.highlightCardTop}>
              <Image src={`/high${index + 1}.png`} height={50} width={50} />
              
              <div className={styles.highlightCardTopTextBox}>
                <p className={styles.highTopText}>{card.name}</p>
                <p
                  className={styles.highTopTextColor}
                  style={{ color: card.color }}
                >
                  {card.colorText}
                </p>
              </div>
            </div>

            <div className={styles.middleBox}>
              <p className={styles.ethName}>{card.ethName}</p>
              <div className={styles.flexBox}>
                <p className={styles.ethValue}>{card.ethValue}</p>
                <Image src="/ethereum.svg" height={15} width={15} />
              </div>
            </div>

            <div className={styles.middleBox}>
              <p className={styles.time}>{card.time}</p>
              <p className={styles.xp}>{card.xp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
