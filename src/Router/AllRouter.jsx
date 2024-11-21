import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import MovieList from '../Pages/MovieList'
import MovieDetails from '../Pages/MovieDetails'
import Search from '../Pages/Search'

function AllRouter() {
  return (
    <div>
    <Header/>
        <Routes>
            <Route path="/" element={<MovieList title="Your Guided to Great Movies" apiPath="movie/now_playing"/>} />
            <Route path="movies/upcoming" element={<MovieList title="Upcoimng Movies" apiPath="movie/popular"/>} />
            <Route path="movies/top" element={<MovieList title="TopRated Movies" apiPath="movie/top_rated"/>} />
            <Route path="movies/popular" element={<MovieList title="Popular Movies" apiPath="movie/upcoming"/>} />
            <Route path='movie/:id'element={<MovieDetails />}/>
            <Route path='search'element={<Search apiPath="search/movie" />}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRouter