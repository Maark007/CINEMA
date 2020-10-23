import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Pagination from '../../components/pagination'

import Header from '../../components/header'
import Footer from '../../components/footer'
import api from '../../services/api'
import Search from '../../assets/search.svg'
import Star from '../../assets/star.svg'

import { Main, Input, Content } from '../../styles/pages/movieslist'

type MoviesProps = {
  poster_path: string
  title: string
  vote_average: number
  id: number
  media_type: string
}

const MoviesList = () => {
  const [moviesList, setMoviesList] = useState<MoviesProps[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const [page, Setpage] = useState<number>(1)

  useEffect(() => {
    const loadData = async () => {
      const moviesList = await api.get('/discover/movie', {
        params: { page: page }
      })
      if (searchQuery === '') setMoviesList(moviesList.data.results)
    }
    loadData()
  }, [searchQuery, page])

  useEffect(() => {
    const searchAll = async () => {
      try {
        const search = await api.get('/search/movie', {
          params: {
            query: searchQuery
          }
        })
        setMoviesList(search.data.results)
      } catch {}
    }
    searchAll()
  }, [searchQuery])

  return (
    <Main>
      <Header color={2} appearInput={false} />
      <Content>
        <div className="input-content">
          <Input onChange={(e) => setSearchQuery(e.target.value)} />
          <img src={Search} alt="search" id="myimage"/>
        </div>
        <div className="shows-box">
          {moviesList.length ? (
            moviesList
              .filter((e) => !!e.poster_path)
              .map((movie, i) => (
                <div className="box" key={i}>
                  <>
                    <Link href={`/movies/${movie.id}`}>
                      <img
                        loading="lazy"
                        className="poster-img"
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                      />
                    </Link>
                    <div className="title-box">
                      <h2>{movie.title}</h2>
                      <div className="rating-box">
                        <img src={Star} />
                        <span>{movie.vote_average}</span>
                      </div>
                    </div>
                  </>
                </div>
              ))
          ) : (
            <h3 className="no-movies">No movies Found</h3>
          )}
        </div>
        <Pagination page={page} setPage={Setpage} />
      </Content>
      <Footer />
    </Main>
  )
}

export default MoviesList
