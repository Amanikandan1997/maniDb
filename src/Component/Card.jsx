import React from 'react';
// import '../App.css';
import "./Card.css"
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'



function Card({movie}) {
    const{id,poster_path,overview,vote_average,vote_count,title}=movie

    const images1= poster_path ? `https://image.tmdb.org/t/p/original${poster_path}`:"data:image/jpeg;base64,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"
  return (
 
//       <div className="col">
//       <div className="card" style={{ width: '18rem', height:'40rem' }}>
//       <img 
//   src={images1 ||<Skeleton/> }
//   className="card-img-top img-fluid" 
//   alt="..." 
//   style={{
//     height: "400px", 
//     objectFit:"fill"
//   }} 
// />

//           <div className="card-body" key={id}>
//             <h5 className="card-title text-center">{title ||<Skeleton/> }</h5>
//             <p className='card-text'  style={{
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     display: "-webkit-box",
//     WebkitLineClamp: 2, /* Number of lines to show */
//     WebkitBoxOrient: "vertical"
//   }}>{overview || Skeleton }</p>
//             <div className='d-flex justify-content-between align-items-center'>
//                 <Link to={`/movie/${id}`} className='btn btn-sm btn-outline-danger stretched-link'> Read More
//                 </Link>
//                 <i class="bi bi-star-fill text-warning"></i>{vote_average ||<Skeleton/> }  {vote_count ||<Skeleton/>}
//             </div>
//           </div>
//       </div>
//   </div>
<div className="parent">
<p className="card-title">{title ||<Skeleton/> }</p>
  <div className="card">

  <img 
  src={images1 ||<Skeleton/> }
   className="card-img-top img-fluid" 
  alt="..." 
   style={{
    height: "300px", 
     objectFit:"fill"
   }} 
 />
 
      <div className="content-box">
        
      <strong style={{color:"red"}}>{title ||<Skeleton/> }</strong>
          
              <p className='card-content'  style={{
    overflow: "hidden",
     textOverflow: "ellipsis",
     display: "-webkit-box",
     WebkitLineClamp: 2, /* Number of lines to show */
     WebkitBoxOrient: "vertical"
   }}>{overview || Skeleton }</p>
          
          
          <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/movie/${id}`} className='btn btn-sm btn-outline-danger stretched-link'> Read More
                </Link>
                <i class="bi bi-people-fill">{vote_count ||<Skeleton/>} Review </i>  
            </div>
      </div>
    
      <div className="date-box">
        
         
  <i class="bi bi-star-fill text-warning"></i>  {vote_average ||<Skeleton/> }     
      </div>
      
    
  </div>
</div>

   
  );
}

export default Card;
