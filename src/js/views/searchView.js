import { el } from './base';




const getDiet = () => {
    let arr = Array.from(el.dietInput);
    const dietType = arr.filter((item) => {
        return item.checked
    })
    return  dietType[0] == undefined ?  undefined : dietType[0].value;
}
// get Input 
export const getInput = () =>  {
    return {
        query : el.searchInput.value,
        min: el.caloriesInput.children.Min.value,
        max: el.caloriesInput.children.Max.value,
        diet: getDiet()
    }
}
const renderList = (arr) => {
    let output = ``;
    arr.forEach((i) => {
        return output += `<li>${i}</li>`
    })
    return output
} 
 
export const renderRecipeCard = (recipe) => {
    let markup = `                
    <div class="recipe-item recipeCard-01">
        <div class="recipeCard__img">
            <img class="materialboxed" data-caption="${recipe.label}" width="250" src="${recipe.image}">
        </div>
        <div class="recipeCard__details">
            <h5 class="title"><a href="${recipe.url}" target='_blank'>${recipe.label}</a></h5>
            <p >INGREDIENTS</p>
            <ul class="recipeCard__details__ing">
            ${renderList(recipe.ingredientLines)}
            </ul>
        </div>
    </div>
    `;

    el.recipesContainer.insertAdjacentHTML('beforeend', markup)

}

export const clearInputs = () => {
    let arr = Array.from(el.dietInput);
    arr.forEach(item => item.checked = false)
    el.searchInput.value = "";
    el.caloriesInput.children.Min.value = "";
    el.caloriesInput.children.Max.value = "";

}