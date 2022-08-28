import React from 'react';
import { PlayerHand } from '../../types/Hand';
import { Player } from '../../types/Player';
import { Card } from '../card/Card';

const SEAT_POSITIONS = {
  1: {
    x: 100,
    y: 100
  },
  2: {
    x: 400,
    y: 100
  },
  3: {
    x: 700,
    y: 100
  }
}

interface SeatProps {
  player: Player;
  hand?: PlayerHand;
}

export function Seat(props: SeatProps): JSX.Element {
  const pos = SEAT_POSITIONS[props.player.seat];

  return (
    <div className='position-absolute' style={{ top: pos.y, left: pos.x }}>
      <h2>{props.player.name}</h2>
      <div>{props.player.stack}</div>

      {!!props.hand && (
        <>
          <Card {...props.hand.card1} />
          <Card {...props.hand.card2} />
        </>
      )}
    </div>
  );
}