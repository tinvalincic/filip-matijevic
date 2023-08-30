import styles from "./online-coaching.module.css";

const cx = (...classNames) => classNames.join(" ");

export const OnlineCoaching = () => (
  <div className={cx("section", styles.onlineCoaching)}>
    <div className="container">
      <h2 className={cx("page-title", styles.title)}>
        Je li online coaching za mene?
      </h2>
      <p>
        Ako nisi siguran kako <strong>dizajnirati</strong> svoj{" "}
        <strong>program treninga</strong> ili ako dosadašnji programi nisu
        ispunili tvoja očekivanja, ako te <strong>brojne informacije</strong>{" "}
        online samo dodatno <strong>zbunjuju</strong>, ako već sada{" "}
        <strong>naporno treniraš</strong> ali imaš osjećaj da stagniraš –{" "}
        <strong>online coaching je za tebe</strong>.
      </p>
      <p>
        Zamisli da <strong>svaki tjedan</strong> dobiješ{" "}
        <strong>plan treninga</strong> koji te vodi prema <strong>cilju</strong>
        , a na tebi je da budeš dosljedan, pratiš korake i{" "}
        <strong>uživaš u procesu</strong>.
      </p>
    </div>
  </div>
);
