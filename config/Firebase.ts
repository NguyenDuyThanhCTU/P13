import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyASm9bIKcP7tkR8W4qKnFF7pQ7iAb_LCNo",

//   authDomain: "lnktshopstore.firebaseapp.com",

//   projectId: "lnktshopstore",

//   storageBucket: "lnktshopstore.appspot.com",

//   messagingSenderId: "992053436218",

//   appId: "1:992053436218:web:5e9f8012379b3e13277a03",

//   measurementId: "G-5QZ7CY67DK",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBwlo4xsYtGAqxKol-RVHPJaD04pm5zTwg",

  authDomain: "xetoanphuoc.firebaseapp.com",

  projectId: "xetoanphuoc",

  storageBucket: "xetoanphuoc.appspot.com",

  messagingSenderId: "392079889113",

  appId: "1:392079889113:web:437d6b166571a6bb4ba4c8",

  measurementId: "G-HGCXSEE0E5",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
// export const db = getFirestore(app);

export const auth = getAuth(app);
