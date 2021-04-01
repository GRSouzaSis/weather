import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Nav } from '../styles/components/Navbar'
import { BiSearchAlt2 } from 'react-icons/bi'
import { NavbarContext, NavbarProvider } from '../contexts/NavBarContext'

const Navbar = (): JSX.Element => {
  const { onClick } = useContext(NavbarContext)
  const [search, setSearch] = useState('')
  return (
    <Nav>
      <div>
        <Link href="/">
          <a>Clima Hoje</a>
        </Link>
      </div>
      <div className="search">
        <input
          placeholder="Busque por uma cidade"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <BiSearchAlt2 size={24} color="#e1e1e6" />
      </div>
      <div className="buttonReload">
        <button
          type="button"
          onClick={() => {
            onClick()
          }}
        >
          Recarregar
        </button>
      </div>
    </Nav>
  )
}

export default Navbar
