import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMYZvJYSQTOWjPKcrRoz_qlXgOy09epDg",
  authDomain: "cookie-clicke.firebaseapp.com",
  databaseURL: "https://cookie-clicke-default-rtdb.firebaseio.com",
  projectId: "cookie-clicke",
  storageBucket: "cookie-clicke.appspot.com",
  messagingSenderId: "441453745559",
  appId: "1:441453745559:web:48358135d807270db7a0d2",
  measurementId: "G-7L45J3PC0P"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export default database;
