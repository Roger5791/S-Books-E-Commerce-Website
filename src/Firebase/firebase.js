
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM1J4Sqn1dWl8CRZVJkSZhUVPmHexhskc",
  authDomain: "e-store-c2f27.firebaseapp.com",
  projectId: "e-store-c2f27",
  storageBucket: "e-store-c2f27.appspot.com",
  messagingSenderId: "720702759786",
  appId: "1:720702759786:web:c62c6b9d214f01b2d8fb13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };