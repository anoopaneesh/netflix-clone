// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBETOaToZh54zkLYI7uNR5-O6hoGTRNNsU",
  authDomain: "netflix-clone-235c7.firebaseapp.com",
  projectId: "netflix-clone-235c7",
  storageBucket: "netflix-clone-235c7.appspot.com",
  messagingSenderId: "769638182440",
  appId: "1:769638182440:web:a05bec70b7d93810e7cf1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app