import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import { getWeather } from '../services/Weather'
const Home: React.FC = () => {
  useEffect(() => {
    name()
  }, [])

  async function name() {
    const data = await getWeather({
      lat: -23.4431568,
      lon: -48.8789463,
      part: 'alerts'
    })
    console.log(data)
  }

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
