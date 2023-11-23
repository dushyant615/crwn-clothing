import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesMapArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesMapArray);
// this is an action creater file.