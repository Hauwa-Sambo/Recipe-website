const fetchMeals = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
        const data = await response.json();
        displayMeals(data.meals);
        } catch (error) {
        console.error('Error fetching meal data:', error);
    }
};

const displayMeals = (meals) => {
    const mealList = document.querySelector('.meal-list');
    mealList.innerHTML = '';

    meals.forEach(meal => {
        const ingredients = getIngredients(meal);
        const mealCard = document.createElement('div');
        mealCard.classList.add('meal-card');

        mealCard.innerHTML = `
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <h2 class="meal-title">${meal.strMeal}</h2>
                        <p class="instruction">${meal.strInstructions.substring(0, 150)}...</p>
                        <ul class="ingredients">
                            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')} 
                        </ul>
                        <a href="${meal.strYoutube}" target="_blank" class="meal-video-link">
                        <button>Watch Video</button>
                        </a>
        `

        mealList.appendChild(mealCard);
    });

}

const getIngredients = (meal) =>{
    let ingredients = [];
    for (let i = 1; i <= 5; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }
    }
    return ingredients;
}




fetchMeals();

// const renderMealList = mealListContainer =>{
//     const Container = document.querySelector('.meal-list');
//         mealListContainer.forEach(mealListContainer => {
//             Container.innerHTML += `
//                     <div class='meal'>
//                         <img src="${mealListContainer.image}" alt="" class="meal-image">
//                         <h2 class="meal-title">${mealListContainer.mealTitle}</h2>
//                         <p class="instruction">${mealListContainer.instruction}</p>
//                         <ul class="ingredients">
//                             <li class="ingredient">${mealListContainer.ingredient1}</li>
//                             <li class="ingredient">${mealListContainer.ingredient2}</li>
//                             <li class="ingredient">${mealListContainer.ingredient3}</li>
//                             <li class="ingredient">${mealListContainer.ingredient4}</li>
//                             <li class="ingredient">${mealListContainer.ingredient5}</li>
//                         </ul>
//                         <a href="${mealListContainer.Videolink}">
//                                 <button>${mealListContainer.button}</button>
//                         </a>
//                     </div>
//                     `;
//                 }) ;
//             }
// renderMealList(mealListContainer);
{/* <div class='meal'></div>

<li class="ingredient">${meal.stringredient1}</li>
                            <li class="ingredient">${mealList.stringredient2}</li>
                            <li class="ingredient">${mealListContainer.ingredient3}</li>
                            <li class="ingredient">${mealListContainer.ingredient4}</li>
                             */}