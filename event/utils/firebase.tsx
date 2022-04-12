import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFMS6J840hofbrfVFzvs6tQi_9NORyGmg",
  authDomain: "space-298fb.firebaseapp.com",
  projectId: "space-298fb",
  storageBucket: "space-298fb.appspot.com",
  messagingSenderId: "664548418686",
  appId: "1:664548418686:web:013dcbc7b046469061642f",
  measurementId: "G-BNGM5JESHY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export default auth;
