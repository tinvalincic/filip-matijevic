import Head from "next/head";
import "./globals.css";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({ subsets: ["latin"] });
const roboto = {
  className: "",
};

export const metadata = {
  title: "Filip Matijević - Discipline of strength",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body
        className={roboto.className}
        style={{
          minWidth: "1024px",
        }}
      >
        {children}
      </body>
    </html>
  );
}