import React from 'react'
import Banner from '../Components/Banner/Banner'
import HomeRow from '../Components/HomeRow/HomeRow'
import api from '../Api/Api'
import './CSS/Home.css'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Banner />
        <HomeRow title='Top rated' fetchUrl={api.fetchTopRated} />
        <HomeRow title='Original' fetchUrl={api.fetchActionMovies} />
        <HomeRow title='Comdey' fetchUrl={api.fetchComdeyMovies} />
        <HomeRow title='Horror' fetchUrl={api.fetchHorrorMovies} />
        <HomeRow title='Series' fetchUrl={api.fetchDocumentaries} />
        <Footer />
    </div>
  )
}

export default Home
