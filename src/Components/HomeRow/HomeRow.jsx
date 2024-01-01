import './HomeRow.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomeRow = ({title, fetchUrl}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`
      ${process.env.REACT_APP_API}${fetchUrl}
      `)
      setData(response.data.results)
      return response
    };
    fetchData()
    
}, [])
console.log('data', data)
  return (
    <div className='homerow'>
         <h1>{title}</h1>
       <div className="movie-list">
       {
        data && data.map((movie) => {
          return <img 
          key={movie.id}
          className='movie-content'
           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
           width={200}
           height={200}
            alt={movie.name} />
        })
       }
       </div>
    </div>
  )
}

export default HomeRow
