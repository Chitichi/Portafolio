import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
export default function Document() {
  return (
    <Html lang="en">
      <Head > 
        <Link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
          />
        {/*<Link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
  />*/}
      </Head>
      <body >
          <title>Giuliana Vazquez Portfolio</title>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
