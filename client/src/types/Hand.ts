import { Card } from "./Card";

export interface PlayerHand {
  card1: Card;
  card2: Card;
}

export interface Hand {
  players: {
    [playerId: string]: PlayerHand;
  };

  card1: Card;
  card2: Card;
  card3: Card;
  card4: Card;
  card5: Card;
}