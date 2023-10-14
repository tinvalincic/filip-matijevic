"use client";
import { useEffect, useState } from "react";
import styles from "./contact.module.css";

const cx = (...classNames) => classNames.join(" ");

async function postData(data = {}) {
  const response = await fetch("/contact-form-handler.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

const Input = ({ type, placeholder, pattern, name }) => {
  const handleInvalid = ({ target }) => {
    target.setCustomValidity("Molimo Vas da ispravno popunite ovo polje");
  };
  const resetValidity = ({ target }) => target.setCustomValidity("");
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      onInvalid={handleInvalid}
      onInput={resetValidity}
      pattern={pattern}
      name={name}
    />
  );
};

export const Contact = ({ contactRef }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleSubmit = async (e) => {
    setShowError(false);
    setShowSuccess(false);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await postData(data);
    if (Number(response.code) === 0) {
      setShowSuccess(true);
      return;
    }
    setShowError(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowError(false);
      setShowSuccess(false);
    }, 5000);
  }, [showSuccess, showError]);

  return (
    <section className={cx("section", styles.contactSection)} ref={contactRef}>
      <div className="container">
        <h2 className={cx("page-title", styles.title)}>Zakaži sastanak</h2>
        <p className={styles.subtitle}>
          Kontaktiraj me i napravi prvi korak prema ostvarenju svojih ciljeva.
        </p>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={cx(styles.gridGroup)}>
              <Input name="name" type="text" placeholder="Ime i prezime" />
              <Input
                name="email"
                type="text"
                placeholder="E-mail"
                pattern="^[a-zA-Z0-9+._%\-+]{1,256}@[a-zA-Z0-9][a-zA-Z0-9-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,25})+$"
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Napišite poruku"
                rows={10}
              />
            </div>
            <div className={styles.formGroup}>
              {showSuccess && (
                <p className={cx(styles.message, styles.successMessage)}>
                  Vaša poruka je uspješno poslana. Hvala!
                </p>
              )}
              {showError && (
                <p className={cx(styles.message, styles.errorMessage)}>
                  Nažalost, došlo je do greške. Molimo Vas da pokušate ponovo.
                </p>
              )}
            </div>
            <button
              type="submit"
              className={cx("btn-primary", styles.btnSalji)}
            >
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
