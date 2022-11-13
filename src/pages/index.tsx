import { Button, Layout } from 'antd';
import Router from 'next/router';

import HandleUser from '../components/HandleUser';
import NapBar from '../components/NapBar';
import styles from '../styles/Home.module.css';

const { Content } = Layout;
import type { NextPage } from "next";
const IndexPage: NextPage = () => {
  return (
    <HandleUser>
      <NapBar />
      <Content className={styles.container}>
        <Button
          onClick={() => {
            Router.push("http://localhost:3001/pp");
          }}>
          PP
        </Button>
        <Button
          onClick={() => {
            Router.push("http://localhost:3002/op");
          }}>
          OP
        </Button>
      </Content>
    </HandleUser>
  );
};

export default IndexPage;
