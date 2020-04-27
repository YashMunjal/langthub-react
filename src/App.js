import React, { useEffect, useState,useRef} from 'react';
import ProfileCard from './components/profileCard'
import './App.css';

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
      return;
    }
    else{
    getProfiles();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilequery]);

  //Get profiles

  const getProfiles = async () => {
    const response = await fetch(profileRequest);
    const data = await response.json();
    setProfile(data);
    console.log(data);
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

      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <ProfileCard ></ProfileCard>
    </div>
  );
}

export default App;
