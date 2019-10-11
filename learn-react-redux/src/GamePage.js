import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

import Header from './Header';
import Footer from './Footer';

const GamePage = () => {
    const counter = useSelector(state => state.counter);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    
    return (
        <React.Fragment>
            <Header />
            <div>
            {isLoggedIn 
                ?
                <div>
                    <h1>Play Counter Game: { counter }</h1>
                    <button onClick={() => dispatch(increment())}>
                        +
                    </button>
                    <button onClick={() => dispatch(decrement())}>
                        -
                    </button>
                </div>
                :
                <div>
                    <span>Login to play the counter game!</span>
                </div>  
            }
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default GamePage;