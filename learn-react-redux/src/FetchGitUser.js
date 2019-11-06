import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { thunk_action_creator } from './actions/fetchActions';

import UserInfo from './UserInfo';

const FetchGITUser = () => {
    const gitGetch = useSelector(state => state.gitGetch);
    console.log(gitGetch);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target[0].value;
        console.log(username);
        dispatch(thunk_action_creator(username));
        console.log(gitGetch);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="title">Enter the Github Username</h2>
                <input
                    type="text"
                    placeholder="Enter Github Username"
                    required
                />
                <button className="button">Submit</button>
            </form>

            {gitGetch.isFetching ? <h3>Loading...</h3> : null}
            {gitGetch.isError ? (
                <h3 className="error">No such User exists.</h3>) : null}
            {Object.keys(gitGetch.userData).length > 0 ? (
                <UserInfo user={gitGetch.userData} />
            ) : null}
        </div>
    );
};

export default FetchGITUser;