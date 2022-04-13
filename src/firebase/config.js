import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVrWXAQpmA4dTR83GBtcpQo-bTbIsY8hQ",
  authDomain: "react-app-e2880.firebaseapp.com",
  projectId: "react-app-e2880",
  storageBucket: "react-app-e2880.appspot.com",
  messagingSenderId: "507319520974",
  appId: "1:507319520974:web:739f21b41a16cd4685ca9f"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}