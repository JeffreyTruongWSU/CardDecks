import React, { useState } from 'react';
import { createDeck, shuffleDeck, Card } from './CardDeck'; // Ensure path is correct

const App: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>(createDeck());
  const [hand, setHand] = useState<Card[]>([]);

  const handleShuffle = () => {
    setDeck(shuffleDeck([...deck]));
  };

  const handleDrawCard = () => {
    if (deck.length === 0) {
      alert("No more cards in the deck!");
      return;
    }
    const newCard = deck[deck.length - 1]; // Take the last card
    const newDeck = deck.slice(0, -1); // Remove the last card from the deck
    setDeck(newDeck);
    setHand(currentHand => [...currentHand, newCard]);
  };

  const handleEmptyHand = () => {
    setHand([]);
  };

  return (
    <div className="app">
      <h1>Card Game</h1>
      <button onClick={handleShuffle}>Shuffle Deck</button>
      <button onClick={handleDrawCard}>Draw Card</button>
      <button onClick={handleEmptyHand}>Empty Hand</button>
      <div>
        <h2>Hand</h2>
        {hand.map((card, index) => (
          <div key={index}>{card.value} of {card.suit}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
