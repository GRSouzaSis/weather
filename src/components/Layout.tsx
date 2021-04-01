import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface ProviderProps {
  children: ReactNode
}

export default function Layout({ children }: ProviderProps): JSX.Element {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  )
}
