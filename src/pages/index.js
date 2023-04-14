import React, { useEffect, useState } from "react";
import ContextWrapper from "@/components/ContextWrapper";
import { app } from "@/utils";

const App = () => {
  const [firebaseApp, setFirebaseApp] = useState("");

  useEffect(() => {
    if (!firebaseApp) setFirebaseApp(app);
  }, []);

  console.log({ firebaseApp });
  return <ContextWrapper app={firebaseApp} />;
};

export default App;
