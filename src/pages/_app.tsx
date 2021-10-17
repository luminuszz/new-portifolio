import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import { AppPropsWithLayout } from "../@types/types";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const defaultTitle = "Davi Ribeiro";

  const getTitle =
    `${defaultTitle} | ${Component.pageTitle} ` ?? `${defaultTitle}`;

  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{getTitle}</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
export default App;
