import React, { useEffect } from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Card from '../Component/Card';
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';
import { UseFetch } from '../Hooks/UseFetch';
import Skeleton from 'react-loading-skeleton'
import ccm from '../assets/23.jpg'

function MovieList({title,apiPath}) {


const {data: movies}=UseFetch(apiPath);//Router tittle Show browser page start
    useEffect(()=>{
        document.title = title;
    })
     //Router tittle Show browser page end
  return (
<>
<main className='container'>
{/* Your Guided to Great Movies only show banner setting start*/}
    {title== "Your Guided to Great Movies"?(
        <Carousel data-bs-theme="dark" className="p-3 w-100 " >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://xstreamcp-assets-msp.streamready.in/assets/ZEEFIVE/SERIES/66ff9070ee95db19b66ab359/images/FEATURE_BANNER_HD/FEATURE_BANNER_HD_xOps5VRYl_Airtel-Xstream_1920x548-(2).jpg"
          alt="First slide"
        />
         
        <Carousel.Caption>
          <h5 className='text-white ' style={{paddingtop:"180px"}}>

          ஐந்தாம் வேதம்</h5>
          {/* <p className='text-white'>
          ஐந்தாம் வேதம் என்பது நாகா இயக்கிய தமிழ் மொழி அறிவியல் புனைகதை புராண திரில்லர் தொடராகும்.</p> */}
          <button className='btn btn-danger '>
  <a 
    href='https://www.zee5.com/web-series/details/aindham-vedham/0-6-4z5632748/the-box/0-1-6z5632750' 
    style={{ textDecoration: 'none', color: 'inherit', }}
  >
    Explore Now
  </a>
</button>

        </Carousel.Caption>
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ccm}
          alt="Second slide"
        />
         
        <Carousel.Caption>
        <h5 className='text-white'>Operation Fortune</h5>
        {/* <p className='text-white'>Elite spy Orson Fortune must track down and stop the sale of a deadly new weapons technology wielded by billionaire arms broker Greg Simmonds. </p> */}
        <button className='btn btn-danger'>
  <a 
    href='https://www.dailymotion.com/video/x8lpbe3' 
    style={{ textDecoration: 'none', color: 'inherit', padding:"2px"}}
  >
    Explore Now
  </a>
</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.airtel.tv/unsafe/fit-in/1766x0/filters:format(webp)/https://image.airtel.tv/content/LIONSGATEPLAY/MOVIE/LIONSGATEPLAY_MOVIE_OPERATIONFORTUNERUSEDEGUERREY2023M/Operation_Fortune_7x2.png?o=production"
          alt="Second slide"
        />
         
        <Carousel.Caption>
        <h5 className='text-white'>Operation Fortune</h5>
        {/* <p className='text-white'>Elite spy Orson Fortune must track down and stop the sale of a deadly new weapons technology wielded by billionaire arms broker Greg Simmonds. </p> */}
        <button className='btn btn-danger'>
  <a 
    href='https://www.dailymotion.com/video/x8lpbe3' 
    style={{ textDecoration: 'none', color: 'inherit', padding:"2px"}}
  >
    Explore Now
  </a>
</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.airtel.tv/unsafe/fit-in/1766x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/LIONSGATEPLAY/MOVIE/672c9cb03f62001842e4e5f8/images/AFTERMATHY2017MHI_Airtel_stb_banner.jpg?o=production"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5 className='text-white'>Aftermath</h5>
          {/* <p className='text-white'>
          Roman, a construction worker, loses his wife and daughter in a devastating plane crash. He blames the air traffic controller, Jake Bonanos, who also struggles with the guilt of his mistake.
          </p> */}
          <button className='btn btn-danger'>
  <a 
    href='https://www.primevideo.com/detail/Aftermath/0MW8RMO0E6G36A05G3ZSOQMNTC' 
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    Explore Now
  </a>
</button>

        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.airtel.tv/unsafe/fit-in/1766x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/SONYLIV_VOD/MOVIE/66b4933c38176201e3cd1b05/images/turbo2_1920x548_clean_airtel_rectangle.jpg?o=production"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5 className='text-white'>ടർബോ </h5>
          {/* <p className='text-white'>
          വഴക്കുകളിൽ ഏർപ്പെടുന്ന ശീലമുള്ള ഇടുക്കിയിലെ ജീപ്പ് ഡ്രൈവറായ അരുവിപ്പുറത്ത് ജോസ് എന്ന ടർബോ ജോസ്, ചെന്നൈയിൽ ബാങ്ക് മാനേജരായ തൻ്റെ ഉറ്റ സുഹൃത്ത് ജെറിയെ കാമുകിയായ ഇന്ദുലേഖയുടെ വീട്ടുകാർ അയച്ച സഹായികൾ ആക്രമിച്ചതായി അറിയുന്നു. മറ്റൊരു ബാങ്കിൻ്റെ ബാങ്ക് മാനേജർ.</p> */}
          <button className='btn btn-danger'>
  <a 
    href='https://www.sonyliv.com/movies/turbo-1000285694' 
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    Explore Now
  </a>
</button>
 </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    ):""}
{/* Your Guided to Great Movies only show banner setting end*/}
<h5 className='py-2 text-danger text-bold'>{title ||<Skeleton/>}</h5>
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 py-2">
{movies.map((movie)=>{
    return <Card key={movie.id ||<Skeleton/>} movie={movie}/>
})}
</div>

    
    <img className='py-6 p-5'
          
          src='https://tpc.googlesyndication.com/simgad/12596190689736768451'
          alt=""
        />
         <img
          
          src='https://tpc.googlesyndication.com/simgad/12596190689736768451'
          alt=""
        />
  
    <div className="d-block justify-content-center px-6">
    <img
          
          src='https://tpc.googlesyndication.com/simgad/12231063263495703164
'
          alt=""
        />
    </div>
  


        <br/><br/>
        <img
          className="d-block w-100"
          src='https://www.behindwoods.com/tamil-movies/topbanners-photos/zebra-bottom-logo-photos-pictures-stills.jpg'
          alt=""
        />
          <br/><br/>
        <img
          className="d-block w-100"
          src='https://www.behindwoods.com/creatives/media/images/IndianClicks_GVega_BW_1055x45_04132024_1_2.gif'
          alt=""
        />
</main>
</>
  )
}

export default MovieList