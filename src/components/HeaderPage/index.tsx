import React, { useEffect, useState } from 'react'
import { Container } from '../../styles/components/HeaderPage'
import Head from 'next/head'
export function HeaderPage(): JSX.Element {
  return (
    <Container>
      <h1>Clima Hoje</h1>
      <div>
        <input />
        <i className="fas fa-search"></i>
      </div>
    </Container>
  )
}
