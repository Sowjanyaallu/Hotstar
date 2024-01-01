import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DisplayDetails.css'
import { FiPlus } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";

const DisplayDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/movie/${movieId}?api_key=fe7322795a36a6bf935318d17cab2a78`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const truncate = (str ,n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <header className="display-details" 
    style={{
       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}")`,
       backgroundSize: "cover",
       backgroundPosition: 'center center'
    }}>
     <div className="display-content">
            <h1  className="display-titles" >
                {movieDetails.title || movieDetails.name || movieDetails.original_name}
            </h1>
             <h4 className='display-lang'>
                2023 .2h 44m .4Langaues
             </h4>
           
            <h1 className='display-description' >
                {truncate(movieDetails.overview,150)}
            </h1>
            <h4 className='display-genres'>
                Action || Drama || Crime || Comdey   
            </h4>
            <div className="display-buttons">
                <button className='display-button btn'><IoMdPlay />watch Now</button>
                <button className='display-button btn-btn'><FiPlus /></button>
            </div>
      </div>
      <div className="display-fadeBottom">
       </div>
    </header>
  );
};

export default DisplayDetails;




