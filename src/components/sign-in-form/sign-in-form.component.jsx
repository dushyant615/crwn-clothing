import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultformFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const resetFormFields = () =>{
        setFormFields(defaultformFields);
    };
    
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }catch(err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(err);
            } 
        }
    };

    const signInWithGoogle = async() => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>
                        Google Sign in
                    </Button>
                    {/* by default button is of type submit, thats why we have specify type as button */}    
                </div>
            </form>
        </div>
    )
}

export default SignInForm;

//   <button onClick={signInWithGoogleRedirect}>
//                     Sign in with Google Redirect
//                     </button> 
                    
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
