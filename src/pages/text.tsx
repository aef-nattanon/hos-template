import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Nap from '../components/Nap';
import { useAppSelector, useRedirect } from '../hooks/hooks';
import { selectCount } from '../slices/counterSlice';

import type { AppProps } from "next/app";

import type { NextPage } from "next";
const Test: NextPage = ({ Component, pageProps }: AppProps) => {
  useRedirect("/", useAppSelector(selectCount) === 1);

  const { locales } = useRouter();
  const intl = useIntl();
  const description = intl.formatMessage({
    id: "page.home.description",
  });
  console.log("111");

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
