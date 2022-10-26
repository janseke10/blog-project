import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BreakpointProvider } from "react-socks";
import Layout from "../../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <BreakpointProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BreakpointProvider>
  );
}

export default MyApp;
