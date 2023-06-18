// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyZnwNWR91GghyRBwp4KDTY6j6vWYNUfE",
  authDomain: "crwn-clothing-db-169cf.firebaseapp.com",
  projectId: "crwn-clothing-db-169cf",
  storageBucket: "crwn-clothing-db-169cf.appspot.com",
  messagingSenderId: "318952257548",
  appId: "1:318952257548:web:478dfbf7654ad5607c1629"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);