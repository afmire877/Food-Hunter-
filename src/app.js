import { el } from "./js/views/base";
import { Search } from "./js/models/search";
import * as searchView from './js/views/searchView';
import M from 'materialize-css';

// Global CONtroller 


const state = {};


const controlSearch = async (e) => {
    e.preventDefault();

    //get the all input inc filters from the field
    let query = searchView.getInput();
    // Prepare  UI
    searchView.clearInputs();
    
    if(query.query) {
        state.search = new Search(query);
        await state.search.getResults()
        console.log(state.search.result);
        await state.search.result.forEach((recipe) => {searchView.renderRecipeCard(recipe.recipe)})
    }
    
    
    

}

// Add addEventListener
el.searchButton.addEventListener('click', controlSearch)


// Materlize init
M.AutoInit();

