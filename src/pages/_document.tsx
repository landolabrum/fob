import Document, { Html, Head, Main, NextScript } from "next/document";
// import ProjectBuildDate from "@webstack/lib/project/BuildDate/ProjectBuildDate";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="./styles/global.css" />
        </Head>
        <body id="app-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
