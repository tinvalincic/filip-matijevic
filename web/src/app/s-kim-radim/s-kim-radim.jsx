import styles from "./s-kim-radim.module.css";

const cx = (...classNames) => classNames.join(" ");

export const SKimRadim = () => (
  <div className={cx("section", styles.sKimRadim)}>
    <div className={styles.cover}></div>
    <div className={cx("container", styles.content)}>
      <h2 className={cx("page-title", styles.title)}>S kime radim?</h2>
      <p>
        Radim sa <strong>powerlifterima</strong> koji žele treninge{" "}
        <strong>skrojene isključivo njima</strong>, njihovim potrebama i
        životnim navikama potvrđene kroz uspjehe dosadašnjih klijenata. Najčešća
        dva cilja klijenata s kojima radim su <strong>povećati total</strong> i
        biti <strong>siguran u ono što radi</strong>.
      </p>
    </div>
  </div>
);
