import React from 'react';
import { useFetch } from '../hooks/useFetch';

export function HomeView(): JSX.Element {
  const lobbies = useFetch({ path: '/api/lobbies' });

  console.log(lobbies);

  return (
    <div>
      Home - lobby selector
    </div>
  );
}