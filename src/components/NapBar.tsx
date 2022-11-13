import { Layout, Menu } from 'antd';
import Router, { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-ui-component';

import { useCookie } from '../hooks/commons';

const { Header } = Layout;
function NapBar() {
  const [user, _, deleteUser] = useCookie("user", "");
  const { pathname } = useRouter();
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]}>
        <Menu.Item key="/" onClick={() => Router.push("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="/about" onClick={() => Router.push("/about")}>
          About
        </Menu.Item>
        <Menu.Item key="name" disabled>
          {user}
        </Menu.Item>
        <Menu.Item key="sing out">
          <Button
            label={"sing out"}
            btnType="primary"
            onClick={() => {
              deleteUser();
              Router.push("http://localhost:3000/sing-in");
            }}
          />{" "}
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default NapBar;
