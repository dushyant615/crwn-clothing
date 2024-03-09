import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

// we need to pass default state to reducer here, because as we dont have useReducer method here which take it as initial parameter
// every single reducer receives every single action of redux.
export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null };
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return { ...state, error: payload };
        default:
            return state;
    }  
};