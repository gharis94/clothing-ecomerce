import {createSelector} from 'reselect'


export const categoriesSelector =(state)=>state.categories;

export const categoriesSelectorItems =createSelector(
    [categoriesSelector],
    (categoriesSlice)=>categoriesSlice.categories
)

export const categoriesMapSelector=createSelector(
    [categoriesSelectorItems],
    (categoriesSlice)=>{
         
        return categoriesSlice.reduce((acc,current)=>{
        console.log(current)
        const {title,items} = current
        acc[title.toLowerCase()] = items
        return acc;
    },{})}
)

export const isLoadingSelector =createSelector(
    [categoriesSelector],
    (categoriesSlice)=>categoriesSlice.isLoading
)