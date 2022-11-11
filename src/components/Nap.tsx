import { AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from 'react-ui-component';

import { API_URL, COOKIE_OPTION } from '../constants';
import { useAppSelector, useCookie } from '../hooks/commons';
import { useCounter } from '../hooks/useCounter';
import { fetchCount2 } from '../services/counterAPI';
import { selectCount } from '../slices/counterSlice';
import LocaleSwitcher from './locale-switcher';

function Nap(props) {
  // const [counterV, setCounterV] = useState(0);
  // const [isL, setIsL] = useState(false);

  console.log("222");
  const [dataCookie, setDataCookie] = useState(null);

  const [name, setName] = useCookie("name", "");
  useEffect(() => {
    console.log("init page");
    const d = getCookie("test", COOKIE_OPTION);
    setDataCookie(d);
  }, [setDataCookie]);
  useEffect(() => {
    console.log("init page");
    console.log("===---name", name);
  }, [name]);
  const {
    data: counterV,
    isLoading: isL,
    error: err,
  } = useQuery<AxiosResponse<any, any>, string>("fetchCount", () =>
    fetchCount2(33),
  );
  const count = useAppSelector(selectCount);
  const { mutate: counter, isLoading, error, data } = useCounter();
  return (
    <>
      <LocaleSwitcher />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="bypass">bypass</Link>
        </li>
        <li>
          <a href="http://localhost:3000/op/bypass">bypass:3000</a>
        </li>

        <li>
          <Link href="/text">Text</Link>
        </li>
        <li>
          <Link href="/text2">Text2</Link>
        </li>
      </ul>
      {/* {data && data.data} */}
      <div>{dataCookie}</div>
      <div>{API_URL}</div>
      <div>{count}</div>
      <Button
        label={isLoading ? "Loading1..." : "Submit1"}
        btnType="primary"
        onClick={() => counter(1)}
      />
      {error?.message}

      <div>{isL ? "loading......" : counterV?.data?.data}</div>
    </>
  );
}

export default Nap;
