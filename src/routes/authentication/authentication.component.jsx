import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
    // useEffect(()=>{
    //     const asyncFn = async() =>{
    //         const response =  await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         };
    //     }
    //     asyncFn();
    // },[]); 
    //when we are signing-in with google redirect, once we come back, the app will 
    //again remount and we want to get the user info at that time so we are using useEffect here, but for now we are using signinwith popup

    
    return(
        <div>
            <h1>Sign In Page</h1>
            <SignInForm/>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
};

export default Authentication;