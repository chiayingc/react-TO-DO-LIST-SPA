import { initializeApp } from 'firebase/app';
import { getFirestore  } from 'firebase/firestore';
// import dotenv from 'dotenv';


// dotenv.config();



// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTHDOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.FIREBASE_APPID
//   };

  const app=initializeApp(firebaseConfig);

  const db=getFirestore(app);

  export {db};