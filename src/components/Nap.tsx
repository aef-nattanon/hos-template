import Link from 'next/link';

function Nap() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/text">Text</Link>
      </li>
    </ul>
  );
}

export default Nap;
