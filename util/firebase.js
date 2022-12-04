import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAKdoPcIzTC2WbTwyWNr0ALXi-sHiqcJH4",
//   authDomain: "npmjs-product-auth.firebaseapp.com",
//   projectId: "npmjs-product-auth",
//   storageBucket: "npmjs-product-auth.appspot.com",
//   messagingSenderId: "595462551354",
//   appId: "1:595462551354:web:0de3823c2440241945c203",
// };

// // const app = initializeApp(firebaseConfig)
// // export const auth = getAuth()

// const app = initializeApp(firebaseConfig);
// // export const auth = getAuth()

// const auth = getAuth(app);

// export { auth };

// -------------------------------------------------------------------------------------------------------------

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  //   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth()

const auth = getAuth(app);

export { auth };
