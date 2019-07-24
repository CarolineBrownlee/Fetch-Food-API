// 1. Create a DOM element in your index.html with a class of foodList.
// 2. Create a function which returns a string template. 
// 3. The template is the HTML representation for a food item.
// 4. Create a function that inserts an HTML representation of a food into the DOM


const foodContainer = document.querySelector(".foodList")

const foodFactory = (food) => {
    return `
        <section class="section">
            <p class="name">${food.name}</p>
            <p>${food.category}</p> 
            <p>${food.ethnicity}</p>
        </section>
    `
}

const addFoodToDom = (taco) => {
    foodContainer.innerHTML += taco
}

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
            console.log(food) // Should have a `barcode` property
        })
    })

            // Now fetch the food from the Food API
fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then(response => response.json())
    .then(productInfo => {
        if (productInfo.product.ingredients_text) {
            food.ingredients = productInfo.product.ingredients_text
            } else {
             food.ingredients = "no ingredients listed"
            }

                    // Produce HTML representation
            const foodAsHTML = foodFactory(food)

                    // Add representaiton to DOM
                    addFoodToDom(foodAsHTML)
                })
    
