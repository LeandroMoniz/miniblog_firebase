
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsf_CrK1Mrc11i0YM8eD_Gq9HIGaS7-_M",
  authDomain: "miniblog-55.firebaseapp.com",
  projectId: "miniblog-55",
  storageBucket: "miniblog-55.appspot.com",
  messagingSenderId: "364618857375",
  appId: "1:364618857375:web:48946a57b74c0af2905baa"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {db};