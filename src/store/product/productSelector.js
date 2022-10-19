import {createSelector} from 'reselect'


export const categoriesSelector =(state)=>state.categories;

export const categoriesSelectorItems =createSelector(
    [categoriesSelector],
    (categoriesSlice)=>categoriesSlice.categories
)
export const isLoadingSelector =createSelector(
    [categoriesSelector],
    (categoriesSlice)=>categoriesSlice.isLoading
)