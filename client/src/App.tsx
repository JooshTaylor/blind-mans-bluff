import React from 'react';
import { Card } from './components/card/Card';
import { Seat } from './components/seat/Seat';
import { Table } from './components/table/Table';
import { Card as CardType } from './types/Card';
import { CardSuit } from './types/CardSuit';
import { CardValue } from './types/CardValue';
import { Hand } from './types/Hand';
import { Player } from './types/Player';
import { getNewHand } from './utils/getNewHand';

function App() {
  const [ hasStarted, setHasStarted ] = React.useState(false);
  const [ players, setPlayers ] = React.useState<Player[]>([{
    id: Math.random().toString(),
    name: 'Josh',
    stack: 1000,
    seat: 1
  }, {
    id: Math.random().toString(),
    name: 'John',
    stack: 1000,
    seat: 2
  }]);

  const [ currentHand, setCurrentHand ] = React.useState<Hand>(null);

  function onStart(): void {
    setHasStarted(true);
    setCurrentHand(getNewHand(players));
  }

  return (
    <div className='position-relative'>
      <Table />
      {players.map(p => <Seat key={p.id} player={p} hand={currentHand?.players[p.id]} />)}

      {!hasStarted && (
        <button className='btn btn-dark' onClick={onStart}>Start</button>
      )}
    </div>
  );
}

export default App;
