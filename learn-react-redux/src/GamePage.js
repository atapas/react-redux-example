import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

import Header from './Header';
import Footer from './Footer';

import Card from 'react-bootstrap/Card';

const GamePage = () => {
    const counter = useSelector(state => state.counter);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    
    return (
        <Card>
            <Card.Header>
                <Header />
            </Card.Header>
            <Card.Body>
                <Card.Title>Play the Counter Game</Card.Title>
                {isLoggedIn 
                    ?
                    <Card.Text>
                        <span>Counter is: { counter }</span>&nbsp;&nbsp;
                        <Card.Link title="Count Up" href="#" onClick={() => dispatch(increment())}>
                            &#8593;
                        </Card.Link>
                        <Card.Link title="Count Down" href="#" onClick={() => dispatch(decrement())}>
                            &#8595;
                        </Card.Link>
                    </Card.Text>
                    :
                    <Card.Text>
                        <span><b>Login</b> to play the counter game!</span>
                    </Card.Text>  
                }
            </Card.Body>
            <Card.Footer>
                <Footer />
            </Card.Footer>
        </Card>
    )
}

export default GamePage;