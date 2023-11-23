import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMapArray: []
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categoriesMapArray: payload
            }
        default:
            return state;
    }  
};