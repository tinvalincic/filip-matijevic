import styles from "./cjenik.module.css";

const cx = (...classNames) => classNames.join(" ");

const packages = [
  {
    name: "Standard",
    price: 70,
    included: [
      "Posebno dizajnirani plan treninga na tjednoj bazi",
      "Analiza i korekcija tehnike",
      "Kontakt jednom prije novog tjedna treninga",
      "Pristup privatnoj stranici za praćenje treninga i napretka",
      "Plan taktike za dan natjecanja",
    ],
  },
  {
    name: "Premium",
    price: 100,
    isPremium: true,
    included: [
      "Posebno dizajnirani plan treninga na tjednoj bazi",
      "Analiza i korekcija tehnike",
      '"check-in" i smjernice za naredni tjedan',
      "Savjetovanje u vezi prehrane i suplementacije",
      "Pristup privatnoj stranici za praćenje treninga i napretka",
      "24/7 kontakt putem Whatsapp-a",
      "Plan taktike za dan natjecanja",
    ],
  },
  {
    name: "Mjesečni",
    price: 160,
    included: [
      "Posebno dizajniran plan treninga za narednih 12 tjedana",
      "Kontakt pozivom svaka 4 tjedna sa izmjenama programa po potrebi",
      "Pristup privatnoj stranici za praćenje treninga i napretka",
      "Plan taktike za dan natjecanja",
    ],
  },
];

export const Cjenik = () => (
  <div className={cx("section", styles.cjenik)}>
    <div className={cx("container", styles.content)}>
      <h2 className={cx("page-title", styles.title)}>
        Što ćeš dobiti kroz online treninge?
      </h2>
      <p>Odaberi paket usluga koji najviše odgovara tvojim potrebama.</p>
      <div className={styles.packages}>
        {packages.map((p) => (
          <div
            key={p.name}
            className={cx(styles.package, p.isPremium ? styles.premium : "")}
          >
            <h3>{p.name}</h3>
            <div className={styles.packagePrice}>
              <span className={styles.packagePriceValue}>{p.price}</span>
              <span className={styles.packagePriceCurrency}>€</span>
            </div>
            <ul className={styles.packageIncluded}>
              {p.included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <button className={cx("btn-primary", styles.contactButton)}>
              Zakaži sastanak
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
