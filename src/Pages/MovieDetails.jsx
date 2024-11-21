import { Button } from 'bootstrap';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

function MovieDetails() {

  
    const[movie,setMovie]= useState([]);
    const Key = import.meta.env.VITE_API_KEY;
    const params = useParams();
    const Url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${Key}`;
       const images1=movie. poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` :"data:image/jpeg;base64,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"

    useEffect(()=>{
        async function fetchMovies() {
            fetch(Url)
            .then((res)=>res.json())
            .then((jsonData)=>setMovie(jsonData));
        }
        fetchMovies();

        
    },[]);
    useEffect(()=>{
        document.title = `${movie.title}`;
    })
  return (
    <>
    <main className="container">
    <h2 className='text-white'>{movie.title}</h2>
  
        <div className="row">
        <div className="card" style={{ width: '18rem', padding:"20px"}}>
           
            
            <img 
  src={images1}
  className="card-img-top img-fluid" 
  alt="..." 
  style={{
    height: "400px", 
    objectFit:"fill"
  }} 
/>
<a href={`https://www.imdb.com/title/${movie.imdb_id}/`} className='btn btn-warning mt-3 ' target='_blank' > View IMDB Rating</a>
            </div>
            <div className="col-md-8">
            <h5 className='text-white'>Movie Title : {movie.title}</h5>
            <p>
                <h6>Description</h6>
                {movie.overview}
            </p>
            {movie.genres?(<p className='d-flex gap-2 align-items-center ' >
                <h6>Genres :</h6>{movie.genres.map((genres)=>(
                    <span className='badge bg-danger ' key={genres.id}>{genres.name}</span>
                ))} 
            </p>):""}
            <h6>Rating: <i class="bi bi-star-fill text-warning"></i>  {movie.vote_average} / <i class="bi bi-people-fill"></i> {movie.vote_count} Reviews</h6>
            <table className="table table-dark table-hover w-50 mt-2">
                <tbody>
                    <tr>
                    <th>RunTime</th>
                    <td>{movie.runtime} Min</td>
                    </tr>
                    <tr>
                    <th>Release Date</th>
                    <td>{movie.release_date}</td>
                    </tr>
                       <tr>
                       <th>Budjet</th>
                       <td>{movie.budget}</td>
                       </tr>
                        <tr>
                        <th>Revenue</th>
                        <td>{movie.revenue}</td>
                        </tr>
                      <tr>
                       <th>
                       Release Date:
                       </th>
                       <td>{movie.release_date}</td>
                      </tr>
<tr>
<th>Language</th>
<td>{movie.original_language}</td>
</tr>
                 
                </tbody>
            </table>
            
            <a href="/" className='btn btn-warning mt-3 ' > Back To Home </a>
            </div>
        </div>
    </main>
    </>
  )
}

export default MovieDetails