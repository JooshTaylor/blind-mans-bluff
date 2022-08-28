import React from 'react';
import { Card } from './components/card/Card';
import { CardSuit } from './types/CardSuit';
import { CardValue } from './types/CardValue';

function App() {
  return (
    <div>
      <Card suit={CardSuit.Heart} value={CardValue.Jack} />
    </div>
  );
}

export default App;
