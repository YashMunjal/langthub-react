import React from 'react';
import '../App.css';

const repos = ({name})=>{
    const repoRequest=`https://api.github.com/users/${name}/repos`
    

    return(
        <div className="repo-area">
            <ol className="repos-list">
                   
                </ol>
        </div>
    );
}

export default repos;