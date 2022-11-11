import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppDispatch, useRedirect } from '../hooks/commons';
import { forBypass } from '../slices/counterSlice';

import type { NextPage } from "next";

const Bypass = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("-----------------bypass");
    dispatch(forBypass(-1));
    // dispatch(incrementIfOdd(-2));
  }, [dispatch]);

  const router = useRouter();
  console.log(router.query);

  useRedirect("/", true);

  if (true) {
    return <>loading...</>;
  }
};

export default Bypass;
