import { Card } from '../types/Card';
import { CardSuit } from '../types/CardSuit';
import { CardValue } from '../types/CardValue';

export function getDeck(): Card[] {
  const suits = Object.values(CardSuit);
  const values = Object.values(CardValue);
  
  const deck = [];
  
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({
        suit,
        value
      });
    });
  });

  return deck;
}
