import React, { useEffect, useState,useRef} from 'react';
import './App.css';
import axios from 'axios';
import Repos from './components/reposArea'

function App() {
  //Set states
  const [profile, setProfile] = useState([]);
  const [search, setSearch] = useState('');
  const [profilequery, setQuery] = useState('');
  const [refresh, doRefresh] = useState(0);
  //api endpoints
  
  const client_id= '351ee579f0e3cda091cc';
  const client_secret= '7e37d1b77e3c0b9000d7d4b7918c2ce965309b4c'
  const profileRequest = `https://api.github.com/users/${profilequery}?client_id=${client_id}&client_secret=${client_secret}`

  //getting profile
  const isFirstRun = useRef(true);
  useEffect(() => {
    if(isFirstRun.current)
    {
      isFirstRun.current=false;
      setQuery('yashmunjal');
      return;
    }
    doRefresh(0);
    getProfiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilequery]);

  //Get profiles

  const getProfiles = async () => {
    const response = await axios.get(profileRequest,{
      headers: {
        "Content-Type": "application/json"
    },
    });
    setProfile(response.data);
    console.log(response);
  }

  //update search
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  //Get search
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }




  //Main app
  return (
    <div className="App">
    <h1 className="main-title">Lang-thub </h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="content">
        <div className="profile-card">
            <div className="wrapper">
                <div className="profile">
                    <img alt="profile" src={profile.avatar_url} className="thumbnail"></img>
                    <h2 className="name">{profile.login}</h2>
                    <p className="description">{profile.bio}</p>
                    <button type="button" onClick={()=>doRefresh(refresh+1)} className="btn">Check Repos</button>
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
        <Repos name={profile.login} refresh={refresh} id={client_id} secret={client_secret}>
        </Repos>
      </div>  
    </div>
  );
}

export default App;
