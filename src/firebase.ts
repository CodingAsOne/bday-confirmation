import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7kqfEgKrxKE5NuGZfonnyJrE4sN6hClg",
  authDomain: "alessandra-birthday.firebaseapp.com",
  projectId: "alessandra-birthday",
  storageBucket: "alessandra-birthday.firebasestorage.app",
  messagingSenderId: "659296457735",
  appId: "1:659296457735:web:b66c09f84eb004424286a2",
  measurementId: "G-H52QQVNGTG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
