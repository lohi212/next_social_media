import Home from "@/components/Home";
import Container from "@/components/Layout";
import React, { createContext, useEffect, useState } from "react";
import app from "./api/auth";

export const AuthContext = createContext();

const App = () => {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    console.log({ app });
    app.auth().onAuthStateChanged(setCurrUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currUser }}>
      <Home />
    </AuthContext.Provider>
  );
};

export default App;
