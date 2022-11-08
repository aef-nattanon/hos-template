import Link from 'next/link';
import { useMutation } from 'react-query';

import { HOS_API } from '../constants';
import { useAppSelector } from '../hooks/hooks';
import { useCounter } from '../hooks/useCounter';
import { fetchCount } from '../services/counterAPI';
import { selectCount } from '../slices/counterSlice';
import apiMutationOption from '../utilities/apiMutationOption';

function Nap() {
  const count = useAppSelector(selectCount);

  const { mutate: counter, isLoading, error, data } = useCounter();
  const mutation = useMutation("countAsync22", fetchCount, apiMutationOption());
  // const {
  //   isLoading: load2,
  //   isError,
  //   data,
  //   error: error2,
  // } = useQuery("todos1", async () => {
  //   return fetchCount(33);
  // });
  console.log("111111", mutation.data);
  console.log("333333", data?.data);
  console.log("333333", error?.message);
  // console.log(process.env, "2222");
  // console.log(process.env.HOS_API, "3333");
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/text">Text</Link>
        </li>
      </ul>
      {/* {data && data.data} */}
      <div>{HOS_API}</div>
      <div>{count}</div>
      <button onClick={() => counter(2)}>
        {isLoading ? "Loading1..." : "Submit1"}
      </button>
      {error?.message}
      <button onClick={() => mutation.mutate(1)}>
        {mutation.isLoading ? "Loading2..." : "Submit+1"}
      </button>
      {mutation.error?.message}
    </>
  );
}

export default Nap;
