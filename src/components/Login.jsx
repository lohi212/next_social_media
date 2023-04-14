// import app from "@/pages/api/auth";
import { Button, Input } from "antd";
import { useRouter } from "next/router";
import React, { useCallback, useState, useContext } from "react";
import { AuthContext } from "./ContextWrapper";

const Login = () => {
  const { app } = useContext(AuthContext);
  const router = useRouter();
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (key, val) => {
    setValues({
      ...values,
      [key]: val,
    });
  };

  const handleLogin = async () => {
    const { email, password } = values;
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      router.push("/");
    } catch (err) {
      console.error("Error to login", err);
    }
  };

  return (
    <div>
      <Input
        placeholder="Enter email"
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <Input
        placeholder="Enter password"
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
