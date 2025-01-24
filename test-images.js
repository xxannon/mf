const dishMappings = {
    'French Fries': 'french fries',
    'Steamed Rice': 'plain rice',
    'Roasted Vegetables': 'roasted vegetable side',
    'Mashed Potatoes': 'mashed potatoes',
    'Mac and Cheese': 'macaroni cheese',
    'Grilled Asparagus': 'asparagus side',
    'Sweet Potato Fries': 'sweet potato fries',
    'Quinoa Pilaf': 'quinoa side dish',
    'Garlic Green Beans': 'green beans',
    'Coleslaw': 'homemade coleslaw',
    'Rice Pilaf': 'pilaf',
    'Roasted Brussels Sprouts': 'brussels sprouts',
    'Potato Salad': 'potato salad',
    'Corn on the Cob': 'corn cob',
    'Sautéed Mushrooms': 'sauteed mushrooms side',
    'Glazed Carrots': 'glazed carrots',
    'Creamed Spinach': 'creamed spinach',
    'Scalloped Potatoes': 'scalloped potato',
    'Baked Sweet Potato': 'baked sweet potato',
    'Cauliflower Gratin': 'cauliflower gratin',
    'Roasted Broccoli': 'roasted broccoli',
    'Sautéed Spinach': 'sauteed spinach',
    'Grilled Zucchini': 'grilled zucchini',
    'Roasted Cauliflower': 'roasted cauliflower',
    'Wild Rice': 'wild rice pilaf',
    'Garlic Bread': 'garlic bread',
    'Caesar Salad': 'caesar salad',
    'Mixed Green Salad': 'garden salad',
    'Roasted Potatoes': 'roasted potato',
    'Steamed Broccoli': 'steamed broccoli'
};

async function testAllImages() {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = 'black';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    container.style.gap = '20px';
    document.body.appendChild(container);

    for (const [dishName, searchTerm] of Object.entries(dishMappings)) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`);
            const data = await response.json();
            const imageUrl = data.meals && data.meals[0] ? data.meals[0].strMealThumb : null;

            const dishDiv = document.createElement('div');
            dishDiv.style.margin = '10px';
            dishDiv.style.padding = '10px';
            dishDiv.style.backgroundColor = 'white';
            dishDiv.style.borderRadius = '10px';
            dishDiv.innerHTML = `
                <h3 style="color: black;">${dishName}</h3>
                <p style="color: gray;">Search term: ${searchTerm}</p>
                ${imageUrl ? 
                    `<img src="${imageUrl}" alt="${dishName}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px;">` : 
                    '<p style="color: red;">No image found</p>'}
            `;
            container.appendChild(dishDiv);
        } catch (error) {
            console.error(`Error testing ${dishName}:`, error);
        }
    }
}

testAllImages(); 