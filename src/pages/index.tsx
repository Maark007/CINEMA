import React, { useEffect, useState } from 'react'
import api from '../services/api'
import Link from 'next/link'

import Header from '../components/header'
import Previous from '../assets/previous.svg'
import Skip from '../assets/skip.svg'
import Footer from '../components/footer'

import {
  Main,
  CaroulselBG,
  Carousel,
  TvShowsContainer,
} from '../styles/pages/home'

type Series = {
  backdrop_path: any
  name: string
  overview: string
  poster_path: string
  id: number
}

type Movies = {
  title: string
  backdrop_path: any
  poster_path: string
  id: number
}

type TrendingsProps = {
  title: string
  poster_path: string
  name: string
}

const Home: React.FC = () => {
  const [tvShows, setTvShows] = useState<Series[]>([])
  const [movieData, setMovieData] = useState<Movies[]>([])
  const [actualMovie, setActualMovie] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const series = await api.get('/tv/popular')
      const theathers = await api.get('/movie/popular')

      setTvShows(series.data.results)
      setMovieData(theathers.data.results)
    }
    loadData()
  }, [actualMovie])

  return (
    <Main>
      {
        tvShows.map((mv) => (
          <CaroulselBG image={mv.backdrop_path} key={mv.id}>
            <Header color={1} appearInput={true} />
            <Carousel>
              <div className="image-container">
                <div className="image-description">
                  <h1>{mv.name}</h1>
                  <div className="description dissapear">
                    <span>{mv.overview}</span>
                  </div>

                  <Link href={`/tvshow/${mv.id}`}>
                    <button>DETAILS</button>
                  </Link>
                </div>
                <div className="arrows">
                  <img
                    onClick={() =>
                      setActualMovie((prev) => (prev > 0 ? prev - 1 : 0))
                    }
                    src={Previous}
                    className="icon"
                  />
                  <img
                    onClick={() =>
                      setActualMovie((prev) => (prev < 19 ? prev + 1 : 19))
                    }
                    src={Skip}
                    className="icon"
                  />
                </div>
                <div>
                  <img
                    className="banner dissapear"
                    src={`https://image.tmdb.org/t/p/w500/${mv.poster_path}`}
                  />
                </div>
              </div>
            </Carousel>
          </CaroulselBG>
        ))[actualMovie]
      }
      <div className="tvshow-title">
        <span>Tv Shows</span>
      </div>
      <div className="movies-flex">
        {movieData
          .map((movie, i) => (
            <TvShowsContainer image={movie.backdrop_path} key={i}>
              <div className="show-div">
                <div className="image-container">
                  <div className="title">
                    <h3>{movie.title}</h3>
                  </div>
                  <Link href={`/movies/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                  </Link>
                  <button>SEE ALL</button>
                </div>
              </div>
            </TvShowsContainer>
          ))
          .splice(0, 3)}
      </div>
      <Footer />
    </Main>
  )
}

export default Home
