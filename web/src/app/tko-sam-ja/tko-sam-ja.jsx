import styles from "./tko-sam-ja.module.css";

const cx = (...classNames) => classNames.join(" ");

function calcYearDiff() {
  const diff = Date.now() - new Date(2015, 0, 1).getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const TkoSamJa = () => (
  <div className={cx("section", styles.tkoSamJa)}>
    <div className="container">
      <div className={styles.content}>
        <div className={styles.desktopImage}>
          <img
            src={`/filip-matijevic.jpeg`}
            alt="Filip Matijević - powerlifting i osobni trener"
          />
        </div>
        <div>
          <h2 className={cx("page-title", styles.title)}>Tko sam ja?</h2>
          <p>
            Filip Matijević - <strong>powerlifting i osobni trener</strong>,
            vlasnik teretane, predsjednik powerlifting kluba Gumeni medvjedići i
            Zagrebačkog powerlifting saveza.
          </p>
          <div className={styles.mobileImage}>
            <img
              src={`/filip-matijevic.jpeg`}
              alt="Filip Matijević - powerlifting i osobni trener"
            />
          </div>
          <p>
            Kada sam prije <strong>više od 10 godina</strong> prvi put ušao u
            teretanu nisam znao skoro ništa o powerliftingu i programiranju
            treninga osim da je to sport u kojem želim{" "}
            <strong>testirati osobne granice</strong>.
          </p>
          <p>
            U međuvremenu sam osnovao klub 2015. godine te započeo svoju
            karijeru. U idućih {calcYearDiff()} godina kroz svoje usluge pomogao
            sam <strong>više od 50 powerlifera svih razina</strong>, od
            početnika koji su tek ušli u teretanu do državnih rekordera i
            natjecatelja na svjetskoj razini da postave{" "}
            <strong>osobne rekorde</strong> i ostvare svoj{" "}
            <strong>potpuni potencijal</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
);
