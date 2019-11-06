import counterReducer from './counter';
import loggedInReducer from './loggedIn';
import asyncReducer from './asyncReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedInReducer,
    gitGetch: asyncReducer
});

export default allReducers;