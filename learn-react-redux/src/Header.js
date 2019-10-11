import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from './actions';

import Button from 'react-bootstrap/Button';

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
        {isLoggedIn 
            ? 
                <Button onClick={() => dispatch(signOut())}>
                    Logout
                </Button>
            :
                <Button onClick={() => dispatch(signIn())}>
                    Login
                </Button>
        }
        </React.Fragment>
    )
}

export default Header;