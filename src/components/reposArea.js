import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Repos = ({ name, refresh, id, secret }) => {
    const showHide = () => {
    }



    const reposLink = `https://api.github.com/users/${name}/repos?client_id=${id}&client_secret=${secret}&per_page=20&page=1`
    const [repos, setrepos] = useState([]);

    const showRepos = async () => {
        const response = await axios.get(reposLink, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        setrepos(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        showHide(); //children function of interest
        showRepos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    return (
        <div className="repo-area">
            <ul className="repos-list">
                <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                            <h2 className="card_title">Card Grid Layout</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button className="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                            <h2 className="card_title">Card Grid Layout</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button className="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                            <h2 className="card_title">Card Grid Layout</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button className="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Repos;