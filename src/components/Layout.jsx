import app from "@/pages/api/auth";
import { Button, Layout } from "antd";
import React from "react";

const { Header, Content } = Layout;

const Container = ({ children }) => {
  const handleLogout = () => {
    app.auth().signOut();
  };

  return (
    <Layout>
      <Header>
        <Button onClick={handleLogout}>Logout</Button>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default Container;
