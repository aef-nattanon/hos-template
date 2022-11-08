import { AxiosResponse } from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { HOS_API } from '../constants';
import { useAppSelector } from '../hooks/hooks';
import { useCounter } from '../hooks/useCounter';
import { fetchCount2 } from '../services/counterAPI';
import { selectCount } from '../slices/counterSlice';

function Nap() {
  // const [counterV, setCounterV] = useState(0);
  // const [isL, setIsL] = useState(false);

  useEffect(() => {
    console.log("init page");
  }, []);

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
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/text">Text</Link>
        </li>
        <li>
          <Link href="/" locale="en">
            Home
          </Link>
        </li>
        <li>
          <Link href="/text" locale="en">
            Text
          </Link>
        </li>
      </ul>
      {/* {data && data.data} */}
      <div>{HOS_API}</div>
      <div>{count}</div>
      <button onClick={() => counter(2)}>
        {isLoading ? "Loading1..." : "Submit1"}
      </button>
      {error?.message}

      <div>{isL ? "loading......" : counterV?.data?.data}</div>
    </>
  );
}

export default Nap;
