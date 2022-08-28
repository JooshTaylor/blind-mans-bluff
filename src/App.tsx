import React from 'react';
import { Card } from './components/card/Card';
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
    stack: 1000
  }, {
    id: Math.random().toString(),
    name: 'Your mum',
    stack: 1000
  }]);

  const [ currentHand, setCurrentHand ] = React.useState<Hand>(null);

  function onStart(): void {
    setHasStarted(true);
    setCurrentHand(getNewHand(players));
  }

  return (
    <div>
      <Card suit={CardSuit.Heart} value={CardValue.Jack} />

      <button className='btn btn-dark' onClick={onStart}>Start</button>
    </div>
  );
}

export default App;
