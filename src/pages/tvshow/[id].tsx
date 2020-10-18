import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Link from 'next/link'
import Footer from '../../components/footer'

import Header from '../../components/header'
import Player from '../../assets/player.svg'
import Star from '../../assets/star.svg'
import ErrorSvg from '../../assets/error.svg'

import { useRouter } from 'next/router'
import {
  Main,
  TvShowContent,
  Button,
  Framer,
  Cast,
  GalleryContent,
  Recommended
} from '../../styles/pages/tvshow'

type TvShowProps = {
  backdrop_path: any
  name: string
  overview: string
  vote_average: number
  poster_path?: string
  id?: number
}

type TvShowPropsVideo = {
  key: string
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

const Movies = () => {
  const [tvShow, setTvShow] = useState<TvShowProps[]>([])
  const [tvShowBackground, setTvShowBackground] = useState([])
  const [tvShowVideo, setTvShowVideo] = useState<TvShowPropsVideo[]>([])
  const [cast, setCast] = useState<CastProps[]>([])
  const [GalleryImg, setGaleryImg] = useState<TvShowPropsImage[]>([])
  const [recommendedShow, setRecommendedShow] = useState<TvShowProps[]>([])
  const [appearVideo, setAppearVideo] = useState(false)

  const route = useRouter()
  const { id } = route.query

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        const tvShowDetails = await api.get(`/tv/${id}`)
        const tvShowVideos = await api.get(`/tv/${id}/videos`)
        const images = await api.get(`/tv/${id}/images`)
        const cast = await api.get(`/tv/${id}/credits`)
        const recommendations = await api.get(`/tv/${id}/recommendations`)

        setTvShow([tvShowDetails.data])
        setTvShowBackground(images.data.backdrops[0].file_path)
        setTvShowVideo(tvShowVideos.data.results)
        setCast(cast.data.cast)
        setGaleryImg(images.data.backdrops.slice(0, 11))
        setRecommendedShow(recommendations.data.results)
      }
    }
    loadData()
  }, [id])

  console.log(tvShowVideo[0]?.key)

  return (
    <Main>
      <Header color={null} appearInput={true} />
      {tvShow.map((show, i) => (
        <TvShowContent image={String(tvShowBackground)}>
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
                  <span>{show.name}</span>
                  <img
                    onClick={() => setAppearVideo(false)}
                    src={ErrorSvg}
                    alt="player-img"
                    draggable="false"
                  />
                </div>
                <iframe
                  allowFullScreen
                  src={`https://www.youtube.com/embed/${tvShowVideo[0]?.key}`}
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
          {cast
            .filter((e) => !!e.profile_path)
            .map((people, i) => (
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
          {GalleryImg.map((image, i) => (
            <img
              key={i}
              src={`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${image.file_path}`}
            />
          ))}
        </div>
      </GalleryContent>
      <Recommended>
        <h1>Recommended</h1>
        <div className="show-content scroll">
          {recommendedShow.map((e, i) => (
            <Link href={`/tvshow/${e.id}`}>
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