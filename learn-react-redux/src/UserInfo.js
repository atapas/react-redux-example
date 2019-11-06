import React from 'react';

const UserInfo = (props) => {
    return(
        <div className="user-info">
            <div className="avatar">
                <img src={props.user.avatar_url} alt="avatar" width="250px" />
            </div>
            <div className="content">
                <h1>{props.user.name}</h1>
                <p>
                    <strong>Bio: </strong>
                    {props.user.bio}
                </p>
                <p>
                    <strong>Location:</strong> {props.user.location}
                </p>
                <p>
                    <strong>Followers:</strong> {props.user.followers}
                </p>
                <p>
                    <strong>Following:</strong> {props.user.following}
                </p>
                <p>
                    <strong>Blog:</strong> {props.user.blog}
                </p>
            </div>
        </div>
    )
};

export default UserInfo;