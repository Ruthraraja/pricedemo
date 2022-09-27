 
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC60zbJQdMQ4ykLFwqSLGOksCmFBUIX3AU",
  authDomain: "my-react-app-a1e4b.firebaseapp.com",
  projectId: "my-react-app-a1e4b",
  storageBucket: "my-react-app-a1e4b.appspot.com",
  messagingSenderId: "17653711169",
  appId: "1:17653711169:web:189f4ecdd5d7bfd521a1c0",
  measurementId: "G-P3RFBJVDVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getauth(app);
export default app;
 