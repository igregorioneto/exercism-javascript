/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

 export function cookingStatus(params) {
    if(params === 0) {
      return 'Lasagna is done.';
    } else if(params > 0) {
      return 'Not done, please wait.';
    } else if(params === null || params === undefined) {
      return 'You forgot to set the timer.';
    }
}

export function preparationTime(layers, time = 2) {
    return layers.length * time;
}

export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;
    for (let index = 0; index < layers.length; index++) {
      if(layers[index] === 'noodles') {
        noodles +=1
      } else if(layers[index] === 'sauce') {
        sauce += 1;
      } else {
        continue;
      }
    }
    return { noodles: noodles * 50, sauce: sauce * 0.2 };
}

export function addSecretIngredient(friendsList, myList ) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const arr = Object.keys(recipe);
  const values = Object.values(recipe);
  const obj = {};

  for (let index = 0; index < arr.length; index++) {
    obj[arr[index]] = (values[index] / 2) * portions;
  }

  return obj;
}