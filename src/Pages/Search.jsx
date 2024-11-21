import React, { useEffect } from 'react'


import Card from '../Component/Card';
import { UseFetch } from '../Hooks/UseFetch';
import { useSearchParams } from 'react-router-dom';

function Search({apiPath}) {
  const[searchparams]=useSearchParams();
 const queryTerm = searchparams.get("q");
 const{data: movies}=UseFetch(apiPath,queryTerm);
 useEffect(()=>{
  document.title = `search result for ${queryTerm}`;
 });
  return (
    <main className='container'>
      <h1>Search Result</h1>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 py-2">
    {movies.map((movie)=>{
        return <Card key={movie.id} movie={movie}/>
    })}
    </div>
    </main>
  )
}

export default Search