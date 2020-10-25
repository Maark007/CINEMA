import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Pagination from '../../components/pagination'

import Header from '../../components/header'
import Footer from '../../components/footer'
import api from '../../services/api'
import Search from '../../assets/search.svg'
import Star from '../../assets/star.svg'

import { Main, Input, Content } from '../../styles/pages/movieslist'

type TvProps = {
  poster_path: string
  name: string
  vote_average: number
  id: number
  media_type: string
}

const TvList = () => {
  const [tvList, setTvList] = useState<TvProps[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, Setpage] = useState<number>(1)

  useEffect(() => {
    const loadData = async () => {
      const tvList = await api.get('/discover/tv', {
        params: { page: page }
      })
      if (searchQuery === '') setTvList(tvList.data.results)
    }
    loadData()
  }, [searchQuery, page])

  useEffect(() => {
    const searchAll = async () => {
      try {
        const search = await api.get('/search/tv', {
          params: {
            query: searchQuery
          }
        })
        setTvList(search.data.results)
      } catch {}
    }
    searchAll()
  }, [searchQuery])

  return (
    <Main>
      <Header color={3} appearInput={false} />
      <Content>
        <div className="input-content">
          <Input onChange={(e) => setSearchQuery(e.target.value)} />
          <img src={Search} alt="search" id="myimage" />
        </div>
        <div className="shows-box">
          {tvList.length ? (
            tvList
              .filter((e) => !!e.poster_path)
              .map((movie, i) => (
                <div className="box" key={i}>
                  <>
                    <Link href={`/tvshow/${movie.id}`}>
                        <img
                          loading="lazy"
                          className="poster-img"
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                        />
                    </Link>
                    <div className="title-box">
                      <h2>{movie.name}</h2>
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
        {!searchQuery &&  <Pagination page={page} setPage={Setpage} />}
      </Content>
      <Footer />
    </Main>
  )
}

export default TvList
