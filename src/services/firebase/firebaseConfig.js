import { initializeApp, } from "firebase/app"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAnyWMWNGCCKyR355AfOu5THTaEzfxmYAo",
    authDomain: "react-coderhouse-e4307.firebaseapp.com",
    projectId: "react-coderhouse-e4307",
    storageBucket: "react-coderhouse-e4307.appspot.com",
    messagingSenderId: "177591122048",
    appId: "1:177591122048:web:2982b9fe95ca8c94268e65"
  };
  

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)