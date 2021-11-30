import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { getSiteConfig } from "../lib/api";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const site = await getSiteConfig();

    return { ...initialProps, site };
  }

  render() {
    return (
      <Html lang={this.props.site.lang || "en-US"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
