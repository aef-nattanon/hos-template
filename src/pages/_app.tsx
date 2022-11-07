import '../styles/globals.css';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from '../store';

import type { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<>load.....</>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
