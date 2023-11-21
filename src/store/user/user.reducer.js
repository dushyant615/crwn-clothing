import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
    currentUser: null
};

// we need to pass default state to reducer here, because as we dont have useReducer method here which take it as initial parameter
// every single reducer receives every single action of redux.
export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }  
};