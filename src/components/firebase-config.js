import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArtMnBs_fkrHnRSOt6HrIzihpUQ7NphLc",
    authDomain: "bloggingbase-bfb61.firebaseapp.com",
    projectId: "bloggingbase-bfb61",
    storageBucket: "bloggingbase-bfb61.appspot.com",
    messagingSenderId: "515971119554",
    appId: "1:515971119554:web:5c760823cf7c36d237be5b",
    measurementId: "G-ZJQBTZC5WB"
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)