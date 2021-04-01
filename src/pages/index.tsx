/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import RocketseatLogo from '../assets/rocketseat.svg'
import { getWeather, getCityWeather } from '../services/weather'
import { Temperature } from '../components/Temperature'
import { BaseResponse } from '../models/ResponseModel'
const Home: React.FC = () => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [weatherDate, setWeatherDate] = useState<BaseResponse>()
  const [error, setError] = useState(false)

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (location) {
      // getWeatherCiry()
      getWeatherLocation()
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
    setLoading(true)
    const data = await getWeather({
      lat: lat,
      lon: lon,
      part: 'alerts'
    })

    if (!!data) {
      setWeatherDate(data)
    }

    setLoading(false)
    // const data = await getCityWeather({
    //   city: 'caiua'
    // })
    console.log('resp >>', data)
    console.log('resp >>', weatherDate)
  }

  return (
    <>
      <Head>
        <title>Clima Hoje</title>
      </Head>
      {weatherDate && (
        <Temperature
          humidity={weatherDate.current.humidity}
          weather={weatherDate.current.weather[0].description}
          windSpeed={weatherDate.current.wind_speed}
          dt={weatherDate.current.dt}
          temp={weatherDate.current.temp}
          tempMax={weatherDate.daily[0].temp.max}
          tempMin={weatherDate.daily[0].temp.min}
        />
      )}
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
