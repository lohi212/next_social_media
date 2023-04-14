import Home from "@/components/Home";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const ContextWrapper = ({ app }) => {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    console.log({ app });
    if (app) app.auth().onAuthStateChanged(setCurrUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currUser, app }}>
      <Home />
    </AuthContext.Provider>
  );
};

export default ContextWrapper;
