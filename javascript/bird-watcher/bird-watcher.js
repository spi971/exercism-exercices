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
  let birds = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    birds += birdsPerDay[index];
  }
  return birds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birds = 0;
  let weekDuration = 7;
  let index = (week * weekDuration) - weekDuration;
  let lastIndex = week * weekDuration;

  for (index; index < lastIndex; index++) {
    birds += birdsPerDay[index];
  }
  return birds;
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
    if(index % 2 === 0){
      birdsPerDay[index]++
    }
  }
  return birdsPerDay;
}
