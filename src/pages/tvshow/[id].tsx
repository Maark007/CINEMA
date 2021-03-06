import React, { useState } from 'react'
import api from '../../services/api'
import Link from 'next/link'
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
import { tvShowsIds } from '../../utils/tvshows'

type TvShowDetailsProps = {
  name: string
  vote_average: Number
  overview: string
}

type CastProps = {
  profile_path: string
  name: string
  character: string
}

type RecommendationsTypes = {
  poster_path: string
  id: number
}

type ImagesTypes = {
  id: number
  file_path: string
}

const Movies = (props: any) => {
  const [appearVideo, setAppearVideo] = useState(false)

  return (
    <Main>
      <Header color={0} appearInput={true} />
      {props.tvShowDetails.map((show: TvShowDetailsProps, i: number) => (
        <TvShowContent image={props.images.backdrops[0].file_path}>
          <div key={i} className="background-shadow">
            <div className="player-box">
              <img
                loading="lazy"
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
                  <span>{show.name}</span>
                  <img
                    loading="lazy"
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
              <h1>{show.name}</h1>
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
                  loading="lazy"
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
            .map((image: ImagesTypes, i: number) => (
              <img
                loading="lazy"
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
          {props.recommendations.map((e: RecommendationsTypes, i: number) => (
            <Link href={`/tvshow/${e.id}`}>
              <img
                loading="lazy"
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
  const paths = tvShowsIds.map((id: any) => {
    return { params: { id: id.toString() } }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.id) {
    throw new Error('missing param id')
  }
  const { id } = context.params

  const tvShowDetails = await api.get(`/tv/${id}`)
  const tvShowVideos = await api.get(`/tv/${id}/videos`)
  const cast = await api.get(`/tv/${id}/credits`)
  const recommendations = await api.get(`/tv/${id}/recommendations`)
  const images = await api.get(`/tv/${id}/images`)
  return {
    props: {
      tvShowDetails: [tvShowDetails.data],
      tvShowVideos: tvShowVideos.data.results,
      cast: cast.data.cast,
      recommendations: recommendations.data.results,
      images: images.data
    }
  }
}
