import styled, { css } from 'styled-components'

type MainProps = {
  isOpen: boolean
}

export const Main = styled.div<MainProps>`
  width: 100%;
  height: 80px;
  padding: 20px;
  backdrop-filter: brightness(0.3);
  & .title-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  & .subtitle-box {
    display: flex;
  }
  & h3 {
    padding: 0 15px 2px 10px;
    font-size: 17.6px;
    cursor: pointer;
  }
  & .bg-red {
    background: #e50914;
    transition: all 0.5s ease-out;
  }
  & .search-container {
    display: flex;
    img {
      height: 20px;
      align-self: flex-end;
      cursor: pointer;
    }
    input {
      background: none;
      padding: 5px;
      margin-left: 5px;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
    }
  }
  & .appear-menu {
    display: none;
    i {
      font-size: 1.45rem;
      cursor: pointer;
    }
  }
  & .hidden-titles {
    display: none;
  }
  @media screen and (max-width: 750px) {
    height: auto;
    min-height: 80px;
    transition: all 0.3s ease-in;
    ${(props) =>
      props.isOpen &&
      css`
        transition: all 0.3s ease-in;
        background: #fff;
        color: #000;
      `}
    & .subtitle-box {
      display: none;
    }
    & .hidden-titles {
      ${(props) =>
        props.isOpen &&
        css`
          display: flex;
          flex-direction: column;
        `}
      h4 {
        padding: 3px;
        font-size: 16px;
        width: 100%;
        cursor: pointer;
      }
    }
    & .title-container {
      justify-content: space-between;
    }
    & .appear-menu {
      display: flex;
      position: absolute;
      right: 10px;
      top: 18px;
      button {
        outline: none;
        border: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #fff;
      }
    }
  }
`
