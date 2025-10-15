import React from 'react'
import Header from './Header'
import MovieCarousel from '../Component/MovieCarousel'
import MovieItem  from '../Component/MovieItem'
import TvShows from '../Component/TvShows'
import Theather from '../Component/Theather'
import Footer from '../Component/Footer'
import TvShowdetail from '../Pages/TvShowdetail'

const Home = () => {
  return (
    <div>
      <Header />
      <MovieCarousel/>
      <MovieItem/>
      <TvShows />
      <Theather/>
      <Footer/>
      
      

    </div>
  )
}

export default Home
