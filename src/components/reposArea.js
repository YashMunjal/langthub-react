import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Repos = ({ name, refresh }) => {
    const showHide = () => {
        if(refresh===0){
            document.querySelector('ul').style.display='none' ;
        }
        else{
            document.querySelector('ul').style.display='block';
        }
    }

    const [counter,setcounter]=useState(1);
    const reposLink = `https://api.github.com/users/${name}/repos?per_page=10&page=${counter}`
    const [repos, setrepos] = useState([]);

    const showRepos = async () => {
        const response = await axios.get(reposLink, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        setrepos(response.data);
        console.log(response);
    }

    useEffect(() => {
        showHide(); //children function of interest
        showRepos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh,name]);

    return (
        <div className="repo-area">
            <ul className="repos-list">
                {repos.map(repo=>(
                    <li key={repo.id} className="cards_item">
                    <div className="card">
                        <div className="card_content">
                            <h2 className="card_title">{repo.name}</h2>
                            <p className="card_text">{repo.description}</p>
                            <button className="btn card_btn">Show language stats</button>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Repos;