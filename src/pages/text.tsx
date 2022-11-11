import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Nap from '../components/Nap';
import { COOKIE_OPTION } from '../constants';
import { useAppSelector, useCookie, useRedirect } from '../hooks/commons';
import { selectCount } from '../slices/counterSlice';

import type { AppProps } from "next/app";

import type { NextPage } from "next";
const Test: NextPage = ({ Component, pageProps }: AppProps) => {
  const [name, setName] = useCookie("name", "");

  useEffect(() => {
    console.log("init page");
    setCookie("test", new Date(), COOKIE_OPTION);
    console.log("10000000000", name);
    setName(new Date());
    console.log("20000000000", name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isRedirect = useAppSelector(selectCount) === 1;
  useRedirect("/", isRedirect);

  const { locales } = useRouter();
  const intl = useIntl();
  const description = intl.formatMessage({
    id: "page.home.description",
  });
  console.log("111");

  if (isRedirect) {
    return <>loading...</>;
  }
  return (
    <>
      <Nap />
      <div>test</div>
      <FormattedMessage
        id="page.home.title"
        values={{ b: (chunks) => <b>{chunks}</b> }}
      />
      <br />
      <FormattedMessage
        id="page.home.description2"
        values={
          {
            name: locales,
          } // Values should be an object literal, but not necessarily every value inside
        }
      />
      <div>{description}</div>
    </>
  );
};

export default Test;
