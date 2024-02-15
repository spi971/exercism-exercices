// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  const numberOfCardTypeInDeck = [];
  // biome-ignore lint/complexity/noForEach: <explanation>
  stack.forEach((current) => {
    if (current === card) {
      numberOfCardTypeInDeck.push(current);
    }
  });
  return numberOfCardTypeInDeck.length;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const evenType = [];
  const oddType = [];
  for (const card of stack) {
    if (card % 2 === 0) {
      evenType.push(card);
    } else {
      oddType.push(card);
    }
  }
  if (type) {
    return evenType.length;
  }
  return oddType.length;
}
