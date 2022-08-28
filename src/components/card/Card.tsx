import React from 'react';

import { CardSuit } from '../../types/CardSuit';
import { CardValue } from '../../types/CardValue';

import './card.css';

interface CardProps {
  value: CardValue;
  suit: CardSuit;
}

export function Card(props: CardProps): JSX.Element {
  const textColor = (props.suit === CardSuit.Heart || props.suit === CardSuit.Diamond) ? 'text-danger' : 'text-dark';

  return (
    <div className={`p-2 rounded-lg bg-white border border-secondary poker-card ${textColor}`}>
      <div className='d-flex justify-content-between'>
        <span>{props.value}</span>
        <span>{props.value}</span>
      </div>

      <div className='d-flex justify-content-between'>
        <span>{props.suit}</span>
        <span>{props.suit}</span>
      </div>

      <div className='d-flex justify-content-center'>
        {props.suit}
      </div>

      <div className='d-flex justify-content-between'>
        <span>{props.suit}</span>
        <span>{props.suit}</span>
      </div>

      <div className='d-flex justify-content-between'>
        <span>{props.value}</span>
        <span>{props.value}</span>
      </div>
    </div>
  );
}