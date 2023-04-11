// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4zpw0anEtUZ1qkJyqIdXLm9vgeUafTuw",
  authDomain: "social-media-app-ag3gf4.firebaseapp.com",
  projectId: "social-media-app-ag3gf4",
  storageBucket: "social-media-app-ag3gf4.appspot.com",
  messagingSenderId: "446837859031",
  appId: "1:446837859031:web:997e819cfa611f4426c692",
  measurementId: "G-1HY9QZ6DS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function authenticate(req, res) {
  res.status(200).json({ name: "John Doe" });
}
