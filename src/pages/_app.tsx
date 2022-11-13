import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'react-ui-component/dist/main.css';

import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '../components/Layout';
import Loading from '../components/Loading';
import en from '../lang/en.json';
import th from '../lang/th.json';
import store from '../store';

const messages = {
  th,
  en,
};
function getDirection(locale) {
  if (locale === "th") {
    return "th";
  }

  return "en";
}
import type { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);
  const { locale } = useRouter();

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <IntlProvider locale={locale} messages={messages[locale]}>
            <Layout>
              <Component {...pageProps} dir={getDirection(locale)} />
            </Layout>
          </IntlProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
