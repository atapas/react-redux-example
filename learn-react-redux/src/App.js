import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions';

function App() {
  
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(counter, isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      
      {isLoggedIn 
        ?
        <div>
          <h1>Counter: { counter }</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <div>
            <button onClick={() => dispatch(signOut())}>Logout</button>
          </div>
        </div>
        :
        <div>
          <span>Login to play the counter game!</span>
          <button onClick={() => dispatch(signIn())}>Login</button>
        </div>  
        }
      
    </div>
  );
}

export default App;
