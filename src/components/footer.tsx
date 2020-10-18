import React from 'react'
import Link from 'next/link'
import { Main } from '../styles/pages/footer'

const Footer = () => {
  return (
    <Main>
      <h3>CINEMA</h3>
      <div className="divisor" />
      <div>
        <Link href="https://github.com/Maark007">
          <a target="_blank" rel="noreferrer">
            <i className="fab fa-github" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/marcos007/">
          <a target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        </Link>
      </div>
    </Main>
  )
}

export default Footer
