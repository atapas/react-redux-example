const loggedInReducer = (state = false, action) => {
    switch(action.type) {
        case 'Sign-In':
            state = true;
            return state;
        case 'Sign-Out':
            state = false;
            return state;
        default:
            return state;
    }
}

export default loggedInReducer;