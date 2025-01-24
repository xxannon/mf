console.log('Recipe picker is running');

const mealTypeDropdown = document.getElementById('mealType');
const card = document.querySelector('.card');
const cardBack = document.querySelector('.card-back');
const shuffleButton = document.querySelector('.shuffle-button');

// Get URL parameters for dietary restrictions
const urlParams = new URLSearchParams(window.location.search);
const dietaryPreference = urlParams.get('diet');

const meals = {
    appetizer: [
        'Bruschetta', 'Spring Rolls', 'Tomato Soup', 'Greek Salad', 'Buffalo Wings',
        'Loaded Nachos', 'Spinach Dip', 'Mozzarella Sticks', 'Garlic Bread',
        'Potato Skins', 'Hummus', 'Guacamole', 'Calamari', 'Stuffed Mushrooms',
        'Deviled Eggs', 'Chicken Satay', 'Crab Cakes', 'Jalapeño Poppers',
        'Shrimp Cocktail', 'Caprese Salad', 'Onion Rings', 'Bacon Wrapped Dates',
        'Coconut Shrimp', 'Stuffed Peppers', 'Baked Brie', 'Chicken Wings',
        'Edamame', 'Fruit Salsa', 'Cheese Platter', 'Stuffed Dates',
        'Zucchini Fritters', 'Beef Tartare', 'Prosciutto Melon', 'Cucumber Bites',
        'Salmon Tartare', 'Mushroom Caps', 'Olive Tapenade', 'Pesto Crostini',
        'Beef Carpaccio', 'Tempura Veggies', 'Tuna Tartare', 'Spanakopita',
        'Arancini', 'Empanadas', 'Samosas', 'Gyoza', 'Ceviche'
    ],
    entree: [
        'Fettuccine Alfredo', 'Spaghetti and Meatballs', 'Pasta Carbonara',
        'Penne Arrabbiata', 'Pasta Primavera', 'Beef Lasagna', 'Pan-Seared Steak',
        'Beef Stroganoff', 'Beef Wellington', 'Beef Stir Fry', 'Beef Burrito',
        'Beef Kebabs', 'Beef Tacos', 'Beef Enchiladas', 'Garlic Chicken',
        'Chicken Marsala', 'Chicken Tikka Masala', 'Orange Chicken', 'Chicken Parmesan',
        'Chicken Curry', 'Chicken Shawarma', 'Chicken Wings', 'Chicken Piccata',
        'Grilled Salmon', 'Shrimp Scampi', 'Fish Tacos', 'Grilled Tuna',
        'Grilled Mahi Mahi', 'Shrimp Stir Fry', 'Calamari', 'Crab Cakes',
        'Pork Tenderloin', 'Honey Glazed Ham', 'Pork Chops', 'Lamb Chops',
        'Shepherd\'s Pie', 'Margherita Pizza', 'Vegetable Lasagna', 'Eggplant Parmesan',
        'Vegetable Curry', 'Mushroom Risotto', 'Pad Thai', 'Duck Confit',
        'Coq au Vin', 'Beef Bourguignon', 'Ratatouille', 'Moussaka', 'Paella',
        'Osso Buco', 'Gnocchi', 'Beef Rendang', 'Thai Green Curry', 'Butter Chicken',
        'Tandoori Chicken', 'Bibimbap', 'Korean BBQ', 'Teriyaki Chicken',
        'Beef Pho', 'Chicken Katsu', 'Fish and Chips', 'Beef Fajitas',
        'Chicken Quesadilla', 'Shrimp Tacos', 'Beef Shawarma', 'Falafel Plate',
        'Greek Souvlaki', 'Chicken Schnitzel'
    ],
    sides: [
        'French Fries', 'Steamed Rice', 'Roasted Vegetables', 'Mashed Potatoes',
        'Mac and Cheese', 'Grilled Asparagus', 'Sweet Potato Fries', 'Quinoa Pilaf',
        'Garlic Green Beans', 'Coleslaw', 'Rice Pilaf', 'Roasted Brussels Sprouts',
        'Potato Salad', 'Corn on the Cob', 'Sautéed Mushrooms', 'Glazed Carrots',
        'Creamed Spinach', 'Scalloped Potatoes', 'Baked Sweet Potato',
        'Cauliflower Gratin', 'Roasted Broccoli', 'Sautéed Spinach',
        'Grilled Zucchini', 'Roasted Cauliflower', 'Wild Rice', 'Garlic Bread',
        'Caesar Salad', 'Mixed Green Salad', 'Roasted Potatoes', 'Steamed Broccoli'
    ],
    dessert: [
        'Chocolate Cake', 'Apple Pie', 'Cheesecake', 'Brownies', 'Tiramisu',
        'Ice Cream Sundae', 'Crème Brûlée', 'Chocolate Chip Cookies', 'Carrot Cake',
        'Lemon Bars', 'Bread Pudding', 'Peach Cobbler', 'Panna Cotta', 'Fruit Tart',
        'Red Velvet Cake', 'Chocolate Mousse', 'Key Lime Pie', 'Banana Bread',
        'Blueberry Muffins', 'Macarons', 'Churros', 'Baklava', 'Cannoli',
        'Crêpes', 'Gelato', 'Profiteroles', 'Tres Leches Cake', 'Pavlova',
        'Flan', 'Rice Pudding',
        'Black Forest Cake', 'Lemon Meringue Pie', 'Molten Chocolate Cake',
        'Strawberry Shortcake', 'Banoffee Pie', 'Chocolate Soufflé',
        'Vanilla Bean Cheesecake', 'Raspberry Tart', 'Almond Biscotti',
        'Coconut Macaroons', 'Caramel Apple Crisp', 'Dark Chocolate Truffles',
        'Pumpkin Pie', 'Bread & Butter Pudding', 'Mango Sorbet'
    ],
    breakfast: [
        'Pancakes', 'French Toast', 'Eggs Benedict', 'Breakfast Burrito',
        'Avocado Toast', 'Omelette', 'Waffles', 'Breakfast Sandwich',
        'Oatmeal', 'Frittata', 'Breakfast Hash', 'Eggs and Bacon',
        'Breakfast Quesadilla', 'Yogurt Parfait', 'Breakfast Pizza',
        'Huevos Rancheros', 'Breakfast Bowl', 'Breakfast Tacos',
        'Shakshuka', 'Breakfast Casserole', 'Quiche', 'Breakfast Potatoes',
        'Breakfast Muffins', 'Breakfast Smoothie Bowl', 'Eggs Florentine',
        'Breakfast Wrap', 'Breakfast Skillet', 'Breakfast Strata',
        'Breakfast Bagel', 'Continental Breakfast'
    ]
};

let currentRecipes = [];
let isFlipped = false;

// Update the event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Event Listeners
    mealTypeDropdown.addEventListener('change', handleMealTypeChange);
    card.addEventListener('click', flipCard);
    shuffleButton.addEventListener('click', shuffleNewRecipe);

    // Initially hide the shuffle button
    shuffleButton.style.display = 'none';
});

function handleMealTypeChange() {
    const selectedType = mealTypeDropdown.value;
    if (selectedType) {
        // Get recipes based on dietary preference
        currentRecipes = dietaryPreference ? 
            filterRecipes(meals[selectedType], dietaryPreference) : 
            meals[selectedType];
            
        if (currentRecipes.length === 0) {
            cardBack.innerHTML = `<div>No ${selectedType} recipes found for this dietary preference!</div>`;
            return;
        }
            
        card.classList.remove('flipped');
        card.classList.remove('show');
        isFlipped = false;
        
        // Update front card text
        document.querySelector('.card-front').textContent = `Click to reveal your ${selectedType}!`;
        cardBack.innerHTML = `<div>Click to reveal your ${selectedType}!</div>`;
        
        // Show the main card
        card.classList.add('show');
    }
}

function createShuffleCards() {
    const shuffleContainer = document.querySelector('.shuffle-cards');
    shuffleContainer.innerHTML = '';
    
    // Create 5 cards
    const shuffleRecipes = [];
    const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    for (let i = 0; i < 5; i++) {
        const randomRecipe = currentRecipes[Math.floor(Math.random() * currentRecipes.length)];
        const randomNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
        shuffleRecipes.push(randomRecipe);
        
        const shuffleCard = document.createElement('div');
        shuffleCard.className = 'shuffle-card';
        // Alternate between face-up and face-down
        if (i % 2 === 1) {  // Make odd-numbered cards face down
            shuffleCard.classList.add('face-down');
        }
        shuffleCard.setAttribute('data-number', randomNumber);
        shuffleCard.innerHTML = `<span>${randomRecipe || 'Shuffling...'}</span>`;
        shuffleContainer.appendChild(shuffleCard);
    }
}

function flipCard() {
    if (!mealTypeDropdown.value) {
        alert('Please select a meal type first!');
        return;
    }

    if (!isFlipped) {
        console.log('Card clicked'); // Debug log
        card.style.opacity = '0';
        createShuffleCards();
        
        const shuffleCards = document.querySelectorAll('.shuffle-card');
        let delay = 0;
        
        shuffleCards.forEach((card) => {
            setTimeout(() => {
                card.classList.add('animate');
                setTimeout(() => card.classList.remove('animate'), 1200);
            }, delay);
            delay += 400;
        });

        setTimeout(() => {
            const recipe = getRandomRecipe();
            showRecipe(recipe);
            card.classList.add('show');
            card.classList.add('flipped');
            isFlipped = true;
            shuffleButton.style.display = 'inline-block';
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, delay + 1200);
    }
}

function shuffleNewRecipe() {
    card.classList.remove('flipped');
    card.classList.remove('show');
    isFlipped = false;
    
    setTimeout(() => {
        createShuffleCards();
        const shuffleCards = document.querySelectorAll('.shuffle-card');
        let delay = 0;
        
        shuffleCards.forEach((card) => {
            setTimeout(() => {
                card.classList.add('animate');
                setTimeout(() => card.classList.remove('animate'), 800);
            }, delay);
            delay += 200;
        });

        setTimeout(() => {
            const recipe = getRandomRecipe();
            showRecipe(recipe);
            card.classList.add('show');
            card.classList.add('flipped');
            isFlipped = true;
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, delay + 800);
    }, 300);
}

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * currentRecipes.length);
    return currentRecipes[randomIndex];
}

function showRecipe(recipe) {
    if (!recipe) {
        cardBack.innerHTML = `
            <div>
                <h2>No matching recipes found!</h2>
                <p>Try a different meal type or dietary preference.</p>
            </div>
        `;
        return;
    }

    // Make sure the card is visible
    card.style.opacity = '1';
    
    cardBack.innerHTML = `
        <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">${recipe}</h2>
            <div class="recipe-links">
                <a href="recipe.html?recipe=${encodeURIComponent(recipe)}" class="recipe-link">View Recipe</a>
            </div>
        </div>
    `;
}

// Keep your existing filterRecipes function
function filterRecipes(recipes, dietaryPreference) {
    switch(dietaryPreference) {
        case 'vegetarian':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon');
            });
        case 'vegan':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon') &&
                       !name.includes('cheese') &&
                       !name.includes('egg') &&
                       !name.includes('cream');
            });
        case 'kosher':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pork') &&
                       !name.includes('shellfish') &&
                       !name.includes('shrimp') &&
                       !name.includes('crab') &&
                       !name.includes('calamari') &&
                       !name.includes('bacon');
            });
        case 'halal':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pork') &&
                       !name.includes('bacon') &&
                       !name.includes('ham') &&
                       !name.includes('alcohol') &&
                       !name.includes('wine') &&
                       !name.includes('beer');
            });
        case 'glutenFree':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pasta') &&
                       !name.includes('bread') &&
                       !name.includes('pizza') &&
                       !name.includes('lasagna') &&
                       !name.includes('noodles') &&
                       !name.includes('spaghetti') &&
                       !name.includes('penne') &&
                       !name.includes('fettuccine') &&
                       !name.includes('breadcrumbs') &&
                       !name.includes('flour') &&
                       !name.includes('wheat');
            });
        case 'dairyFree':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('cheese') &&
                       !name.includes('cream') &&
                       !name.includes('butter') &&
                       !name.includes('milk') &&
                       !name.includes('alfredo') &&
                       !name.includes('carbonara') &&
                       !name.includes('mac and cheese') &&
                       !name.includes('mozzarella') &&
                       !name.includes('parmesan') &&
                       !name.includes('risotto') &&
                       !name.includes('brie') &&
                       !name.includes('gratin');
            });
        default:
            return recipes;
    }
} 