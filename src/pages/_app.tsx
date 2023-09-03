import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { DataContextProvider } from "@/context/data-context";

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <DataContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </DataContextProvider>
    </>
  );
}

export default MyApp;
