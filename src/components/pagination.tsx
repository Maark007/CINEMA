import React, { useState } from 'react'
import styled from 'styled-components'
import Skip from '../assets/skip.svg'
import Previous from '../assets/previous.svg'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  & span {
    transition: all 0.2s ease;
    cursor: pointer;
    margin: 5px;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  & .selected {
    transition: all 0.2s ease;
    border-radius: 50%;
    background: #fff;
    color: #000;
  }
  & .pagination-container {
    display: flex;
    align-items: center;
  }
  & img {
    height: 20px;
    padding: 3px 10px 0 10px;
    cursor: pointer;
  }
`

interface PaginationProps {
  page: number
  setPage: any
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const [paginationLength, setPaginationLength] = useState<number>(6)

  const paginationEffect = (id) => {
    setSelectedPage(id)
    setPage(id)
  }

  const nextPages = () => {
    setPaginationLength((prev) => {
      if (selectedPage >= 5) {
        return prev + 1
      } else {
        return prev
      }
    })
    setSelectedPage((prev) => prev + 1)
    setPage((prev) => prev + 1)
  }

  const previusPage = () => {
    if (selectedPage > 1) {
      setPaginationLength((prev) => {
        if (selectedPage <= 5) {
          return prev
        } else {
          return prev - 1
        }
      })
      setSelectedPage((prev) => prev - 1)
      setPage((prev) => prev - 1)
    } else return
  }

  return (
    <Main>
      <div className="pagination-container">
        <img src={Previous} height="20" onClick={previusPage} />
        {Array.from({ length: paginationLength }).map((_, i) => {
          if (i === 0 || i - 5 > 0) {
            return null
          }
          return (
            <span
              className={`${selectedPage === i && 'selected'}`}
              onClick={() => paginationEffect(i)}
            >
              {i}
            </span>
          )
        })}
        <img src={Skip} height="20" onClick={nextPages} />
      </div>
    </Main>
  )
}

export default Pagination
