/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determine whether the lasagna is done.If remainingTime is not set
 * sending a warning message
 * and returns a simplified status message.
 *
 * @param {number} remainingTime
 * @returns {string} cooking status
 */
export const cookingStatus = (remainingTime) => {
  if (remainingTime === undefined) return "You forgot to set the timer.";
  return remainingTime !== 0 ? "Not done, please wait." : "Lasagna is done.";
};

/**
 * Determine preparationTime based on layers and
 * the average preparation time per layer in minutes.
 * If the function is called without providing the average preparation time,
 * 2 minutes should be assumed instead.
 * and returns a simplified status message.
 *
 * @param {string[]} layers
 * @returns {number} timePerLayer
 */
export const preparationTime = (layers, timePerLayer = 2) => layers.length * timePerLayer;
  

/**
 * Compute the amounts of noodles and sauce needed
 * and returns object with keys noodles and sauce.
 *
 * @param {string[]} layers
 * @returns {Object} quantities
 */
export const quantities = (layers) => {
  const NOODLE_G_PER_LAYER = 50;
  const SAUCE_L_PER_LAYER = 0.2;
  let quantities = { noodles: 0, sauce: 0 };
  if (layers.length == 0) return quantities;
  layers.forEach((element) => {
    if (element === "noodles") quantities.noodles += NOODLE_G_PER_LAYER;
    else if (element === "sauce") quantities.sauce += SAUCE_L_PER_LAYER;
  });
  return quantities;
};

/**
 * Add the secret ingredient from my friend revip list.
 * @param {string[]} friendRecip
 * @param {string[]} myRecip
 * @void
 */
export const addSecretIngredient = (friendRecip, myRecip) => {myRecip.push([...friendRecip].pop());};

/**
 * Scale the recipe to cook for more people.
 * @param {string[]} baseRecip
 * @param {number} portions
 * @returns {Object} recipe object with the amounts needed
 * for the desired number of portions.
 */
export const scaleRecipe = (baseRecip, portions) =>
  Object.fromEntries(
    Object.entries(baseRecip).map(([name, value]) => [
      name,
      value * (portions / 2),
    ])
  );
