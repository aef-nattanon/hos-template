import { LoadingOutlined } from '@ant-design/icons';
import { Layout, Spin } from 'antd';
import React from 'react';

const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;

const { Header, Content, Footer } = Layout;
const Loading: React.FC = () => (
  <Content className="h-screen flex items-center place-content-center">
    <Spin indicator={antIcon} className="self-center" tip=" OP Loading.." />
  </Content>
);

export default Loading;
