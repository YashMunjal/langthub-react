import React, { useEffect, useState,useRef} from 'react';
import ProfileCard from './components/profileCard'
import './App.css';
import axios from 'axios';
import Repos from './components/reposArea'
function App() {
  //Set states
  const [profile, setProfile] = useState([]);
  const [search, setSearch] = useState('');
  const [profilequery, setQuery] = useState('');

  //api endpoints
  const profileRequest = `https://api.github.com/users/${profilequery}`

  //getting profile
  const isFirstRun = useRef(true);
  useEffect(() => {
    if(isFirstRun.current)
    {
      isFirstRun.current=false;
      setQuery('yashmunjal');
      return;
    }
    getProfiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilequery]);

  //Get profiles

  const getProfiles = async () => {
    const response = await axios.get(profileRequest,{
      headers: {
        Authorization: `Bearer 1873053e3074d5dd48a987420994b84d49f090ea`,
        "Content-Type": "application/json"
    },
    });
    setProfile(response.data);
    console.log(response.data);
    
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
    <h1 className="main-title">Lang-thub</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="content">
      <ProfileCard name={profile.login} dp={profile.avatar_url} bio={profile.bio}></ProfileCard>
      <Repos></Repos>
      </div>  
    </div>
  );
}

export default App;
