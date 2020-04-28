import React from 'react';
import '../App.css';

const profileCard = ({ name, dp, bio }) => {
    return (
        <div className="profile-card">
            <div className="wrapper">
                <div className="profile">
                    <img alt="profile" src={dp} className="thumbnail"></img>
                    <h2 className="name">{name}</h2>
                    <p className="description">{bio}</p>
                    <button type="button" className="btn" >Check Repos</button>
                </div>
                <p className="language">Top Languages</p>
                <div className="social-icons">
                    <div className="icon">
                        <a href=""></a>
                        <h5>12.8k</h5>
                    </div>

                    <div className="icon">
                        <a href="#"></a>
                        <h5>12.8k</h5>
                    </div>

                    <div className="icon">
                        <a href="#"></a>
                        <h5>12.8k</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default profileCard;


