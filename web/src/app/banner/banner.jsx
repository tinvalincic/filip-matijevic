"use client";
import styles from "./banner.module.css";

export const Banner = ({ scrollToContact }) => (
  <div className={styles.banner}>
    <div className={styles.bannerOverlay}></div>
    <div className={styles.bannerTitles}>
      <h1>Filip Matijević</h1>
      <h3>
        Pomažem powerlifterima postaviti osobne rekorde kroz powerlifting
        programe dizajnirane samo za njih i njihov životni stil.
      </h3>
      <button className={styles.bannerButton} onClick={scrollToContact}>
        Zakaži sastanak
      </button>
    </div>
  </div>
);
