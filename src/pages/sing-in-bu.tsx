import { Button, Checkbox, Form, Input, Layout } from 'antd';
import Router from 'next/router';
import React, { useState } from 'react';

import Loading from '../components/Loading';
import { useCookie, useRedirect } from '../hooks/commons';

const { Header, Content, Footer } = Layout;

export interface UserData {
  password: string;
  username: string;
  remember: boolean;
}
function SingIn() {
  const [user, setUser] = useCookie("user", "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: UserData) => {
    setLoading(true);
    console.log("Success:", values);
    if (
      (values.username === "demo1" || values.password === "demo2") &&
      values.password === "demo"
    ) {
      await new Promise((r) => setTimeout(r, 1000));
      setError("");
      setUser(values.username);
      console.log("okey");

      Router.push("/");
    } else {
      setError(" couldn't find an account");
    }
    setLoading(false);
  };

  useRedirect("/", user && user !== "");
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  if (user) {
    return <Loading />;
  }

  return (
    <Content className="h-screen flex items-center place-content-center">
      <div className="bg-orange-200 p-3">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              loading={loading}
              style={{ backgroundColor: "#1890ff" }}
              type="primary"
              htmlType="submit">
              Sing In
            </Button>
          </Form.Item>
        </Form>

        {error && error}
      </div>
    </Content>
  );
}

export default SingIn;
