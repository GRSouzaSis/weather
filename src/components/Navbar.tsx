/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Nav } from '../styles/components/Navbar'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GlobalContext } from '../contexts/GlobalContext'

const Navbar = (): JSX.Element => {
  const { onClickReload, onClickSearch } = useContext(GlobalContext)
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
          onKeyUp={e => {
            if (e.key === 'Enter' && search.length > 2) {
              onClickSearch(search), setSearch('')
            }
          }}
        />
        <BiSearchAlt2
          size={24}
          color="#e1e1e6"
          onClick={() => {
            onClickSearch(search), setSearch('')
          }}
        />
      </div>
      <div className="buttonReload">
        <button
          type="button"
          onClick={() => {
            onClickReload()
          }}
        >
          Recarregar
        </button>
      </div>
    </Nav>
  )
}

export default Navbar
