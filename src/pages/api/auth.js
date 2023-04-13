import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4zpw0anEtUZ1qkJyqIdXLm9vgeUafTuw",
  authDomain: "social-media-app-ag3gf4.firebaseapp.com",
  projectId: "social-media-app-ag3gf4",
  storageBucket: "social-media-app-ag3gf4.appspot.com",
  messagingSenderId: "446837859031",
  appId: "1:446837859031:web:997e819cfa611f4426c692",
  measurementId: "G-1HY9QZ6DS2",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
