import { useCallback, useEffect, useState } from 'react';

import Nap from '../components/Nap';

import type { AppProps } from "next/app";

import type { NextPage } from "next";
const Test: NextPage = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nap />
    </>
  );
};

export default Test;
