import React, { useEffect, useState } from 'react';
import './RelatedMovies.css';
import movieApi from '../../Api/MovieApi';
import axios from 'axios';
//import api from '../../Api/Api';

const RelatedMovies = () => {
    const [relatedMovies , setRelatedMovies] = useState([])

    useEffect(() => {
        const fetchingData = async () => {
            const resp = await axios.get(`${process.env.REACT_APP_API}${movieApi.fetchCrimeMovies}`);
            setRelatedMovies(resp.data.results);
            return resp;
        }
        fetchingData();

    } , [])
    console.log('related' ,relatedMovies)
  return (
    <div className='related'>
        <h1>Related Movies</h1>
          <div className="related-movies">
            {relatedMovies && relatedMovies.map((related) => {
                return (
                    <img 
                    className='relate-img'
                    key={related.id}
                    src={`https://image.tmdb.org/t/p/w500/${related.poster_path}`} 
                    alt={related.name} />
                )
            })}
          </div>
          
    </div>
  )
}

export default RelatedMovies