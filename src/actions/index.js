import axios from 'axios'



export const showRepo=(e)=>async dispatch=>{
    const repoRequest=`https://api.github.com/users/${e}/repos`;
    const res=await axios.get(repoRequest)
    console.log(e)
    dispatch({
        type: 'CLICKED',
        payload: res.data
      });
};