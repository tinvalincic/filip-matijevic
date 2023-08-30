import styles from "./page.module.css";
import { Testimonials } from "./testimonials";
import { Banner } from "./banner";
import { OnlineCoaching } from "./online-coaching";
import { TkoSamJa } from "./tko-sam-ja";
import { SKimRadim } from "./s-kim-radim";
import { Cjenik } from "./cjenik";
import { Faq } from "./faq";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <OnlineCoaching />
      <TkoSamJa />
      <SKimRadim />
      <Cjenik />
      <Testimonials />
      <Faq />
    </main>
  );
}
