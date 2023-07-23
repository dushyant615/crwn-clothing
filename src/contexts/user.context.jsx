import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// as the actual value you want to access(default value)
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                // centralizing user doc creation
                createUserDocumentFromAuth(user);                
            }
            setCurrentUser(user);
        });
        return unsubscribe; //cleanup function that will unsubscribe the observer to prevent memory leak.
        // removing setCurrentUser from sign in/up component and making it centralised here.
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};