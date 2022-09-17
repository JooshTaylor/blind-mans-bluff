import { CardSuit } from "./CardSuit";
import { CardValue } from "./CardValue";

export interface Card {
  value: CardValue;
  suit: CardSuit;
}