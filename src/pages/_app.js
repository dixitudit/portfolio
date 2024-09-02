import Head from "next/head";
import Theme from "../styles/theme";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <title>Udit Narayan Dixit</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      <Analytics />
    </>
  );
}
