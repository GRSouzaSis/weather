import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import { getWeather, getCityWeather } from '../services/weather'
import { HeaderPage } from '../components/HeaderPage'
const Home: React.FC = () => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [location, setLocation] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (location) {
      getWeatherCiry()
      // getWeatherLocation()
    }
  }, [location, lat, lon])

  async function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
          setLocation(true)
        },
        error => {
          console.log(error)
          setError(true)
        },
        {
          enableHighAccuracy: true
        }
      )
    } else {
      setError(true)
      alert(
        'Seu navegador não suporta a função de localização! Busque o nome da localização desejada'
      )
    }
  }

  async function getWeatherCiry() {
    const data = await getCityWeather({
      city: 'caiua'
    })
    console.log('resp >>', data)
  }

  async function getWeatherLocation() {
    const data = await getWeather({
      lat: lat,
      lon: lon,
      part: 'alerts'
    })
    // const data = await getCityWeather({
    //   city: 'caiua'
    // })
    console.log('resp >>', data)
  }

  return (
    <>
      <HeaderPage />
      <Container>
        <Head>
          <title>Clima Hoje</title>
        </Head>
        {/* <RocketseatLogo /> */}
      </Container>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      private: process.env.NEXT_PUBLIC_KEY
    }
  }
}

export default Home
