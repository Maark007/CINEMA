import React, { useState } from 'react'
import Link from 'next/link'
import api from '../../services/api'

import Footer from '../../components/footer'
import Header from '../../components/header'

import Player from '../../assets/player.svg'
import Star from '../../assets/star.svg'
import ErrorSvg from '../../assets/error.svg'

import {
  Main,
  TvShowContent,
  Button,
  Framer,
  Cast,
  GalleryContent,
  Recommended
} from '../../styles/pages/tvshow'
import { GetStaticPaths, GetStaticProps } from 'next'
import { moviesIds } from '../../utils/movies'

type TvShowProps = {
  backdrop_path: any
  title: string
  overview: string
  vote_average: number
  poster_path?: string
  id?: number
}

type TvShowPropsImage = {
  key: string
  file_path: string
}

type CastProps = {
  character: string
  name: string
  profile_path: string
}

type RecommendedProps = {
 id: number
 poster_path: string
}

const Movies = (props: any) => {
  const [appearVideo, setAppearVideo] = useState(false)

  return (
    <Main>
      <Header appearInput={true} color={0} />
      {props.tvShow.map((show: TvShowProps, i: number) => (
        <TvShowContent image={String(props.images.backdrops[0].file_path)}>
          <div key={i} className="background-shadow">
            <div className="player-box">
              <img
                src={Player}
                alt="player-img"
                draggable="false"
                onClick={() => setAppearVideo(true)}
              />
              <div className="button-box">
                <Button onClick={() => setAppearVideo(true)}>Trailer</Button>
              </div>
            </div>
            {appearVideo && (
              <Framer>
                <div className="title-box">
                  <span>{show.title}</span>
                  <img
                    onClick={() => setAppearVideo(false)}
                    src={ErrorSvg}
                    alt="player-img"
                    draggable="false"
                  />
                </div>
                <iframe
                  allowFullScreen
                  src={`https://www.youtube.com/embed/${props.tvShowVideos[0]?.key}`}
                />
              </Framer>
            )}
            <div className="description-box">
              <h1>{show.title}</h1>
              <div className="review-box">
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <span>{show.vote_average}</span>
              </div>
              <p className="dissapear">{show.overview}</p>
            </div>
          </div>
        </TvShowContent>
      ))}
      <Cast>
        <h1>CAST</h1>
        <div className="cast-container scroll">
          {props.cast
            .filter((e: CastProps) => !!e.profile_path)
            .map((people: CastProps, i: number) => (
              <div className="image-box" key={i}>
                <img
                  draggable="false"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${people.profile_path}`}
                />
                <div className="names-box">
                  <h3>{people.name}</h3>
                  <span>{people.character}</span>
                </div>
              </div>
            ))}
        </div>
      </Cast>
      <GalleryContent>
        <h1>GALLERY</h1>
        <div className="image-container scroll">
          {props.images.backdrops
            .filter((e: TvShowPropsImage) => !!e.file_path)
            .map((image: TvShowPropsImage, i: number) => (
              <img
                key={i}
                src={`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${image.file_path}`}
              />
            ))
            .slice(0, 11)}
        </div>
      </GalleryContent>
      <Recommended>
        <h1>Recommended</h1>
        <div className="show-content scroll">
          {props.recommendations
            .filter((e: RecommendedProps) => !!e.poster_path)
            .map((e:  RecommendedProps, i: number) => (
              <Link href={`/movies/${e.id}`}>
                <img
                  key={i}
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${e.poster_path}`}
                />
              </Link>
            ))}
        </div>
      </Recommended>
      <Footer />
    </Main>
  )
}

export default Movies

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = moviesIds.map((id: any) => {
    return { params: { id: id.toString() } }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.id) {
    throw new Error('Missing param id.')
  }
  const { id } = context.params

  const tvShowDetails = await api.get(`/movie/${id}`)
  const tvShowVideos = await api.get(`/movie/${id}/videos`)
  const images = await api.get(`/movie/${id}/images`)
  const cast = await api.get(`/movie/${id}/credits`)
  const similars = await api.get(`/movie/${id}/similar`)
  const recommendations = await api.get(`/movie/${id}/recommendations`)

  function recommendedMovies() {
    if (similars.data.results.length !== 0) {
      return similars.data.results
    } else recommendations.data.results
  }

  return {
    props: {
      tvShow: [tvShowDetails.data],
      tvShowVideos: tvShowVideos.data.results,
      images: images.data,
      cast: cast.data.cast,
      recommendations: recommendedMovies()
    }
  }
}
