import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BreakpointProvider } from "react-socks";
import Layout from "../../components/Layout";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <ApolloProvider client={client}>
      <BreakpointProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BreakpointProvider>
    </ApolloProvider>
  );
}

export default MyApp;
