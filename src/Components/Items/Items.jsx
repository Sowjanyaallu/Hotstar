import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './Items.css'
import movieApi from '../../Api/MovieApi';

const Items = () => {
    const [movie, setMovie] =useState([]);
    useEffect(() => {
        const fetchData = async  () => {
            const response = await axios.get(
                `${process.env.REACT_APP_API}${movieApi.fetchFamilyMovies}`
            );
            setMovie(response.data.results[Math.floor(Math.random()* response.data.results.length -1)]);
            return response;

        }
        fetchData();

    }, []);

    const truncate = (str ,n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <header className="items" 
    style={{
       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
       backgroundSize: "cover",
       backgroundPosition: 'center center'
    }}
   >
       <div className="items-contents">
           <h1 className="items-title">
               {movie?.title || movie?.name || movie?.original_name }
           </h1>
           <div className="items-buttons">
               <button className="item-button">Play</button>
               <button className="item-button">My List</button>
           </div>
           <h1 className="items-description">
               {truncate(movie?.overview,150)}
           </h1>
       </div>
       <div className="items-fadeBottom">

       </div>

   </header>
  )
}

export default Items