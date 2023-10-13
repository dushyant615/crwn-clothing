import { createContext, useEffect, useReducer } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// as the actual value you want to access(default value)
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in the userReducer`)
    }  
}

const INITIAL_STATE ={
    currentUser: null
}

export const UserProvider = ({ children }) =>{
    const [ state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }
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