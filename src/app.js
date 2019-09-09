import { el } from "./js/views/base";
import { Search } from "./js/models/search";
import * as searchView from './js/views/searchView';
// Global CONtroller 


const state = {};


const controlSearch = async (e) => {
    e.preventDefault();

    //get the all input inc filters from the field
    let query = searchView.getInput();
    // console.log(query)
    if(query.query) {
        state.search = new Search(query);
        await state.search.getResults()
        console.log(state.search.result);
        // let recipeDummy = {
        //     image: 'https://lorempixel.com/800/400/nature/4',
        //     url: 'https://smittenkitchen.com/2012/04/pasta-with-garlicky-broccoli-rabe/',
        //     label: 'Tomato Pizza',
        //     ingredientLines : [
        //         '5 garlic cloves, peeled and minced or pressed',
        //         '1/2 teaspoon red pepper flakes, or more or less to taste',
        //         '1/2 teaspoon red pepper flakes, or more or less to taste'
        //     ]
        // }
        // searchView.renderRecipeCard(recipeDummy);
        await state.search.result.forEach((recipe) => {searchView.renderRecipeCard(recipe.recipe)})
    }
    // render to UI 
    
    

}

// Add addEventListener
el.searchButton.addEventListener('click', controlSearch)

