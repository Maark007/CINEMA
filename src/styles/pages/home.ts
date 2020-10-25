import styled from 'styled-components'
import { progressbar } from '../animations/keyframes'

interface DefaultTheme {
  image: string
}

const fullHdImage = 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces'
const hdImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  .movies-flex {
    display: flex;
  }
  .tvshow-title {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px 5px 20px;
    background: #000;
    span {
      font-size: 21px;
      opacity: 0.7;
      padding: 5px 18px;
    }
  }
  @media screen and (max-width: 995px) {
    .dissapear {
      display: none;
    }
    .tvshow-title {
      justify-content: center;
    }
  }
  @media screen and (max-width: 900px) {
    .movies-flex {
      flex-wrap: wrap;
    }
  }
`

export const CaroulselBG = styled.div<DefaultTheme>`
  width: 100%;
  background-image: url('${fullHdImage}/${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  animation: ${progressbar} 1.5s ease;
`

export const Carousel = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  backdrop-filter: brightness(0.3);
  overflow: hidden;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0) 0%,
    rgba(0, 0, 0) 5%,
    rgba(33, 32, 41, 0) 70%
  );
  & .banner {
    height: 433px;
    width: 325px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    padding: 0 10px;
  }
  & .image-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    h1 {
      font-size: 4rem;
      padding-top: 25px;
      font-weight: bold;
    }
    span {
      font-size: 17px;
    }
    @media screen and (max-width: 995px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 2rem;
        align-self: center;
      }
    }
  }
  & .image-description {
    display: flex;
    flex-direction: column;
    align-items: initial;
    max-width: 650px;
    padding: 0 10px;
    h1 {
      text-align: inherit;
    }
    @media screen and (max-width: 995px) {
      h1 {
        text-align: center;
      }
    }
  }
  & .description {
    text-align: justify;
  }
  & button {
    margin-top: 20px;
    cursor: pointer;
    padding: 10px;
    width: 190px;
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
    letter-spacing: 1px;
    font-weight: bold;
    transition: 0.5s all ease;
    :hover {
      background: #fff;
      color: #000;
      opacity: 1;
    }
    @media screen and (max-width: 995px) {
      align-self: center;
      h1 {
        text-align: center;
      }
    }
  }
  & .arrows {
    align-self: flex-end;
    position: absolute;
    width: 200px;
    .icon {
      height: 20px;
      padding: 0 20px;
      cursor: pointer;
    }
    @media screen and (max-width: 995px) {
      position: static;
      align-self: center;
      padding: 30px;
    }
  }
  @media screen and (max-width: 995px) {
    height: 80vh;
  }
`

export const TvShowsContainer = styled.div<DefaultTheme>`
  height: auto;
  width: 100%;
  & .show-div {
    height: auto;
    width: inherit;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0) 0%,
        rgba(0, 0, 0) 1%,
        rgba(33, 32, 41, 0) 90%
      ),
      url('${fullHdImage}/${(props) => props.image}');
    background-repeat: no-repeat;
    background-size: cover;
  }
  & .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    backdrop-filter: brightness(0.2);
    background: linear-gradient(
    0deg,
    rgba(0, 0, 0) 0%,
    rgba(0, 0, 0) 5%,
    rgba(33, 32, 41, 0) 70%
  );
    img {
      width: 80%;
      object-fit: cover;
      cursor: pointer;
    }
    button {
      margin-top: 10px;
      width: 80%;
      height: 40px;
      background: none;
      border: 1px solid #fff;
      color: #fff;
      letter-spacing: 2px;
      font-weight: bold;
      opacity: 0.7;
      cursor: pointer;
      margin-bottom: 10px;
      transition: 0.5s all ease;
      :hover {
        background: #fff;
        color: #000;
        opacity: 1;
      }
    }
    & .title {
      margin-bottom: 20px;
      border-bottom: 2px solid #fff;
      width: 80%;
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 900px) {
    .image-container {
      padding: 10px 0;
      button {
        width: 60%;
      }
      img {
        width: 60%;
      }
      .title {
        width: 60%;
      }
    }
  }
`

