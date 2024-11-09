import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Space+Grotesk:wght@300..700&display=swap');
      </style>{" "}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
