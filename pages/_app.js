import ThemeProvider from "../providers/ThemeProvider";
import "../styles/global.scss";

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} key={router.asPath} />
    </ThemeProvider>
  );
}
