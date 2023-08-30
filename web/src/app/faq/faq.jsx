import styles from "./faq.module.css";

const cx = (...classNames) => classNames.join(" ");

const content = [
  {
    question: "Za koga nije ovaj program?",
    answer:
      "Ako tražiš rezultate preko noći , ako nisi spreman uložiti potrebno vrijeme i trud u izvršavanje treninga onda moje usluge nisu za tebe.",
  },
  {
    question: "Postoji li mogućnost povrata novca?",
    answer:
      "Na početku suradnje je potreban veliki angažman s moje strane kako bi prikupio sve potrebne informacije o tebi i skrojio plan s kojim ćeš ostvariti svoje ciljeve. Zbog toga nemam mogućnost povrata novca.",
  },
  {
    question: "Koliko dugo traje?",
    answer:
      "Trajanje naše suradnje ovisi samo o tebi. Neki od klijenata surađuju sa mnom godinama, dok neki krenu samo sa jednim pripremama. Odabir je na tebi.",
  },
  {
    question: "Je li ovaj program za mene iako se ne želim natjecati?",
    answer:
      "Iako su većina mojih klijenata kompetitivni powerlifteri , surađujem i sa ljudima koji to nisu.",
  },
];

export const Faq = () => (
  <div className={cx("section", styles.faq)}>
    <div className="container">
      <h2 className={cx("page-title", styles.title)}>
        Često postavljena pitanja
      </h2>
      <div className={styles.faqList}>
        {content.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </div>
);
