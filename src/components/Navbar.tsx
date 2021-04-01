import React from 'react'
import Link from 'next/link'
import { Nav } from '../styles/components/Navbar'
import { BiSearchAlt2 } from 'react-icons/bi'
const Navbar = (): JSX.Element => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <a>Clima Hoje</a>
        </Link>
      </div>
      <div className="search">
        <input placeholder="Busque por uma cidade" />
        <BiSearchAlt2 size={24} color="#e1e1e6" />
      </div>
      <div className="buttonReload">
        <button
          type="button"
          onClick={() => {
            console.log('recarregar')
          }}
        >
          Recarregar
        </button>
      </div>
    </Nav>
  )
}

export default Navbar
