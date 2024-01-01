import React from 'react'
import DisplayDetails from '../Components/DisplayDetails/DisplayDetails'
import './CSS/MovieDetails.css'
import RelatedMovies from '../Components/RelatedMovies/RelatedMovies'
import Footer from '../Components/Footer/Footer'



const MovieDetails = () => {
  return (
    <div className='movieDetails'>
       <DisplayDetails />
       <RelatedMovies />
       <Footer />
    </div>
  )
}

export default MovieDetails


