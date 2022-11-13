import { Layout } from 'antd';

import HandleUser from '../components/HandleUser';
import NapBar from '../components/NapBar';
import styles from '../styles/Home.module.css';

const { Content } = Layout;
import type { NextPage } from "next";
const IndexPage: NextPage = () => {
  return (
    <HandleUser>
      <NapBar />
      <Content className={styles.container}>About</Content>
    </HandleUser>
  );
};

export default IndexPage;
