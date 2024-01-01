import React, { useEffect, useState } from 'react'
import './MovieRow.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MovieRow = ({title,fetchUrls}) => {
    const[movies, setMovies] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get(`${process.env.REACT_APP_API}${fetchUrls}`)
            setMovies(resp.data.results)
            return resp
        }
        fetchData();
    } , [])
    console.log('movies',movies)
  return (
    <div className='movie-row'>
        <h1>{title}</h1>
        <div className="movie-row-list">
        {movies && movies.map((movie) => {
                return <Link to={`/movies/${movie.id}`} key={movie.id}> <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className='movies-cotents'
                 alt={movie.name} /></Link>
            })}
        </div>

    </div>
  )
}

export default MovieRow