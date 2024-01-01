import React from 'react'
import MovieRow from '../Components/MovieRow/MovieRow';
import movieApi from '../Api/MovieApi';
import './CSS/Movie.css'
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';


const Movies = () => {
  return (
    <div className='movies'>
      <Banner />
       <MovieRow title='Top Rated' fetchUrls={movieApi.fetchTopRated} />
       <MovieRow title='Originals' fetchUrls={movieApi.fetchNetflixOriginals} />
       <MovieRow title='Trending' fetchUrls={movieApi.fetchTrending} />
       <MovieRow title='Crime Movies' fetchUrls={movieApi.fetchCrimeMovies} />
       <MovieRow title='Family Movies' fetchUrls={movieApi.fetchFamilyMovies} />
       <MovieRow title='Thriller' fetchUrls={movieApi.fetchThrillerMovies} />
       <MovieRow title='Adventure' fetchUrls={movieApi.fetchAdventure} />
       <MovieRow title='Drama' fetchUrls={movieApi.fetchDramaMovies} />
       <MovieRow title='Horror' fetchUrls={movieApi.fetchHorrorMovies} />
       <MovieRow title='Fantasy' fetchUrls={movieApi.fetchFantasyMovies} />
       <Footer />
    </div>
  )
}

export default Movies