import styled from 'styled-components'

export const Main = styled.div`
  height: 100vh;
  width: 100%;
`
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background: #000;
  border: none;
  color: #fff;
  padding-left: 45px;
  font-size: 19px;
  border-radius: 4px;
`

export const Content = styled.div`
  & .input-content {
    display: flex;
    align-items: center;
    padding: 15px;
    img {
      height: 20px;
      position: absolute;
      margin-left: 10px;
    }
  }
  & .shows-box {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 15px;
  }
  & .poster-img {
    height: 370px;
    width: 100%;
    width: auto;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s all ease;
    :hover {
      transform: scale(1.05);
    }
  }
  & .title-box {
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h2 {
      text-align: center;
      font-size: inherit;
      max-width: 235px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & .rating-box {
    display: flex;
    align-items: center;
    img {
      height: 19px;
    }
    span {
      padding-left: 5px;
      font-size: 21px;
    }
  }
  & .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    transition: 2s all ease;
  }
  & .no-movies {
    margin: 10px;
    font-size: 1.55rem;
  }
`
