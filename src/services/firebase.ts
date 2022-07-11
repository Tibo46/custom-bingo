import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY! as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN! as string,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL! as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID! as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET! as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID! as string,
  appId: import.meta.env.VITE_FIREBASE_APPID! as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID! as string,
};

const app = initializeApp(config);
export const db = getFirestore(app);

export const bingoCollection = collection(db, "bingo");
