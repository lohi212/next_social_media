// import app from "@/pages/api/auth";

import { Button, Layout } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "./ContextWrapper";

const { Header, Content } = Layout;

const Container = ({ children }) => {
  const { app } = useContext(AuthContext);
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
