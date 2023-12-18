// @ts-check

class MagicTrick {
  constructor() {
    this.cards = [];
    this.position = 0;
    this.replacementCard = 0;
    this.newCard = 0;
    this.stackSize = 0;
    this.isSameSize = false;
  }
  getItem(cards, position) {
    this.cards = cards;
    this.position = this.cards[position];
    return this;
  }
  setItem(cards, position, replacementCard) {
    this.cards = cards;
    this.position = position;
    this.replacementCard = replacementCard;

    this.cards[position] = replacementCard;

    return this;
  }
  insertItemAtTop(cards, newCard) {
    this.cards = cards;
    this.newCard = newCard;

    this.cards.push(this.newCard);
    return this;
  }
  removeItem(cards, position) {
    this.cards = cards;
    this.position = position;

    this.cards.splice(this.position, 1);

    return this;
  }
  removeItemFromTop(cards) {
    this.cards = cards;
    this.cards.pop();
    return this;
  }
  insertItemAtBottom(cards, newCard) {
    this.cards = cards;
    this.cards.unshift(newCard);
    return this;
  }
  removeItemAtBottom(cards) {
    this.cards = cards;
    this.cards.shift();
    return this;
  }
  checkSizeOfStack(cards, stackSize) {
    this.cards = cards;
    this.stackSize = stackSize;

    this.isSameSize = this.cards.length === this.stackSize
    return this;
  }
  build() {
    return {
      cards: this.cards,
      position: this.position,
      replacementCard: this.replacementCard,
      newCard: this.newCard,
      stackSize: this.stackSize,
      isSameSize: this.isSameSize,
    };
  }
}

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  const trick = new MagicTrick().getItem(cards, position).build();
  return trick.position;
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  const trick = new MagicTrick()
    .setItem(cards, position, replacementCard)
    .build();

  return trick.cards;
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  const trick = new MagicTrick().insertItemAtTop(cards, newCard).build();
  return trick.cards;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  const trick = new MagicTrick().removeItem(cards, position).build();
  return trick.cards;
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  const trick = new MagicTrick().removeItemFromTop(cards).build();
  return trick.cards;
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  const trick = new MagicTrick().insertItemAtBottom(cards, newCard).build();
  return trick.cards;
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  const trick = new MagicTrick().removeItemAtBottom(cards).build();
  return trick.cards;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  const trick = new MagicTrick().checkSizeOfStack(cards, stackSize).build();
  return trick.isSameSize;
}
