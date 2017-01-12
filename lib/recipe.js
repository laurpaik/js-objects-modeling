'use strict';
//can map the ingredients after they're listed in an array

const unsaltedButter = {
  'ingredient' : 'butter',
  'whatToDo' : 'soften',
  'howMuch' : '1 cup',
};
const whiteSugar = {
  'ingredient' : 'white sugar',
  'whatToDo' : 'mix',
  'howMuch' : '2/3 cup',
};
const darkSugar = {
  'ingredient' : 'dark brown sugar',
  'whatToDo' : 'mix',
  'howMuch' : '2/3 cup',
};
const eggs = {
  'ingredient' : 'eggs',
  'whatToDo' : 'mix',
  'howMuch' : '2',
};
const bakingSoda = {
  'ingredient' : 'baking soda',
  'whatToDo' : 'add',
  'howMuch' : '1 tsp',
};
const salt = {
  'ingredient' : 'salt',
  'whatToDo' : 'add',
  'howMuch' : '1 tsp',
};
const vanilla = {
  'ingredient' : 'vanilla',
  'whatToDo' : 'add',
  'howMuch' : '1 tsp',
};
const flour = {
  'ingredient' : 'flour',
  'whatToDo' : 'add',
  'howMuch' : '2 1/2 cups',
};
const recipe = {
  name: 'cookies',
  author: 'thehangrychef',
  listOfSteps: [
    'Pre-heat oven to 375 degrees',
    'Soften butter in a microwave-safe bowl',
    'Mix in both kinds of sugar until well combined',
    'Add the eggs and mix well',
    'Then add vanilla, baking soda, and salt',
    'Mix well',
    'Add the flour a bit at a time until well combined',
    'Make small shooter marble-sized balls and place on a baking sheet',
    'Bake for 8 minutes and then place on cooling racks'
  ],
  listOfIngredients: [
    unsaltedButter,
    whiteSugar,
    darkSugar,
    eggs,
    bakingSoda,
    salt,
    vanilla,
    flour
  ],
  numberOfServings: 4,

  setRecipe: function () {
    for (let i = 0; i < this.listOfIngredients.length; i++) {
      console.log(this.listOfIngredients[i].whatToDo + ' ' + this.listOfIngredients[i].howMuch + ' of ' + this.listOfIngredients[i].ingredient + '.');
    }
  }
};
module.export = recipe;
