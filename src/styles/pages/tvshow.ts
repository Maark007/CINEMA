import styled from 'styled-components'
import { progressbar } from '../animations/keyframes'

type TvShowProps = {
  image: string
}
const fullHdImage = 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces'
const hdImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 995px) {
    height: auto;
    .dissapear {
      display: none;
    }
  }
`
export const TvShowContent = styled.div<TvShowProps>`
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('${fullHdImage}/${(props) => props.image}');
  animation: ${progressbar} 1.5s ease;

  & .background-shadow {
    height: 90vh;
    width: 100%;
    backdrop-filter: brightness(0.3);
    display: flex;
    align-items: center;
  }
  & .player-box {
    width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    img {
      width: 20%;
      align-self: center;
      cursor: pointer;
    }
  }
  & .button-box {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
  & .description-box {
    width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    p {
      padding: 10px 0 0 3px;
      text-align: justify;
      max-width: 90%;
      font-size: 18px;
    }
  }
  & .review-box {
    display: flex;
    align-items: center;
    img {
      height: 20px;
      padding: 0 7px 0 3px;
    }
    span {
      padding-left: 5px;
      font-size: 22px;
    }
  }
  @media screen and (max-width: 995px) {
    & .background-shadow {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
    & .description-box {
      width: 90%;
      h1 {
        align-self: center;
        font-size: 23px;
        text-align: center;
      }
    }
    & .review-box {
      justify-content: center;
      padding: 0 0 15px 0;
    }
  }
`
export const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  padding: 10px;
  width: 190px;
  margin: 10px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  letter-spacing: 2px;
  font-weight: bold;
  transition: 0.5s all ease;
  :hover {
    background: #fff;
    color: #000;
    opacity: 1;
  }
`
export const Framer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  iframe {
    background: #000;
    border: 1px solid #000;
    height: 70vh;
    width: 70%;
  }
  & .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    width: 70%;
    padding: 15px;
    border-radius: 1px;
  }
  span {
    font-size: 19px;
  }
  img {
    height: 30px;
    cursor: pointer;
  }
  @media screen and (max-width: 995px) {
    iframe {
      width: 90%;
    }
    & .title-box {
      width: 90%;
    }
  }
`
export const Cast = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    padding: 10px 30px;
  }
  & img {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    object-fit: cover;
  }
  & .image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 0 15px 15px 15px;
  }
  & .cast-container {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
    margin: 20px;
  }
  & .names-box {
    width: auto;
    max-width: 201px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  h3 {
    padding-top: 10px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    width: auto;
    white-space: pre;
  }
  span {
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    width: auto;
    white-space: pre;
  }
`
export const GalleryContent = styled.div`
  & .image-container {
    display: flex;
    justify-content: flex-start;
    margin: 20px;
    padding: 0 15px 0 0;
    overflow-x: auto;
    img {
      height: 206px;
      object-fit: cover;
      width: 326px;
      border-radius: 10px;
      margin: 0 15px 15px 15px;
    }
  }
  & h1 {
    padding: 10px 30px;
  }
`
export const Recommended = styled.div`
  & .show-content {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
    margin: 20px;
    padding: 0 10px 0 10px;
    overflow-y: hidden;
    img {
      margin-right: 20px;
      padding: 10px 0;
      height: 350px;
      object-fit: cover;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      :hover {
        transform: scale(1.05);
      }
    }
  }
  & h1 {
    padding: 10px 30px;
  }
`
