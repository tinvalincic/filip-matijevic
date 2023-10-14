"use client";
import Slider from "react-slick";
import styles from "./testimonials.module.css";

const cx = (...classNames) => classNames.join(" ");

/* eslint-disable */
const Arrow =
  (classname, img) =>
  ({ onClick }) =>
    (
      <div className={classname} onClick={onClick}>
        <img src={`/${img}.png`} />
      </div>
    );
/* eslint-enable */

export const NextArrow = Arrow(styles.nextArrow, "arrow");
export const PrevArrow = Arrow(styles.prevArrow, "arrow-left");

const testimonials = [
  {
    name: "Andrej Švenda",
    image: "andrej-svenda.jpg",
    text: (
      <>
        Toliko dobrog sam naučio od njega u zadnjih pet godina. Prvenstveno, što
        se tiče powerliftinga, da nije bilo Filipa vjerojatno se više ni ne bi
        bavio ovim sportom, niti bi ikad dosegnuo kilaže koje dižem na
        natjecanjima. Odličan program, odlična komunikacija, odlično
        razumijevanje. Sve kako i treba biti.
        <br />
        Nadalje, pomogao mi je i oko nekih stvari van powerliftinga, preciznije
        oko posla i oko načina na koji gledam neke situacije kroz život, i jako
        sam mu zahvalan na tome. Ako ste spremni dati sebe, svoj trud i svoje
        vrijeme u ovu suradnju, višestruko će vam se vratiti. No doubt. <br />I
        ima slaba točku: bijeli Monster!
      </>
    ),
  },
  {
    name: "Leon Rogina",
    image: "leon-rogina.jpeg",
    text: (
      <>
        Filipovi programi treninga su jednostavni i vrlo jasni, bez nepotrebnog
        kompliciranja. Odlično mi je to što ne moram ni o čemu razmišljati po
        pitanju sastavljanja programa već se u potpunosti prepustim njemu.
        Komunikacija je odlična pa sam na sva svoja pitanja dobio pravovremeni
        odgovor. Uz tjedni update programa koji uvijek dolazi na vrijeme,
        redovno dobijem i komentar na tehniku i izvedbu vježbe koji mi je od
        velike pomoći. S Filipom planiram nastaviti suradnju i preporučio bih ga
        svakome kome je cilj ozbiljnije bavljenje powerliftingom.
      </>
    ),
  },
  {
    name: "Teuta Jakupović",
    image: "teuta-jakupovic.jpeg",
    text: (
      <>
        Zahvalna sam da sam u današnjem svijetu srela osobu za koju smatram da
        je prije svega &quot;čovjek&quot; a zatim i sve sto jedan trener mora
        biti profesionalan, psiholog, staložen, strpljiv i pun razumijevanja. uz
        ovakav tvoj pristup smatram, a i vidim po sebi da su i rezultati
        neizostavan dio procesa. Hvala ti sto si dio ovog mog
        &quot;putovanja&quot;.
      </>
    ),
  },
  {
    name: "Raul Ivičić",
    image: "raul-ivicic.jpeg",
    text: (
      <>
        Kao nekom tko je veliki powerlifting entuzijast, u Hrvatskoj je teško
        pronaći osobu koja razumije dovoljno dobro tehnologiju treninga i
        pripremu za PL natjecanja. Filipu mogu bezbrižno prepustiti brigu o
        planiranju i programiranju treninga. Izrazito detaljan, precizan,
        profesionalan pristup poslu i bogato iskustvo su karakteristike koje
        Filipa izdvajaju iz mase! Filip je moja preporuka za svakoga tko svoj
        trening doživljava ozbiljno!
      </>
    ),
  },
  {
    name: "Ivan Žugaj",
    image: "ivan-zugaj.jpeg",
    text: (
      <>
        Suradnja je počela sa ciljem rješavanja bolova, tj ozlijede leđa.
        <br />
        Brzo smo našli zajednički jezik i kroz mnoge razgovore našli kompromis
        čime bih ja dobio dio treninga koji želim i dio treninga koji se mora
        odraditi kako bih postao bolji powerlifter. Riješili ozlijedu i
        postavili nove rekorde i još mnoge u budućnosti.
        <br />
        Osobno bih rekao najbolja osoba za trening zbog sličnog mindseta i bez
        razmišljanja najbolji trener u RH za powerlifting.
      </>
    ),
  },
  {
    name: "Gordan Klasić",
    image: "gordan-klasic.jpeg",
    text: (
      <>
        Od samog smo početka krenuli potpuno drugačije od načina na koji sam
        prije radio, zbog čega sam bio pomalo skeptičan. No vjerovao sam mu i to
        me dovelo do titule državnog prvaka u najvećoj konkurenciji do sad. A
        usput smo ostvarili i 3. kategoriju sportaša. Iako je danas sve više i
        više trenera u powerliftingu, koji su nestručni i bez iskustva, Filip je
        upravo suprotno.
      </>
    ),
  },
  {
    name: "Tin Valinčić",
    image: "tin-valincic.jpeg",
    text: (
      <>
        Filipu sam se javio s ciljem poboljšanja performansi u powerliftingu,
        ali i zbog želje prikupljanja novih znanja. Nakon 5 godina uspješne
        suradnje mogu reći da sam itekako zadovoljan u oba pogleda. Filipov
        individualni pristup utemeljen na dugogodišnjem iskustvu sa velikim
        brojem klijenata bio je pun pogodak za moj napredak kao sportaša, a
        njegova pristupačnost i otvorenost u komunikaciji mi je pomogla
        usmjeriti moj napredak i izvan okvira powerliftinga.
      </>
    ),
  },
  {
    name: "Bruno Škevin",
    image: "bruno-skevin.jpeg",
    text: (
      <>
        S Filipom sam imao priliku trenirati, izmjenjivati znanja i iskustva od
        samog početka svog putovanja u svijetu powerliftinga koje je počelo
        2015. godine i u tih 7 godina sam mogao primijetit velike promjene u
        njegovim metodama treninga koje su rezultat stalnog ulaganja u svoje
        znanje, i sve većeg iskustva u radu s powerlifterima.
      </>
    ),
  },
  {
    name: "Lea Žunić",
    image: "lea-zunic.jpeg",
    text: (
      <>
        Filipa poznajem gotovo od početka svoje powerlifting karijere. Oduvijek
        mi je pomogao sa savjetima i uskakao kao pomagač na natjecanju. Od kada
        surađujem s njim popravila sam tehniku dizanja i uvelike dodala kilažu
        na šipci. Smatram da Filip ima ogromno znanje i iznad svega iskustvo.
        Odlično se prilagođava svom klijentu i njegovim potrebama te nije škrt
        podijeliti svoje znanje sa drugima.
      </>
    ),
  },
  {
    name: "Luka Hrgarek",
    image: "luka-hrgarek.jpeg",
    text: (
      <>
        Općenito sam prezadovoljan coachingom. Od same usluge, komunikacije do
        napretka. Uvijek mogu iznijeti svoje mišljenje i ciljeve koje mi Filip
        pomaže ostvariti. Osim odličnog napretka bencha i deadlifta pomogao mi
        je rehabilitirati ozljedu koljena te vratiti čučanj na uzlaznu putanju.
        Uspješno smo popunili 93 kg kategoriju i najbitnije od svega, narasli su
        mi kvadricepsi!
      </>
    ),
  },
  {
    name: "Ian Petrović",
    image: "ian-petrovic.jpeg",
    text: (
      <>
        Prvi kontakt s Filipom sam imao 2016. upisom u powerlifting klub
        &quot;Gumeni medvjedići&quot;. Ostavio je dojam povjerenja, točnosti i
        objektivnosti. Kasnije, 2019. sam se odlučio na suradnju/coaching u
        svrhu priprema za powerlifting natjecanje. Proručio sam ga brojnim
        poznanicima te je ostavio velik utisak na moj trening raspored treninga
        - full body split. Rezultati su bili odlični, treninzi su dolazili na
        vrijeme te je jako prilagodljiv na tjedne kad su mi se uplitale neke
        druge aktivnosti u privatnom životu.
      </>
    ),
  },
  {
    name: "Frane Jerčić",
    image: "frane-jercic.jpeg",
    text: (
      <>
        Surađivali smo 6 mjeseci, u tom periodu podigli smo bench s početnik 145
        na krajnjih 173 kilograma podignutih na natjecanju. Profesionalnost i
        znanje su osobine koje cijenim u radu s ljudima, a kod Filipa sam to i
        dobio. Ako želite maksimizirati svoj powerlifting ili bench napredak,
        javite mu se!
      </>
    ),
  },
];

export const Testimonials = () => (
  <section className={cx("section", styles.testimonialsSection)}>
    <div className="container">
      <h2 className={cx("page-title", styles.title)}>Iskustva klijenata</h2>
      <p className={styles.subtitle}>
        Kroz dugogodišnje iskustvo stekao sam velik broj zadovoljnih klijenata.
        Pročitaj njihova iskustva.
      </p>
      <div className={styles.sliderContainer}>
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          autoplaySpeed={5000}
          autoplay={true}
          slidesToShow={1}
          slidesToScroll={1}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          centerPadding="200px"
        >
          {testimonials.map((testimonial) => (
            <div className={styles.wrapper} key={testimonial.name}>
              <div className={styles.testimonial}>
                <div className={styles.imgWrap}>
                  <img
                    src={`/clients/${testimonial.image}`}
                    alt={testimonial.name}
                    className={styles.clientImage}
                  />
                </div>
                <div className={styles.card}>
                  <div className={styles.clientName}>{testimonial.name}</div>
                  <p className={styles.clientText}>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
);
