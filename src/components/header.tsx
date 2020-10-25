import React from 'react'
import Link from 'next/link'

import { MenuToggle } from './iconToggle'
import { motion, useCycle } from 'framer-motion'
import { Main } from '../styles/pages/header'

interface HeaderProps {
  color: number
  appearInput: boolean
}

const Header: React.FC<HeaderProps> = ({ color }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <Main isOpen={isOpen}>
      <div className="title-container">
        <div>
          <h2>CINEMA</h2>
          <div className='hidden-titles'>
            <Link href="/">
              <h4 className='hvr-left'>Home</h4>
            </Link>
            <Link href="/movieslist">
              <h4 className='hvr-left'>Movies</h4>
            </Link>
            <Link href="/tvshowlist">
              <h4 className='hvr-left'>
                TV Shows
              </h4>
            </Link>
          </div>
        </div>
        <div className="subtitle-box">
          <Link href="/">
            <h3 className={`hvr-left ${color === 1 && 'bg-red'}`}>Home</h3>
          </Link>
          <Link href="/movieslist">
            <h3 className={`hvr-left ${color === 2 && 'bg-red'}`}>Movies</h3>
          </Link>
          <Link href="/tvshowlist">
            <h3 className={`hvr-left ${color === 3 && 'bg-red'}`}>TV Shows</h3>
          </Link>
        </div>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="appear-menu"
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </Main>
  )
}

export default Header
