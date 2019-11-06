const initialState = {
    userData: {},
    isFetching: false,
    isError: false
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER":
          return Object.assign({}, state, {
            isFetching: true,
            userData: {},
            isError: false
          });
        case "FETCHED_USER":
          return Object.assign({}, state, {
            userData: action.data,
            isFetching: false,
            isError: false
          });
        case "RECEIVE_ERROR":
          return Object.assign({}, state, {
            isError: true,
            isFetching: false
          });
        default:
          return state;
    }
  };
  
  export default asyncReducer;