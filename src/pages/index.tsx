/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Temperature } from '../components/Temperature'
import { GlobalContext } from '../contexts/GlobalContext'
import Graph from '../components/Graph'
const Home: React.FC = () => {
  const { dataResponse, dataResponseGraph, isActive } = useContext(
    GlobalContext
  )
  return (
    <>
      <Head>
        <title>Clima Hoje</title>
      </Head>
      <section>

        {isActive
          ? dataResponse && (
            <Temperature
              humidity={dataResponse.main.humidity}
              weather={dataResponse.weather[0].description}
              windSpeed={dataResponse.wind.speed}
              dt={dataResponse.dt}
              temp={dataResponse.main.temp}
              tempMax={dataResponse.main.temp_max}
              tempMin={dataResponse.main.temp_min}
              city={dataResponse.name}
            />
          )
          : dataResponseGraph && (
            <Temperature
              humidity={dataResponseGraph.current.humidity}
              weather={dataResponseGraph.current.weather[0].description}
              windSpeed={dataResponseGraph.current.wind_speed}
              dt={dataResponseGraph.current.dt}
              temp={dataResponseGraph.current.temp}
              tempMax={dataResponseGraph.daily[0].temp.max}
              tempMin={dataResponseGraph.daily[0].temp.min}
            />
          )}
      </section>

      <Graph/>
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
