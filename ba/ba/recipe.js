console.log('Recipe.js is running');

const recipeDetails = document.querySelector('.recipe-container');

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const recipeName = urlParams.get('recipe');

// Simple display function without images
function displayRecipe(name) {
    recipeDetails.innerHTML = `
        <div class="recipe-content">
            <h1 class="recipe-title">${name}</h1>
            <div class="recipe-links">
                <a href="https://www.allrecipes.com/search?q=${encodeURIComponent(name)}" target="_blank" class="recipe-link">AllRecipes</a>
                <a href="https://www.foodnetwork.com/search/${encodeURIComponent(name)}-" target="_blank" class="recipe-link">Food Network</a>
            </div>
            <a href="wheel.html" class="back-button">Back to Deck</a>
        </div>
    `;
}

// Display recipe if we have a name parameter
if (recipeName) {
    displayRecipe(recipeName);
} else {
    recipeDetails.innerHTML = `
        <div class="recipe-content">
            <h1 class="recipe-title">No Recipe Selected</h1>
            <a href="wheel.html" class="back-button">Back to Deck</a>
        </div>
    `;
} 