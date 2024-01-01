import React from 'react';
import './Banner.css';
import api from '../../Api/Api';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { FiPlus } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";

const Banner = () => {
    const [movie, setMovie] =useState([]);

    useEffect(() => {
        const fetchData = async  () => {
            const response = await axios.get(
                `${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`
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
    <header className="banner" 
     style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: 'center center'
     }}
    >
        <div className="banner-contents">
            <h1 className="banner-title">
                {movie?.title || movie?.name || movie?.original_name }
            </h1>
            <h4 className='banner-lang'>
                2023 .2h 44m .4Langaues
             </h4>
           
            <h1 className="banner-description">
                {truncate(movie?.overview,150)}
            </h1>
            <h4 className='banner-genres'>
                Action || Drama || Crime || Comdey  
            </h4>
            <div className="banner-buttons">
                <button className="banner-button play-btn"><IoMdPlay/> Watch Now</button>
                <button className="banner-button plus-btn"><FiPlus /></button>
            </div>
        </div>
        <div className="banner-fadeBottom">

        </div>

    </header>
  )
}

export default Banner