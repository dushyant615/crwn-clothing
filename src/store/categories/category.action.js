import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

// simple action function
export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesMapArray) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMapArray);

export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// thunk function
export const fetchCategoriesAsync = () => async(dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesMapArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesMapArray));
    } catch(error){
        dispatch(fetchCategoriesFailed(error));
    }
};



// this is an action creater file.