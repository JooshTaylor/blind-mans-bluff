import { Card } from "../types/Card";
import { Hand } from "../types/Hand";
import { Player } from "../types/Player";
import { getDeck } from "./getDeck";

export function getNewHand(players: Player[]): Hand {
  const deck = getDeck();

  const shuffled = shuffle(deck);

  let index = 4;

  return {
    card1: shuffled[0],
    card2: shuffled[1],
    card3: shuffled[2],
    card4: shuffled[3],
    card5: shuffled[4],
    players: players.reduce((acc, p, i) => {
      acc[p.id] = {
        card1: shuffled[index + 1],
        card2: shuffled[index + 2]
      };
      index += 2;
      return acc;
    }, {})
  };  
}

function shuffle(deck: Card[]): Card[] {
  let currentIndex = deck.length;
  let randomIndex: number = null;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}