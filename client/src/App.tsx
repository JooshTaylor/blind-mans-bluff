import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { HomeView } from './views/HomeView';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
