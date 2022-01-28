import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTkHSNY1DjVUb0CIereTg830G-gxJ8ILs",
  authDomain: "clone-5cf45.firebaseapp.com",
  projectId: "clone-5cf45",
  storageBucket: "clone-5cf45.appspot.com",
  messagingSenderId: "51559984203",
  appId: "1:51559984203:web:05ea97bf93b833518731ce",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { auth, storage };
export default db;
