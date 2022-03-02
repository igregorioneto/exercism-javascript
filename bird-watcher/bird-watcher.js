// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    count += birdsPerDay[index];
  }

  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let end = week * 7;
  let start = end - 7;
  let lastWeek = birdsPerDay.slice(start, end);

  let count = 0;

  for (let index = 0; index < lastWeek.length; index++) {
    count += lastWeek[index];
  }
  return count;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    if(index === 0 || (index % 2 === 0)) {
      birdsPerDay[index] = birdsPerDay[index] + 1;      
    } else {
      birdsPerDay[index] = birdsPerDay[index]; 
    }
  }
  return birdsPerDay;
}
