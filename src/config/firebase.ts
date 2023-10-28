import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBurALzXqQroQLWCwc7aqA34VJpgiBru4E",
  authDomain: "metacv-a4a1f.firebaseapp.com",
  projectId: "metacv-a4a1f",
  storageBucket: "metacv-a4a1f.appspot.com",
  messagingSenderId: "679415883291",
  appId: "1:679415883291:web:620b7678c79925bff17abe",
  measurementId: "G-7G5RDH3WEL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
