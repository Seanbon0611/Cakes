const cakes = (recipe, available) => {
  //Create array that will contain the values that will contain how many cakes we can make based on a single ingredient
  let numOfCakes = []
  //loop through recipe object
  for (ingredient in recipe) {
    //check that we only use ingredients necesscary for the recipe
    if (ingredient in available) {
    //Check how many cakes we could make based on single ingredients
    //divide what available ingredients by what the recipe calls for and return the largest integer if the result is a float
    let num = Math.floor(available[ingredient] / recipe[ingredient])
    //take that result and push it into the numOfCakesArray
    numOfCakes.push(num)
    //if there is an ingredient of the available ingredients that match whats required for the recipe, return 0 because we cannot make any cakes.
    } else {
      return 0
    }
  }
  //Get the minimum value of the numOfCakes Array, we get the min value because based on the avaialable ingredients we only have enough of one single ingredients to make x amount of cakes
  return Math.min(...numOfCakes)
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

cakes(recipe, available)