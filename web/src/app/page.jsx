"use client";
import styles from "./page.module.css";
import { Testimonials } from "./testimonials";
import { Banner } from "./banner";
import { OnlineCoaching } from "./online-coaching";
import { TkoSamJa } from "./tko-sam-ja";
import { SKimRadim } from "./s-kim-radim";
import { Cjenik } from "./cjenik";
import { Faq } from "./faq";
import { Contact } from "./contact";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (!contactRef.current) return;
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={styles.main}>
      <Banner scrollToContact={scrollToContact} />
      <OnlineCoaching />
      <TkoSamJa />
      <SKimRadim />
      <Cjenik scrollToContact={scrollToContact} />
      <Testimonials />
      <Faq />
      <Contact contactRef={contactRef} />
    </main>
  );
}
