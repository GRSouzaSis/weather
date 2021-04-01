/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react'
interface NavbarContextData {
  onClick: () => void
}

export const NavbarContext = createContext({} as NavbarContextData)

export function NavbarProvider({ children }) {
  function onClick() {
    console.log('Context')
  }
  return (
    <NavbarContext.Provider value={{ onClick }}>
      {children}
    </NavbarContext.Provider>
  )
}
