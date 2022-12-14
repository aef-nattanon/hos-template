import Head from 'next/head';
import Image from 'next/image';

import Counter from '../components/Counter';
import HandleUser from '../components/HandleUser';
import Nap from '../components/Nap';
import { setBaseUrl } from '../constants';
import styles from '../styles/Home.module.css';

import type { NextPage } from "next";
const IndexPage: NextPage = () => {
  return (
    <HandleUser>
      <Nap />
      <div className={styles.container}>
        <Head>
          <title>Redux Toolkit</title>
          <link rel="icon" href={setBaseUrl("/favicon.ico")} />
        </Head>
        <header className={styles.header}>
          <Image
            src={setBaseUrl("/logo.svg")}
            className={styles.logo}
            width="100"
            height="100"
            alt="logo"
          />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className={styles.link}
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              React
            </a>
            <span>, </span>
            <a
              className={styles.link}
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer">
              Redux
            </a>
            <span>, </span>
            <a
              className={styles.link}
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer">
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className={styles.link}
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer">
              React Redux
            </a>
          </span>
        </header>
      </div>
    </HandleUser>
  );
};

export default IndexPage;
