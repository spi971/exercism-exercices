// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const DAY_IN_MONTH = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const days = budget / dayRate(ratePerHour);
  return Math.floor(days);
}
/**
 * Get number of month for project spans
 * @param {number} numDays 
 * @returns 
 */
function getMonths(numDays) {
  return Math.floor(numDays / DAY_IN_MONTH);
}

/**
 * Get number of remaning day for project spans
 * @param {number} numDays 
 * @returns 
 */
function getRemainingDays(numDays) {
  return numDays % DAY_IN_MONTH;
}

/**
 * Get price for a month, without discount
 * @param {number} ratePerHour 
 * @param {number} fullMonths 
 * @returns 
 */
function monthNomalPrice(ratePerHour, fullMonths) {
  return fullMonths * DAY_IN_MONTH * dayRate(ratePerHour);;
}

function getPriceForProjectSpans(fullMonthPrice, discount, remainingDays, ratePerHour){
  return Math.ceil(
    fullMonthPrice -
      discount * fullMonthPrice +
      remainingDays * dayRate(ratePerHour)
  )
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonths = getMonths(numDays);
  const fullMonthPrice = monthNomalPrice(ratePerHour, fullMonths);
  const remainingDays = getRemainingDays(numDays);

  return getPriceForProjectSpans(fullMonthPrice, discount, remainingDays, ratePerHour);
}
