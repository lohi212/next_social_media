import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";
import firebase from "firebase/compat/app";

export const url = (publicId, options) => {
  try {
    const scOptions = Util.withSnakeCaseKeys(options);
    const cl = CoreCloudinary.new();
    return cl.url(publicId, scOptions);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const openUploadWidget = (options, callback) => {
  return window.cloudinary.openUploadWidget(options, callback);
};

export const app = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB4zpw0anEtUZ1qkJyqIdXLm9vgeUafTuw",
    authDomain: "social-media-app-ag3gf4.firebaseapp.com",
    databaseURL: "https://social-media-app-ag3gf4-default-rtdb.firebaseio.com",
    projectId: "social-media-app-ag3gf4",
    storageBucket: "social-media-app-ag3gf4.appspot.com",
    messagingSenderId: "446837859031",
    appId: "1:446837859031:web:884b295b8377e66726c692",
    measurementId: "G-B1HHMM4G1F",
  };

  try {
    return !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.initializeApp({});
  } catch (err) {
    console.error("Error to initialize firebase", err);
  }
};
