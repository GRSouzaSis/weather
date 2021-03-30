import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      private: process.env.PRIVATE_KEY
    }
  }
}

export default Home
