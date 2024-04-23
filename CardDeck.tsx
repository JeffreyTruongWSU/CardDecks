// Define types for Suit and Card for better type-checking
export type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
export type Card = {
  suit: Suit;
  value: string;
};

export const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
export const values: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

export function createDeck(): Card[] {
  let deck: Card[] = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

export function shuffleDeck(deck: Card[]): Card[] {
  let shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
}
