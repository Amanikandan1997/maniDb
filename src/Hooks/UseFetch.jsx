import React, { useEffect, useState } from 'react'

export const UseFetch =(apiPath, queryTerm="") => {
    const [data,setData]=useState([]);
    const Key = import.meta.env.VITE_API_KEY;
    const Url = `https://api.themoviedb.org/3/${apiPath}?api_key=${Key}&query=${queryTerm}`;

    useEffect(()=>{
        async function fetchMovies() {
            fetch(Url)
            .then((res)=>res.json())
            .then((jsonData)=>setData(jsonData.results))
        }
        fetchMovies();

       
    },[Url]);

  return {data};
};