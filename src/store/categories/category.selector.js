import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categories) => categories.categoriesMapArray
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categoriesMapArray) => 
        categoriesMapArray.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        },{})
);