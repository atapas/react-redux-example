import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions';

import GamePage from './GamePage';

const App = () => {
  
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(counter, isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <GamePage />
    </div>  
  );
}

export default App;
