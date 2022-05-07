import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCv5sntFq1TypCM6Qy_gnR_mbtgYyU-GEc",
  authDomain: "vivianch-proyecto.firebaseapp.com",
  projectId: "vivianch-proyecto",
  storageBucket: "vivianch-proyecto.appspot.com",
  messagingSenderId: "278673227554",
  appId: "1:278673227554:web:e773d92935fb238f326f7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)