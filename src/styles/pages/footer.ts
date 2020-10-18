import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  background: #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & .divisor {
    height: 40px;
    width: 1px;
    background: #fff;
    margin: 0 3% 0 3%;
  }
  & i {
    font-size: 2rem;
    cursor: pointer;
    margin-right: 15px;
    transition: all 0.3s ease;
    opacity: 0.655;
  }
  & .fa-github:hover {
    opacity: 1;
  }
  & .fa-linkedin:hover {
    opacity: 1;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 450px) {
    justify-content: space-around;
  }
`
