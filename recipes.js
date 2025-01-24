console.log('Recipes database loaded:', Object.keys(recipeDatabase));

const recipeDatabase = {
    'Bruschetta': {
        ingredients: [
            '4 slices Italian bread, ½ inch thick',
            '2 ripe Roma tomatoes, finely diced',
            '3 cloves fresh garlic, minced',
            '4-5 fresh basil leaves, chiffonade',
            '3 tbsp extra virgin olive oil',
            '1 tsp balsamic vinegar',
            'Sea salt and black pepper to taste'
        ],
        instructions: [
            'Preheat your oven broiler to high',
            'Slice bread and brush both sides with 1 tbsp olive oil',
            'Toast bread under broiler for 1-2 minutes per side until golden brown',
            'Rub one side of each toast with a whole garlic clove',
            'Mix diced tomatoes, minced garlic, basil, remaining olive oil, and balsamic in a bowl',
            'Season the tomato mixture with salt and pepper',
            'Top each bread slice with tomato mixture',
            'Drizzle with extra olive oil if desired and serve immediately'
        ],
        prepTime: '15 minutes',
        cookTime: '5 minutes',
        difficulty: 'Easy',
        servings: '4',
        tips: 'For best results, use room temperature tomatoes and day-old bread'
    },

    'Chicken Tikka Masala': {
        ingredients: [
            'For the marinade:',
            '2 lbs chicken breast, cut into chunks',
            '1 cup plain yogurt',
            '2 tbsp lemon juice',
            '2 tsp turmeric powder',
            '2 tsp garam masala',
            '2 tsp ground cumin',
            '2 tsp red chili powder',
            '1 tbsp grated ginger',
            '4 cloves garlic, minced',
            
            'For the sauce:',
            '3 tbsp vegetable oil',
            '1 large onion, finely chopped',
            '2 tbsp butter',
            '2 tsp garam masala',
            '2 tsp ground cumin',
            '1 tsp ground coriander',
            '400g can crushed tomatoes',
            '1 cup heavy cream',
            'Salt to taste',
            'Fresh cilantro for garnish'
        ],
        instructions: [
            'Marinate the chicken:',
            'Combine all marinade ingredients in a bowl',
            'Add chicken and coat well',
            'Cover and refrigerate for 4-6 hours or overnight',
            
            'Cook the chicken:',
            'Preheat oven to 400°F (200°C)',
            'Place marinated chicken on baking sheet',
            'Bake for 15-20 minutes until slightly charred',
            
            'Make the sauce:',
            'Heat oil in large pan over medium heat',
            'Sauté onions until golden brown (about 8-10 minutes)',
            'Add butter and all ground spices, cook for 1-2 minutes',
            'Add crushed tomatoes and simmer for 15-20 minutes',
            'Stir in cream and cooked chicken',
            'Simmer for additional 5-10 minutes',
            'Garnish with cilantro and serve with naan bread'
        ],
        prepTime: '30 minutes',
        cookTime: '45 minutes',
        marination: '4-6 hours',
        difficulty: 'Medium',
        servings: '6',
        tips: 'For extra flavor, char the chicken under the broiler for the last 2-3 minutes'
    },

    // APPETIZERS
    'Spring Rolls': {
        ingredients: [
            '12 spring roll wrappers',
            '2 cups shredded carrots',
            '2 cups shredded cabbage',
            '1 cup bean sprouts',
            '2 green onions, finely chopped',
            '2 cloves garlic, minced',
            '1 tbsp soy sauce',
            '1 tbsp sesame oil',
            'Oil for frying',
            
            'For dipping sauce:',
            '1/4 cup sweet chili sauce',
            '2 tbsp soy sauce',
            '1 tbsp rice vinegar'
        ],
        instructions: [
            'Sauté garlic in sesame oil until fragrant',
            'Add vegetables and soy sauce, cook until softened',
            'Let filling cool completely',
            'Place filling in center of each wrapper',
            'Fold bottom corner over filling, then fold in sides',
            'Roll tightly, sealing edges with water',
            'Heat oil to 350°F (175°C)',
            'Fry rolls until golden brown, about 2-3 minutes per side',
            'Mix dipping sauce ingredients in a small bowl',
            'Serve hot with dipping sauce'
        ],
        prepTime: '30 minutes',
        cookTime: '15 minutes',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Keep wrappers covered with damp cloth while working to prevent drying'
    },

    // ENTREES
    'Beef Wellington': {
        ingredients: [
            '2 lbs beef tenderloin',
            '2 tbsp Dijon mustard',
            '1 lb mushrooms, finely chopped',
            '4 slices prosciutto',
            '1 package puff pastry, thawed',
            '2 egg yolks, beaten',
            '2 shallots, minced',
            '4 cloves garlic, minced',
            'Salt and pepper to taste',
            'Fresh thyme sprigs'
        ],
        instructions: [
            'Season beef with salt and pepper',
            'Sear beef on all sides until browned, then chill',
            'Sauté mushrooms, shallots, and garlic until moisture evaporates',
            'Brush beef with mustard',
            'Layer prosciutto, then mushroom mixture',
            'Wrap in puff pastry, seal with egg wash',
            'Score top in diamond pattern',
            'Brush with remaining egg wash',
            'Bake at 400°F for 40-45 minutes for medium-rare',
            'Rest for 10 minutes before slicing'
        ],
        prepTime: '45 minutes',
        cookTime: '45 minutes',
        difficulty: 'Hard',
        servings: '6-8',
        tips: 'Ensure mushroom mixture is completely cool before assembly'
    },

    // SIDES
    'Roasted Brussels Sprouts': {
        ingredients: [
            '1 lb Brussels sprouts, trimmed and halved',
            '3 tbsp olive oil',
            '3 cloves garlic, minced',
            '2 tbsp balsamic vinegar',
            'Salt and pepper to taste',
            'Optional: 2 tbsp honey',
            'Optional: crispy bacon bits'
        ],
        instructions: [
            'Preheat oven to 400°F (200°C)',
            'Toss sprouts with oil, garlic, salt, and pepper',
            'Arrange on baking sheet, cut side down',
            'Roast for 20-25 minutes until crispy outside and tender inside',
            'Drizzle with balsamic vinegar',
            'Optional: add honey and bacon bits',
            'Serve immediately while hot and crispy'
        ],
        prepTime: '10 minutes',
        cookTime: '25 minutes',
        difficulty: 'Easy',
        servings: '4',
        tips: 'Don't overcrowd the pan for maximum crispiness'
    },

    'Buffalo Wings': {
        ingredients: [
            '2 lbs chicken wings',
            '1/2 cup hot sauce (like Frank's RedHot)',
            '1/4 cup butter, melted',
            '1 tbsp white vinegar',
            '1/4 tsp Worcestershire sauce',
            '1/4 tsp cayenne pepper',
            '1/4 tsp garlic powder',
            'Salt and pepper to taste',
            
            'For the blue cheese dip:',
            '1/2 cup blue cheese crumbles',
            '1/4 cup sour cream',
            '1/4 cup mayonnaise',
            '1 tbsp buttermilk',
            'Celery sticks for serving'
        ],
        instructions: [
            'Pat wings dry with paper towels',
            'Season wings with salt, pepper, and garlic powder',
            'Arrange on a wire rack over a baking sheet',
            'Bake at 400°F for 45-50 minutes until crispy',
            'Mix hot sauce, melted butter, vinegar, and Worcestershire',
            'Toss baked wings in sauce mixture',
            'For the dip, mix blue cheese, sour cream, mayo, and buttermilk',
            'Serve wings hot with dip and celery'
        ],
        prepTime: '15 minutes',
        cookTime: '50 minutes',
        difficulty: 'Medium',
        servings: '4-6',
        tips: 'For extra crispy wings, pat them very dry and refrigerate uncovered for 2 hours before baking'
    },

    'Pad Thai': {
        ingredients: [
            '8 oz rice noodles',
            '1/2 lb shrimp, peeled and deveined',
            '2 eggs, beaten',
            '1 cup bean sprouts',
            '1/4 cup chopped peanuts',
            '2 green onions, chopped',
            '2 cloves garlic, minced',
            'Lime wedges for serving',
            
            'For the sauce:',
            '3 tbsp fish sauce',
            '3 tbsp palm sugar or brown sugar',
            '2 tbsp tamarind paste',
            '1 tbsp rice vinegar',
            '1 tsp chili flakes'
        ],
        instructions: [
            'Soak rice noodles in warm water for 30 minutes',
            'Mix sauce ingredients in a small bowl',
            'Heat oil in a wok over high heat',
            'Cook shrimp until pink, remove from wok',
            'Add garlic, stir-fry until fragrant',
            'Push ingredients aside, add eggs and scramble',
            'Add drained noodles and sauce',
            'Stir-fry until noodles are tender',
            'Add bean sprouts and green onions',
            'Top with peanuts and serve with lime wedges'
        ],
        prepTime: '40 minutes',
        cookTime: '15 minutes',
        difficulty: 'Medium',
        servings: '4',
        tips: 'Don't skip the tamarind paste - it's key to authentic Pad Thai flavor'
    },

    'Mashed Potatoes': {
        ingredients: [
            '3 lbs Yukon Gold potatoes',
            '1 cup whole milk, warmed',
            '1/2 cup butter',
            '4 cloves roasted garlic (optional)',
            '1/2 cup sour cream',
            'Salt and white pepper to taste',
            'Chives for garnish'
        ],
        instructions: [
            'Peel and cut potatoes into 1-inch chunks',
            'Place in cold water, bring to boil',
            'Cook until very tender (20-25 minutes)',
            'Drain well and return to pot',
            'Heat pot gently to remove excess moisture',
            'Add butter and mash roughly',
            'Gradually add warm milk while mashing',
            'Stir in sour cream and roasted garlic',
            'Season with salt and white pepper',
            'Garnish with chives before serving'
        ],
        prepTime: '15 minutes',
        cookTime: '25 minutes',
        difficulty: 'Easy',
        servings: '6-8',
        tips: 'For extra smooth potatoes, pass them through a ricer before adding butter and milk'
    },

    'Loaded Nachos': {
        ingredients: [
            '1 large bag tortilla chips',
            '2 cups shredded Mexican cheese blend',
            '1 can black beans, drained and rinsed',
            '1 lb ground beef, seasoned with taco seasoning',
            '1 cup pico de gallo',
            '1 cup guacamole',
            '1/2 cup sour cream',
            '1/4 cup sliced jalapeños',
            '1/4 cup sliced black olives',
            'Chopped cilantro for garnish',
            'Lime wedges for serving'
        ],
        instructions: [
            'Preheat oven to 375°F',
            'Brown ground beef with taco seasoning',
            'Layer chips on a large baking sheet',
            'Top with seasoned beef and black beans',
            'Cover generously with shredded cheese',
            'Bake for 10-15 minutes until cheese melts',
            'Top with pico de gallo, guacamole, sour cream',
            'Add jalapeños, olives, and cilantro',
            'Serve immediately with lime wedges'
        ],
        prepTime: '20 minutes',
        cookTime: '15 minutes',
        difficulty: 'Easy',
        servings: '6-8',
        tips: 'Layer ingredients evenly for best results'
    },

    'Chicken Marsala': {
        ingredients: [
            '4 chicken breasts, pounded thin',
            '1 cup flour for dredging',
            '1 cup Marsala wine',
            '1 cup chicken broth',
            '8 oz mushrooms, sliced',
            '4 cloves garlic, minced',
            '2 shallots, minced',
            '4 tbsp butter',
            '3 tbsp olive oil',
            'Fresh thyme sprigs',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Season chicken with salt and pepper, dredge in flour',
            'Heat oil in large skillet over medium-high heat',
            'Cook chicken until golden, about 5 minutes per side',
            'Remove chicken, add mushrooms to pan',
            'Add shallots and garlic, cook until fragrant',
            'Pour in Marsala wine, scrape bottom of pan',
            'Add chicken broth and thyme, simmer until reduced',
            'Stir in butter to finish sauce',
            'Return chicken to pan to heat through',
            'Serve with sauce spooned over top'
        ],
        prepTime: '20 minutes',
        cookTime: '30 minutes',
        difficulty: 'Medium',
        servings: '4',
        tips: 'Use dry Marsala wine for best results'
    },

    'Mac and Cheese': {
        ingredients: [
            '1 lb elbow macaroni',
            '4 cups sharp cheddar, grated',
            '2 cups gruyere cheese, grated',
            '4 cups whole milk',
            '1/2 cup butter',
            '1/2 cup flour',
            '1 tsp mustard powder',
            '1/4 tsp cayenne pepper',
            '1/4 tsp nutmeg',
            'Salt and pepper to taste',
            
            'For topping:',
            '1 cup panko breadcrumbs',
            '2 tbsp melted butter'
        ],
        instructions: [
            'Cook macaroni until al dente',
            'Make roux with butter and flour',
            'Gradually whisk in warm milk',
            'Add seasonings and simmer until thickened',
            'Remove from heat, stir in cheeses',
            'Combine with cooked pasta',
            'Transfer to baking dish',
            'Top with buttered breadcrumbs',
            'Bake at 375°F for 25-30 minutes until bubbly',
            'Let rest 10 minutes before serving'
        ],
        prepTime: '25 minutes',
        cookTime: '30 minutes',
        difficulty: 'Medium',
        servings: '8',
        tips: 'Grate cheese fresh for best melting'
    },

    'Tomato Soup': {
        ingredients: [
            '2 lbs ripe tomatoes, chopped',
            '1 large onion, diced',
            '4 cloves garlic, minced',
            '2 tbsp olive oil',
            '4 cups vegetable broth',
            '1/2 cup heavy cream',
            '2 tbsp tomato paste',
            '1 tsp sugar',
            '4 fresh basil leaves',
            'Salt and pepper to taste',
            'Optional: grilled cheese croutons'
        ],
        instructions: [
            'Heat oil in large pot over medium heat',
            'Sauté onions until translucent (5-7 minutes)',
            'Add garlic, cook for 1 minute',
            'Add chopped tomatoes and tomato paste',
            'Pour in vegetable broth and sugar',
            'Simmer for 30 minutes',
            'Blend soup until smooth',
            'Stir in heavy cream',
            'Season with salt and pepper',
            'Garnish with fresh basil and croutons'
        ],
        prepTime: '15 minutes',
        cookTime: '40 minutes',
        difficulty: 'Easy',
        servings: '6',
        tips: 'Use ripe summer tomatoes for best flavor'
    },

    'Greek Salad': {
        ingredients: [
            '4 large tomatoes, chunked',
            '1 English cucumber, chunked',
            '1 red onion, thinly sliced',
            '1 green bell pepper, chunked',
            '1 cup kalamata olives',
            '8 oz feta cheese, cubed',
            
            'For the dressing:',
            '1/4 cup extra virgin olive oil',
            '2 tbsp red wine vinegar',
            '1 tsp dried oregano',
            '1 clove garlic, minced',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Combine vegetables in large bowl',
            'Whisk together dressing ingredients',
            'Pour dressing over vegetables',
            'Gently toss to combine',
            'Top with feta cheese',
            'Sprinkle with extra oregano',
            'Serve immediately or chill',
            'Toss again before serving'
        ],
        prepTime: '20 minutes',
        cookTime: '0 minutes',
        difficulty: 'Easy',
        servings: '6',
        tips: 'Don't cut vegetables too small - chunky is traditional'
    },

    'Spinach Dip': {
        ingredients: [
            '10 oz frozen spinach, thawed and drained',
            '8 oz cream cheese, softened',
            '1/4 cup mayonnaise',
            '1/4 cup sour cream',
            '1 cup mozzarella cheese, shredded',
            '1/4 cup parmesan cheese, grated',
            '3 cloves garlic, minced',
            '1/4 tsp red pepper flakes',
            'Salt and pepper to taste',
            'Bread bowl or crackers for serving'
        ],
        instructions: [
            'Preheat oven to 350°F',
            'Squeeze all water from thawed spinach',
            'Beat cream cheese until smooth',
            'Mix in mayonnaise and sour cream',
            'Stir in both cheeses and garlic',
            'Add spinach and seasonings',
            'Transfer to baking dish',
            'Bake for 25-30 minutes until bubbly',
            'Let rest 5 minutes before serving',
            'Serve with bread or crackers'
        ],
        prepTime: '15 minutes',
        cookTime: '30 minutes',
        difficulty: 'Easy',
        servings: '8',
        tips: 'Really squeeze out all the water from the spinach for best results'
    },

    'Mozzarella Sticks': {
        ingredients: [
            '1 lb mozzarella cheese, cut into 3-inch sticks',
            '2 cups Italian breadcrumbs',
            '1/2 cup all-purpose flour',
            '3 large eggs, beaten',
            '1 tsp Italian seasoning',
            '1/2 tsp garlic powder',
            'Oil for frying',
            
            'For marinara sauce:',
            '1 can crushed tomatoes',
            '2 cloves garlic, minced',
            '1 tbsp olive oil',
            '1 tsp dried basil',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Freeze mozzarella sticks for 2 hours',
            'Set up breading station: flour, eggs, and seasoned breadcrumbs',
            'Coat each stick in flour, then egg, then breadcrumbs',
            'Double coat with egg and breadcrumbs again',
            'Freeze for another hour until solid',
            'Heat oil to 350°F',
            'Fry in batches until golden brown (1-2 minutes)',
            'Drain on paper towels',
            'For sauce, sauté garlic in oil, add tomatoes and seasonings',
            'Serve hot with marinara sauce'
        ],
        prepTime: '20 minutes',
        cookTime: '10 minutes',
        freezeTime: '3 hours',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Double breading and freezing is key to prevent cheese from leaking'
    },

    'Garlic Bread': {
        ingredients: [
            '1 French baguette',
            '1/2 cup butter, softened',
            '4 cloves garlic, minced',
            '2 tbsp fresh parsley, chopped',
            '1/4 cup parmesan cheese, grated',
            '1/4 tsp Italian seasoning',
            'Pinch of salt',
            'Optional: mozzarella cheese for topping'
        ],
        instructions: [
            'Preheat oven to 375°F',
            'Cut baguette in half lengthwise',
            'Mix softened butter with garlic, parsley, and seasonings',
            'Spread butter mixture evenly on bread',
            'Sprinkle with parmesan cheese',
            'Optional: add mozzarella for cheese bread',
            'Bake for 12-15 minutes until edges are crispy',
            'Broil for 1-2 minutes if desired',
            'Cut into slices and serve hot'
        ],
        prepTime: '10 minutes',
        cookTime: '15 minutes',
        difficulty: 'Easy',
        servings: '8',
        tips: 'Let butter soften naturally for best spreading consistency'
    },

    'Potato Skins': {
        ingredients: [
            '6 medium russet potatoes',
            '1/4 cup olive oil',
            '1 cup cheddar cheese, shredded',
            '6 slices bacon, cooked and crumbled',
            '2 green onions, sliced',
            'Sour cream for serving',
            'Salt and pepper to taste',
            'Optional: jalapeños'
        ],
        instructions: [
            'Bake potatoes at 400°F until tender (about 1 hour)',
            'Let cool slightly, cut in half lengthwise',
            'Scoop out potato leaving 1/4 inch shell',
            'Brush both sides with oil, season with salt',
            'Bake skins cut side down until crispy (15 minutes)',
            'Flip and fill with cheese and bacon',
            'Bake until cheese melts (5 minutes)',
            'Top with green onions',
            'Serve with sour cream'
        ],
        prepTime: '15 minutes',
        cookTime: '1 hour 20 minutes',
        difficulty: 'Medium',
        servings: '12',
        tips: 'Save the scooped potato for mashed potatoes'
    },

    'Hummus': {
        ingredients: [
            '2 (15 oz) cans chickpeas, drained and rinsed',
            '1/3 cup tahini',
            '1/4 cup fresh lemon juice',
            '4 cloves garlic, minced',
            '2 tbsp olive oil, plus more for serving',
            '1 tsp ground cumin',
            '1/2 tsp salt',
            'Cold water as needed',
            
            'For garnish:',
            'Paprika',
            'Chopped parsley',
            'Extra olive oil',
            'Pine nuts (optional)'
        ],
        instructions: [
            'Reserve a few chickpeas for garnish',
            'Blend tahini and lemon juice for 1 minute until creamy',
            'Add garlic, olive oil, cumin, and salt',
            'Add half the chickpeas, blend until smooth',
            'Add remaining chickpeas, blend again',
            'Add cold water as needed for desired consistency',
            'Taste and adjust seasonings',
            'Transfer to serving bowl',
            'Create a well in center, add olive oil',
            'Garnish with reserved chickpeas, paprika, parsley'
        ],
        prepTime: '15 minutes',
        cookTime: '0 minutes',
        difficulty: 'Easy',
        servings: '8',
        tips: 'For extra smooth hummus, remove chickpea skins before blending'
    },

    'Guacamole': {
        ingredients: [
            '3 ripe avocados',
            '1 lime, juiced',
            '1 small red onion, finely diced',
            '2 Roma tomatoes, diced',
            '1/3 cup fresh cilantro, chopped',
            '1 jalapeño pepper, seeded and minced',
            '2 garlic cloves, minced',
            '1/2 tsp salt',
            '1/2 tsp ground cumin',
            'Dash of cayenne pepper'
        ],
        instructions: [
            'Halve and pit avocados',
            'Scoop into bowl and mash roughly',
            'Add lime juice immediately to prevent browning',
            'Fold in onion, tomatoes, cilantro, and jalapeño',
            'Add garlic and seasonings',
            'Taste and adjust seasonings',
            'Cover with plastic wrap directly on surface',
            'Refrigerate for 1 hour to blend flavors',
            'Serve with tortilla chips'
        ],
        prepTime: '15 minutes',
        chillTime: '1 hour',
        difficulty: 'Easy',
        servings: '6',
        tips: 'Leave avocado pit in prepared guacamole to help prevent browning'
    },

    'Calamari': {
        ingredients: [
            '1 lb clean squid, sliced into rings',
            '2 cups all-purpose flour',
            '1 tbsp paprika',
            '1 tsp black pepper',
            '1 tsp salt',
            '2 eggs, beaten',
            'Oil for frying',
            
            'For marinara sauce:',
            '1 cup marinara sauce',
            '1 lemon, cut into wedges',
            'Fresh parsley for garnish'
        ],
        instructions: [
            'Pat squid rings dry with paper towels',
            'Mix flour with paprika, salt, and pepper',
            'Dip rings in egg, then flour mixture',
            'Heat oil to 350°F',
            'Fry in batches until golden (2-3 minutes)',
            'Drain on paper towels',
            'Season immediately with salt',
            'Serve hot with marinara sauce',
            'Garnish with parsley and lemon wedges'
        ],
        prepTime: '20 minutes',
        cookTime: '15 minutes',
        difficulty: 'Medium',
        servings: '4',
        tips: 'Don't overcrowd the pan when frying to maintain oil temperature'
    },

    'Stuffed Mushrooms': {
        ingredients: [
            '24 large button mushrooms',
            '8 oz cream cheese, softened',
            '1/4 cup parmesan cheese, grated',
            '3 cloves garlic, minced',
            '1/4 cup breadcrumbs',
            '2 tbsp fresh parsley, chopped',
            '2 tbsp olive oil',
            '1/4 cup green onions, finely chopped',
            'Salt and pepper to taste',
            'Extra parmesan for topping'
        ],
        instructions: [
            'Preheat oven to 400°F',
            'Remove stems from mushrooms and chop finely',
            'Clean mushroom caps with damp paper towel',
            'Sauté chopped stems and garlic in olive oil',
            'Mix with cream cheese, parmesan, and breadcrumbs',
            'Add parsley and green onions',
            'Fill each mushroom cap with mixture',
            'Top with extra parmesan',
            'Bake for 20 minutes until golden',
            'Serve hot'
        ],
        prepTime: '20 minutes',
        cookTime: '20 minutes',
        difficulty: 'Medium',
        servings: '8',
        tips: 'Don't wash mushrooms - clean with damp cloth to prevent sogginess'
    },

    'Deviled Eggs': {
        ingredients: [
            '12 large eggs',
            '1/2 cup mayonnaise',
            '2 tsp Dijon mustard',
            '1 tsp white vinegar',
            '1/4 tsp paprika, plus more for garnish',
            '2 tbsp fresh chives, finely chopped',
            'Salt and pepper to taste',
            'Optional: crispy bacon bits',
            'Optional: pickle relish'
        ],
        instructions: [
            'Place eggs in cold water, bring to boil',
            'Remove from heat, cover, let stand 12 minutes',
            'Transfer to ice bath to cool completely',
            'Peel eggs and cut in half lengthwise',
            'Remove yolks to mixing bowl',
            'Mash yolks with mayo, mustard, and vinegar',
            'Season with salt, pepper, and paprika',
            'Pipe or spoon mixture into egg whites',
            'Garnish with paprika and chives',
            'Chill until serving'
        ],
        prepTime: '15 minutes',
        cookTime: '12 minutes',
        chillTime: '30 minutes',
        difficulty: 'Easy',
        servings: '24 halves',
        tips: 'Use older eggs for easier peeling'
    },

    'Chicken Satay': {
        ingredients: [
            '2 lbs chicken breast, cut into strips',
            
            'For marinade:',
            '1/2 cup coconut milk',
            '2 tbsp soy sauce',
            '2 tbsp curry powder',
            '2 tbsp brown sugar',
            '2 cloves garlic, minced',
            '1 tbsp ginger, grated',
            
            'For peanut sauce:',
            '1/2 cup creamy peanut butter',
            '1/4 cup coconut milk',
            '2 tbsp lime juice',
            '2 tbsp soy sauce',
            '1 tbsp brown sugar',
            '1 tsp sriracha sauce',
            'Wooden skewers, soaked'
        ],
        instructions: [
            'Mix all marinade ingredients',
            'Add chicken strips and marinate 4-8 hours',
            'Soak wooden skewers in water',
            'Thread chicken onto skewers',
            'Make sauce: blend all sauce ingredients',
            'Grill skewers 4-5 minutes per side',
            'Heat peanut sauce gently',
            'Serve hot with peanut sauce',
            'Garnish with cilantro and lime'
        ],
        prepTime: '20 minutes',
        marination: '4-8 hours',
        cookTime: '10 minutes',
        difficulty: 'Medium',
        servings: '6-8',
        tips: 'Flatten chicken strips for even cooking'
    },

    'Crab Cakes': {
        ingredients: [
            '1 lb lump crab meat',
            '1/3 cup panko breadcrumbs',
            '1/4 cup mayonnaise',
            '1 large egg, beaten',
            '1 tbsp Dijon mustard',
            '1 tbsp Worcestershire sauce',
            '1/4 cup fresh parsley, chopped',
            '1 tsp Old Bay seasoning',
            '1 lemon, juiced',
            'Salt and pepper to taste',
            
            'For remoulade sauce:',
            '1/2 cup mayonnaise',
            '1 tbsp capers, chopped',
            '1 tbsp pickle relish',
            '1 tsp Dijon mustard',
            'Hot sauce to taste'
        ],
        instructions: [
            'Gently pick through crab meat for shells',
            'Mix all ingredients except crab and panko',
            'Fold in crab meat and panko gently',
            'Form into 6-8 patties',
            'Refrigerate for at least 1 hour',
            'Heat oil in skillet over medium heat',
            'Cook cakes 3-4 minutes per side until golden',
            'Mix remoulade sauce ingredients',
            'Serve hot with remoulade and lemon wedges'
        ],
        prepTime: '20 minutes',
        chillTime: '1 hour',
        cookTime: '8 minutes',
        difficulty: 'Medium',
        servings: '6-8',
        tips: 'Don't overmix the crab meat to keep chunks intact'
    },

    'Jalapeño Poppers': {
        ingredients: [
            '12 large jalapeños',
            '8 oz cream cheese, softened',
            '1 cup cheddar cheese, shredded',
            '4 slices bacon, cooked and crumbled',
            '2 green onions, finely chopped',
            '1/2 tsp garlic powder',
            '1/2 tsp onion powder',
            'Salt and pepper to taste',
            
            'For breading:',
            '1 cup flour',
            '2 eggs, beaten',
            '1 cup panko breadcrumbs',
            'Oil for frying'
        ],
        instructions: [
            'Cut jalapeños in half lengthwise, remove seeds',
            'Mix cream cheese, cheddar, bacon, and seasonings',
            'Fill each jalapeño half with cheese mixture',
            'Set up breading station: flour, eggs, panko',
            'Dip each popper in flour, egg, then panko',
            'Heat oil to 350°F',
            'Fry until golden brown, 2-3 minutes',
            'Drain on paper towels',
            'Let cool slightly before serving'
        ],
        prepTime: '30 minutes',
        cookTime: '15 minutes',
        difficulty: 'Medium',
        servings: '24 pieces',
        tips: 'Wear gloves when handling jalapeños'
    },

    'Shrimp Cocktail': {
        ingredients: [
            '2 lbs large shrimp, peeled and deveined',
            '1 lemon, halved',
            '2 bay leaves',
            '1 tbsp peppercorns',
            '2 tsp salt',
            
            'For cocktail sauce:',
            '1 cup ketchup',
            '3 tbsp prepared horseradish',
            '1 tbsp Worcestershire sauce',
            '1 lemon, juiced',
            '1/4 tsp hot sauce',
            'Salt to taste'
        ],
        instructions: [
            'Bring large pot of water to boil',
            'Add lemon, bay leaves, peppercorns, salt',
            'Add shrimp and cook until pink (2-3 minutes)',
            'Immediately transfer to ice bath',
            'Drain and pat dry',
            'Mix all cocktail sauce ingredients',
            'Chill shrimp and sauce for at least 1 hour',
            'Arrange shrimp on platter with sauce',
            'Garnish with lemon wedges and parsley'
        ],
        prepTime: '15 minutes',
        cookTime: '3 minutes',
        chillTime: '1 hour',
        difficulty: 'Easy',
        servings: '8',
        tips: 'Don't overcook the shrimp - they should form a "C" not an "O" shape'
    },

    'Caprese Salad': {
        ingredients: [
            '4 large ripe tomatoes, sliced',
            '1 lb fresh mozzarella, sliced',
            '1 cup fresh basil leaves',
            '1/4 cup extra virgin olive oil',
            '2 tbsp balsamic glaze',
            'Flaky sea salt',
            'Fresh ground black pepper',
            'Optional: balsamic reduction'
        ],
        instructions: [
            'Slice tomatoes and mozzarella evenly',
            'Arrange alternating slices on platter',
            'Tuck fresh basil leaves between slices',
            'Drizzle with olive oil',
            'Drizzle with balsamic glaze',
            'Season with salt and pepper',
            'Serve immediately at room temperature'
        ],
        prepTime: '10 minutes',
        cookTime: '0 minutes',
        difficulty: 'Easy',
        servings: '6',
        tips: 'Use room temperature tomatoes and cheese for best flavor'
    },

    'Onion Rings': {
        ingredients: [
            '2 large sweet onions',
            '2 cups buttermilk',
            '2 cups all-purpose flour',
            '1 tsp paprika',
            '1 tsp garlic powder',
            '1 tsp salt',
            '1/2 tsp black pepper',
            'Oil for frying',
            'Optional: ranch dressing for dipping'
        ],
        instructions: [
            'Slice onions into 1/2 inch rings',
            'Separate rings and soak in buttermilk (30 mins)',
            'Mix flour with seasonings',
            'Heat oil to 375°F',
            'Dredge rings in seasoned flour',
            'Fry until golden brown (2-3 minutes)',
            'Drain on paper towels',
            'Season with salt while hot',
            'Serve immediately'
        ],
        prepTime: '15 minutes',
        soakTime: '30 minutes',
        cookTime: '20 minutes',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Double dip in buttermilk and flour for extra crispy rings'
    },

    'Bacon Wrapped Dates': {
        ingredients: [
            '24 Medjool dates',
            '12 slices bacon, cut in half',
            '4 oz blue cheese or goat cheese',
            '1/4 cup honey',
            '1/4 tsp red pepper flakes',
            'Toothpicks for securing'
        ],
        instructions: [
            'Preheat oven to 400°F',
            'Remove pits from dates',
            'Stuff each date with cheese',
            'Wrap each date with half slice bacon',
            'Secure with toothpick',
            'Place on baking sheet',
            'Bake for 20-25 minutes until bacon is crispy',
            'Mix honey with red pepper flakes',
            'Drizzle with spicy honey',
            'Serve warm'
        ],
        prepTime: '20 minutes',
        cookTime: '25 minutes',
        difficulty: 'Easy',
        servings: '24 pieces',
        tips: 'Use room temperature cheese for easier stuffing'
    },

    'Coconut Shrimp': {
        ingredients: [
            '1 lb large shrimp, peeled and deveined',
            '1 cup all-purpose flour',
            '1 cup panko breadcrumbs',
            '1 cup shredded coconut',
            '2 eggs, beaten',
            '1/2 tsp salt',
            '1/4 tsp black pepper',
            'Oil for frying',
            
            'For sweet chili sauce:',
            '1/2 cup sweet chili sauce',
            '2 tbsp lime juice',
            '1 tbsp honey'
        ],
        instructions: [
            'Pat shrimp dry with paper towels',
            'Set up breading station: flour, eggs, coconut-panko mix',
            'Season flour with salt and pepper',
            'Mix panko and coconut in separate bowl',
            'Dredge shrimp in flour, then egg, then coconut mix',
            'Heat oil to 350°F',
            'Fry until golden brown (2-3 minutes per side)',
            'Drain on paper towels',
            'Mix sauce ingredients',
            'Serve hot with sweet chili sauce'
        ],
        prepTime: '20 minutes',
        cookTime: '15 minutes',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Keep coconut-panko mixture chilled for better adhesion'
    },

    'Stuffed Peppers': {
        ingredients: [
            '6 large bell peppers',
            '1 lb ground beef',
            '1 cup cooked rice',
            '1 onion, diced',
            '2 cloves garlic, minced',
            '1 can diced tomatoes',
            '1 cup shredded cheddar cheese',
            '2 tbsp tomato paste',
            '1 tsp Italian seasoning',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Cut tops off peppers, remove seeds',
            'Blanch peppers in boiling water for 5 minutes',
            'Brown beef with onions and garlic',
            'Add rice, tomatoes, seasonings',
            'Fill peppers with mixture',
            'Top with cheese',
            'Bake at 350°F for 30-35 minutes',
            'Let rest 5 minutes before serving'
        ],
        prepTime: '25 minutes',
        cookTime: '35 minutes',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Use different colored peppers for presentation'
    },

    'Baked Brie': {
        ingredients: [
            '1 wheel of brie (8-10 oz)',
            '1 sheet puff pastry, thawed',
            '1/4 cup honey',
            '1/4 cup chopped nuts',
            '1/4 cup dried cranberries',
            '1 egg, beaten (for egg wash)',
            'Crackers and apple slices for serving'
        ],
        instructions: [
            'Preheat oven to 400°F',
            'Roll out puff pastry',
            'Place brie in center',
            'Top with honey, nuts, and cranberries',
            'Wrap pastry around brie, seal with egg wash',
            'Brush outside with egg wash',
            'Bake 20-25 minutes until golden',
            'Let rest 5-10 minutes before serving'
        ],
        prepTime: '15 minutes',
        cookTime: '25 minutes',
        difficulty: 'Easy',
        servings: '8',
        tips: 'Score decorative pattern on pastry before baking'
    },

    'Chicken Wings': {
        ingredients: [
            '2 lbs chicken wings, split at joints',
            '2 tbsp vegetable oil',
            '1 tsp garlic powder',
            '1 tsp onion powder',
            '1 tsp paprika',
            'Salt and pepper to taste',
            
            'For sauce options:',
            'Classic Buffalo: 1/2 cup hot sauce, 1/4 cup butter',
            'BBQ: 1 cup BBQ sauce',
            'Garlic Parmesan: 4 tbsp butter, 4 cloves garlic, 1/2 cup parmesan',
            'Honey Sriracha: 1/4 cup honey, 1/4 cup sriracha'
        ],
        instructions: [
            'Preheat oven to 400°F',
            'Pat wings dry thoroughly',
            'Toss with oil and seasonings',
            'Arrange on wire rack over baking sheet',
            'Bake for 45-50 minutes until crispy',
            'Prepare chosen sauce while wings cook',
            'Toss hot wings in sauce',
            'Serve immediately',
            'Optional: broil 2-3 minutes for extra crispiness'
        ],
        prepTime: '10 minutes',
        cookTime: '50 minutes',
        difficulty: 'Easy',
        servings: '4-6',
        tips: 'For extra crispy wings, refrigerate uncovered overnight'
    },

    'Edamame': {
        ingredients: [
            '1 lb frozen edamame in pods',
            '2 tbsp sea salt',
            '4 cups water',
            
            'Optional seasonings:',
            'Garlic powder',
            'Sesame oil',
            'Red pepper flakes',
            'Togarashi seasoning'
        ],
        instructions: [
            'Bring water to boil in large pot',
            'Add 1 tbsp salt to water',
            'Add frozen edamame',
            'Cook for 5 minutes until tender',
            'Drain well',
            'Toss with remaining salt',
            'Add optional seasonings if desired',
            'Serve hot or at room temperature'
        ],
        prepTime: '5 minutes',
        cookTime: '5 minutes',
        difficulty: 'Easy',
        servings: '4',
        tips: 'Don't overcook - they should still have a slight crunch'
    },

    'Fruit Salsa': {
        ingredients: [
            '2 kiwis, peeled and diced',
            '2 apples, peeled and diced',
            '1 lb strawberries, diced',
            '2 mangos, peeled and diced',
            '1/4 cup honey',
            '2 tbsp lime juice',
            'Mint leaves for garnish',
            
            'For cinnamon chips:',
            '6 flour tortillas',
            '2 tbsp butter, melted',
            '1/4 cup sugar',
            '1 tsp cinnamon'
        ],
        instructions: [
            'Combine all diced fruit in bowl',
            'Add honey and lime juice, mix gently',
            'Refrigerate for at least 30 minutes',
            
            'For chips:',
            'Cut tortillas into triangles',
            'Brush with melted butter',
            'Mix sugar and cinnamon, sprinkle over',
            'Bake at 350°F for 10-12 minutes until crispy',
            'Serve salsa chilled with chips'
        ],
        prepTime: '20 minutes',
        cookTime: '12 minutes',
        chillTime: '30 minutes',
        difficulty: 'Easy',
        servings: '8',
        tips: 'Cut fruit in similar sizes for best presentation'
    },

    'Cheese Platter': {
        ingredients: [
            'Hard cheeses:',
            '4 oz aged cheddar',
            '4 oz parmesan',
            '4 oz manchego',
            
            'Soft cheeses:',
            '4 oz brie',
            '4 oz goat cheese',
            '4 oz blue cheese',
            
            'Accompaniments:',
            'Fresh grapes',
            'Dried fruits (apricots, cranberries)',
            'Mixed nuts',
            'Honey',
            'Fig jam',
            'Assorted crackers',
            'Sliced baguette',
            'Fresh and dried herbs for garnish'
        ],
        instructions: [
            'Remove cheeses from refrigerator 1 hour before serving',
            'Arrange cheeses from mild to strong',
            'Group similar cheeses together',
            'Add small bowls of honey and jam',
            'Fill spaces with fruits and nuts',
            'Add crackers and bread around edges',
            'Provide cheese knives for each type',
            'Garnish with fresh herbs',
            'Label cheeses if desired'
        ],
        prepTime: '20 minutes',
        restTime: '1 hour',
        difficulty: 'Easy',
        servings: '8-10',
        tips: 'Serve cheeses at room temperature for best flavor'
    },

    'Stuffed Dates': {
        ingredients: [
            '24 Medjool dates',
            '8 oz mascarpone cheese',
            '4 oz goat cheese',
            '2 tbsp honey',
            '1/4 cup pistachios, chopped',
            '1/4 tsp orange zest',
            'Flaky sea salt',
            'Fresh thyme leaves'
        ],
        instructions: [
            'Slice dates lengthwise, remove pits',
            'Mix mascarpone, goat cheese, and honey',
            'Fold in orange zest',
            'Fill each date with cheese mixture',
            'Top with chopped pistachios',
            'Sprinkle with sea salt',
            'Garnish with thyme leaves',
            'Chill until serving'
        ],
        prepTime: '25 minutes',
        chillTime: '30 minutes',
        difficulty: 'Easy',
        servings: '24 pieces',
        tips: 'Choose large, soft dates for easier stuffing'
    },

    'Zucchini Fritters': {
        ingredients: [
            '4 medium zucchini, grated',
            '1 cup all-purpose flour',
            '2 eggs, beaten',
            '1/4 cup grated parmesan',
            '2 green onions, finely chopped',
            '2 cloves garlic, minced',
            '1 tsp salt',
            '1/2 tsp black pepper',
            'Oil for frying',
            
            'For sauce:',
            '1 cup Greek yogurt',
            '1 tbsp lemon juice',
            '1 tbsp fresh dill, chopped',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Salt grated zucchini and drain for 10 minutes',
            'Squeeze out excess moisture',
            'Mix with flour, eggs, cheese, and seasonings',
            'Heat oil in large skillet',
            'Drop spoonfuls of mixture into hot oil',
            'Flatten slightly with spatula',
            'Cook 3-4 minutes per side until golden',
            'Drain on paper towels',
            'Mix sauce ingredients',
            'Serve hot with yogurt sauce'
        ],
        prepTime: '20 minutes',
        drainTime: '10 minutes',
        cookTime: '20 minutes',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Really squeeze out all moisture from zucchini for crispy fritters'
    },

    'Beef Tartare': {
        ingredients: [
            '1 lb high-quality beef tenderloin, finely chopped',
            '2 tbsp shallots, minced',
            '2 tbsp capers, drained and chopped',
            '2 tbsp cornichons, finely chopped',
            '1 tbsp Dijon mustard',
            '1 tbsp Worcestershire sauce',
            '1 egg yolk',
            '2 tbsp olive oil',
            'Salt and pepper to taste',
            
            'For garnish:',
            'Additional egg yolk',
            'Fresh herbs',
            'Toasted baguette slices'
        ],
        instructions: [
            'Chill beef for 30 minutes before chopping',
            'Hand-chop beef into very fine pieces',
            'Mix with shallots, capers, cornichons',
            'Add mustard, Worcestershire, egg yolk',
            'Drizzle with olive oil',
            'Season with salt and pepper',
            'Shape into a mound on plate',
            'Make well in center for egg yolk',
            'Garnish with herbs',
            'Serve immediately with toast points'
        ],
        prepTime: '30 minutes',
        chillTime: '30 minutes',
        difficulty: 'Medium',
        servings: '4',
        tips: 'Use highest quality fresh beef from a trusted source'
    },

    'Prosciutto Melon': {
        ingredients: [
            '1 ripe cantaloupe',
            '8 oz thinly sliced prosciutto',
            'Fresh basil leaves',
            '2 tbsp honey',
            '2 tbsp balsamic glaze',
            'Fresh ground black pepper',
            'Extra virgin olive oil',
            'Optional: fresh mozzarella balls'
        ],
        instructions: [
            'Halve melon, remove seeds',
            'Cut into thin wedges or use melon baller',
            'Wrap each piece with prosciutto',
            'Arrange on serving platter',
            'Tuck basil leaves between pieces',
            'Drizzle with honey and balsamic',
            'Add fresh pepper',
            'Drizzle with olive oil',
            'Serve immediately'
        ],
        prepTime: '15 minutes',
        difficulty: 'Easy',
        servings: '6-8',
        tips: 'Choose a ripe, fragrant melon for best results'
    },

    'Cucumber Bites': {
        ingredients: [
            '2 English cucumbers',
            '8 oz cream cheese, softened',
            '1/4 cup fresh dill, chopped',
            '2 tbsp fresh lemon juice',
            '1 clove garlic, minced',
            'Salt and pepper to taste',
            'Cherry tomatoes for garnish',
            'Fresh dill sprigs'
        ],
        instructions: [
            'Slice cucumbers into 1-inch thick rounds',
            'Scoop out centers leaving bottom intact',
            'Mix cream cheese, dill, lemon, garlic',
            'Season with salt and pepper',
            'Pipe or spoon mixture into cucumber cups',
            'Top each with half cherry tomato',
            'Garnish with dill sprigs',
            'Chill until serving'
        ],
        prepTime: '25 minutes',
        chillTime: '30 minutes',
        difficulty: 'Easy',
        servings: '24 pieces',
        tips: 'Pat cucumber cups dry before filling'
    },

    'Salmon Tartare': {
        ingredients: [
            '1 lb sushi-grade salmon, finely diced',
            '1 shallot, minced',
            '2 tbsp capers, chopped',
            '2 tbsp fresh dill, chopped',
            '1 tbsp olive oil',
            '1 lemon, juiced',
            '1 tsp Dijon mustard',
            'Salt and pepper to taste',
            
            'For garnish:',
            'Microgreens',
            'Avocado slices',
            'Crispy wonton chips'
        ],
        instructions: [
            'Dice salmon into small cubes',
            'Mix sesame oil, soy sauce, vinegar, wasabi',
            'Gently fold sauce into salmon',
            'Add avocado and green onions',
            'Season with black pepper',
            'Chill for 30 minutes',
            'Shape tartare using mold or ring',
            'Sprinkle with sesame seeds',
            'Serve with wonton crisps'
        ],
        prepTime: '20 minutes',
        chillTime: '30 minutes',
        difficulty: 'Medium',
        servings: '4',
        tips: 'Keep all ingredients well-chilled for best results'
    },

    'Mushroom Caps': {
        ingredients: [
            '24 large button mushrooms',
            '8 oz Italian sausage',
            '4 oz cream cheese, softened',
            '1/4 cup parmesan cheese',
            '2 cloves garlic, minced',
            '2 tbsp fresh parsley',
            '1/4 cup breadcrumbs',
            'Salt and pepper to taste',
            'Olive oil for brushing'
        ],
        instructions: [
            'Preheat oven to 375°F',
            'Remove stems from mushrooms',
            'Brown sausage in skillet, drain',
            'Mix with cream cheese and parmesan',
            'Add garlic, parsley, and breadcrumbs',
            'Fill mushroom caps',
            'Brush with olive oil',
            'Bake 20-25 minutes until golden',
            'Serve hot'
        ],
        prepTime: '20 minutes',
        cookTime: '25 minutes',
        difficulty: 'Medium',
        servings: '8',
        tips: 'Choose mushrooms of similar size for even cooking'
    },

    'Olive Tapenade': {
        ingredients: [
            '1 cup Kalamata olives, pitted',
            '1 cup black olives, pitted',
            '2 anchovy fillets (optional)',
            '2 cloves garlic',
            '2 tbsp capers',
            '2 tbsp fresh herbs (thyme, basil)',
            '1/4 cup olive oil',
            '1 tbsp lemon juice',
            'Black pepper to taste',
            'Baguette slices for serving'
        ],
        instructions: [
            'Pulse olives in food processor',
            'Add anchovies, garlic, and capers',
            'Pulse until finely chopped',
            'Add herbs and pulse briefly',
            'Stream in olive oil while pulsing',
            'Add lemon juice and pepper',
            'Taste and adjust seasonings',
            'Chill for 1 hour',
            'Serve with toasted baguette'
        ],
        prepTime: '15 minutes',
        chillTime: '1 hour',
        difficulty: 'Easy',
        servings: '8',
        tips: 'Don't over-process - keep some texture'
    },

    'Pesto Crostini': {
        ingredients: [
            '1 French baguette, sliced',
            
            'For pesto:',
            '2 cups fresh basil leaves',
            '1/2 cup pine nuts',
            '1/2 cup parmesan cheese, grated',
            '3 cloves garlic',
            '1/2 cup olive oil',
            'Salt and pepper to taste',
            
            'For topping:',
            'Cherry tomatoes, halved',
            'Fresh mozzarella pearls',
            'Extra basil for garnish'
        ],
        instructions: [
            'Toast baguette slices until golden',
            'Make pesto: blend basil, nuts, cheese, garlic',
            'Stream in olive oil while blending',
            'Season with salt and pepper',
            'Spread pesto on toasted bread',
            'Top with tomatoes and mozzarella',
            'Garnish with basil leaves',
            'Drizzle with olive oil',
            'Serve immediately'
        ],
        prepTime: '20 minutes',
        cookTime: '10 minutes',
        difficulty: 'Easy',
        servings: '24 pieces',
        tips: 'Make extra pesto and freeze for later use'
    },

    'Beef Carpaccio': {
        ingredients: [
            '1 lb beef tenderloin, trimmed',
            '2 cups arugula',
            '1/4 cup olive oil',
            '2 tbsp lemon juice',
            '1/4 cup capers',
            'Shaved parmesan cheese',
            'Truffle oil (optional)',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Freeze beef for 2 hours until firm',
            'Slice beef very thinly',
            'Arrange slices on chilled plates',
            'Season with salt and pepper',
            'Toss arugula with olive oil and lemon',
            'Place arugula in center',
            'Sprinkle with capers',
            'Add shaved parmesan',
            'Drizzle with truffle oil if using',
            'Serve immediately'
        ],
        prepTime: '15 minutes',
        freezeTime: '2 hours',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Ask your butcher to slice the beef for you'
    },

    'Tempura Veggies': {
        ingredients: [
            'Assorted vegetables (sweet potato, broccoli, mushrooms)',
            '1 cup all-purpose flour',
            '1 cup ice-cold water',
            '1 egg',
            '1/4 tsp baking soda',
            'Pinch of salt',
            'Oil for frying',
            
            'For dipping sauce:',
            '1/2 cup soy sauce',
            '1/4 cup mirin',
            '1 tbsp grated ginger'
        ],
        instructions: [
            'Cut vegetables into uniform pieces',
            'Mix flour, water, egg, baking soda, salt',
            'Keep batter cold',
            'Heat oil to 375°F',
            'Dip vegetables in batter',
            'Fry until light golden and crispy',
            'Drain on paper towels',
            'Mix sauce ingredients',
            'Serve hot with dipping sauce'
        ],
        prepTime: '20 minutes',
        cookTime: '15 minutes',
        difficulty: 'Medium',
        servings: '4',
        tips: 'Use ice-cold water for crispiest results'
    },

    'Tuna Tartare': {
        ingredients: [
            '1 lb sushi-grade tuna, finely diced',
            '2 tbsp sesame oil',
            '2 tbsp soy sauce',
            '1 tbsp rice vinegar',
            '1 tsp wasabi paste',
            '1 avocado, diced',
            '2 green onions, finely chopped',
            '1 tbsp sesame seeds',
            'Black pepper to taste',
            
            'For serving:',
            'Wonton crisps',
            'Pickled ginger',
            'Extra wasabi'
        ],
        instructions: [
            'Dice tuna into small uniform cubes',
            'Mix sesame oil, soy sauce, vinegar, wasabi',
            'Gently fold sauce into tuna',
            'Add avocado and green onions',
            'Season with black pepper',
            'Chill for 30 minutes',
            'Toast sesame seeds until fragrant',
            'Shape tartare using mold or ring',
            'Sprinkle with sesame seeds',
            'Serve with wonton crisps'
        ],
        prepTime: '20 minutes',
        chillTime: '30 minutes',
        difficulty: 'Medium',
        servings: '4',
        tips: 'Keep all ingredients well-chilled for best results'
    },

    'Spanakopita': {
        ingredients: [
            '2 lbs fresh spinach, chopped',
            '1 lb feta cheese, crumbled',
            '1 onion, finely chopped',
            '3 cloves garlic, minced',
            '3 eggs, beaten',
            '1/4 cup fresh dill, chopped',
            '1/4 cup olive oil',
            '1 package phyllo dough',
            '1 cup melted butter',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Sauté onion and garlic until soft',
            'Cook spinach until wilted, drain well',
            'Mix spinach, feta, eggs, dill',
            'Season with salt and pepper',
            'Layer phyllo sheets, brushing each with butter',
            'Spread spinach mixture',
            'Roll or fold into triangles',
            'Brush tops with butter',
            'Bake at 375°F for 30-35 minutes until golden',
            'Cool slightly before serving'
        ],
        prepTime: '45 minutes',
        cookTime: '35 minutes',
        difficulty: 'Medium',
        servings: '12',
        tips: 'Keep phyllo covered with damp cloth while working'
    },

    'Arancini': {
        ingredients: [
            '2 cups arborio rice',
            '4 cups chicken broth',
            '1/2 cup white wine',
            '1 onion, finely diced',
            '1/2 cup parmesan, grated',
            '4 oz mozzarella, cubed',
            '2 eggs',
            '1 cup breadcrumbs',
            'Oil for frying',
            
            'For sauce:',
            '2 cups marinara sauce',
            'Fresh basil for garnish'
        ],
        instructions: [
            'Make risotto: cook rice with broth and wine',
            'Cool risotto completely',
            'Mix in parmesan',
            'Form balls, insert mozzarella cube',
            'Dip in egg, then breadcrumbs',
            'Heat oil to 350°F',
            'Fry until golden brown',
            'Drain on paper towels',
            'Heat marinara sauce',
            'Serve hot with sauce and basil'
        ],
        prepTime: '30 minutes',
        cookTime: '45 minutes',
        difficulty: 'Hard',
        servings: '12',
        tips: 'Use cold risotto for easier shaping'
    },

    'Empanadas': {
        ingredients: [
            'For dough:',
            '3 cups all-purpose flour',
            '1 tsp salt',
            '1/2 cup cold butter, cubed',
            '1 egg',
            '1/4 cup cold water',
            
            'For filling:',
            '1 lb ground beef',
            '1 onion, finely diced',
            '2 cloves garlic, minced',
            '1 tsp ground cumin',
            '1 tsp paprika',
            '1/2 cup olives, chopped',
            '2 hard-boiled eggs, chopped',
            'Salt and pepper to taste',
            
            'For assembly:',
            '1 egg beaten with 1 tbsp water'
        ],
        instructions: [
            'Make dough: mix flour and salt',
            'Cut in butter until crumbly',
            'Mix in egg and water until dough forms',
            'Chill for 30 minutes',
            'Cook beef with onions, garlic, and spices',
            'Add olives and eggs to filling',
            'Roll dough, cut circles',
            'Fill and seal edges',
            'Brush with egg wash',
            'Bake at 375°F for 25-30 minutes until golden'
        ],
        prepTime: '45 minutes',
        chillTime: '30 minutes',
        cookTime: '30 minutes',
        difficulty: 'Medium',
        servings: '12',
        tips: 'Keep dough cold for best results'
    },

    'Samosas': {
        ingredients: [
            'For pastry:',
            '2 cups all-purpose flour',
            '1/4 cup oil',
            'Water as needed',
            
            'For filling:',
            '4 potatoes, boiled and mashed',
            '1 cup green peas',
            '1 onion, finely chopped',
            '2 tbsp ginger-garlic paste',
            '2 green chilies, minced',
            '1 tsp cumin seeds',
            '1 tsp garam masala',
            'Oil for frying',
            
            'For chutney:',
            'Mint leaves',
            'Cilantro',
            'Green chilies',
            'Lemon juice'
        ],
        instructions: [
            'Make dough: mix flour, oil, water',
            'Rest dough for 30 minutes',
            'Prepare filling: sauté spices and onions',
            'Add potatoes and peas, cook until done',
            'Roll dough, cut circles',
            'Form cones, fill and seal',
            'Deep fry until golden brown',
            'Blend chutney ingredients',
            'Serve hot with chutney'
        ],
        prepTime: '40 minutes',
        restTime: '30 minutes',
        cookTime: '20 minutes',
        difficulty: 'Hard',
        servings: '15',
        tips: 'Ensure edges are well-sealed before frying'
    },

    'Gyoza': {
        ingredients: [
            'For filling:',
            '1 lb ground pork',
            '2 cups napa cabbage, minced',
            '2 green onions, finely chopped',
            '2 cloves garlic, minced',
            '1 tbsp ginger, grated',
            '1 tbsp soy sauce',
            '1 tsp sesame oil',
            
            'For assembly:',
            '30 gyoza wrappers',
            'Water for sealing',
            'Oil for frying',
            
            'For dipping sauce:',
            'Soy sauce',
            'Rice vinegar',
            'Chili oil'
        ],
        instructions: [
            'Mix all filling ingredients',
            'Place filling in center of wrapper',
            'Wet edges with water',
            'Fold and pleat to seal',
            'Heat oil in pan',
            'Place gyoza flat side down',
            'Fry until bottoms are golden',
            'Add water, cover and steam',
            'Remove lid and crisp bottoms',
            'Serve with dipping sauce'
        ],
        prepTime: '30 minutes',
        cookTime: '15 minutes',
        difficulty: 'Medium',
        servings: '30 pieces',
        tips: 'Don\'t overfill or they may burst while cooking'
    },

    'Ceviche': {
        ingredients: [
            '1 lb fresh white fish (sea bass or halibut), diced',
            '1 cup fresh lime juice',
            '1 red onion, finely diced',
            '2 tomatoes, diced',
            '1 jalapeño, seeded and minced',
            '1/2 cup cilantro, chopped',
            '1 avocado, diced',
            'Salt and pepper to taste',
            
            'For serving:',
            'Tortilla chips',
            'Extra lime wedges',
            'Hot sauce'
        ],
        instructions: [
            'Dice fish into 1/2 inch cubes',
            'Cover fish with lime juice',
            'Refrigerate for 2-3 hours until fish is opaque',
            'Drain half the lime juice',
            'Add onion, tomatoes, jalapeño',
            'Mix in cilantro and avocado',
            'Season with salt and pepper',
            'Chill for 30 minutes',
            'Serve with tortilla chips',
            'Garnish with lime wedges'
        ],
        prepTime: '20 minutes',
        marination: '2-3 hours',
        difficulty: 'Medium',
        servings: '6',
        tips: 'Use only the freshest fish from a trusted source'
    }
}; 