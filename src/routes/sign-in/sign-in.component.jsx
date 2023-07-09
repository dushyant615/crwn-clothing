import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    // useEffect(()=>{
    //     const asyncFn = async() =>{
    //         const response =  await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         };
    //     }
    //     asyncFn();
    // },[]); 
    //as we are signing-in with google redirect, once we come back, the app will 
    //again remount and we want to get the user info at that time so we are using useEffect here

    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
};

export default SignIn;