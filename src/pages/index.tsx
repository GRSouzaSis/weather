/* eslint-disable no-extra-boolean-cast */
import React, { useContext } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Temperature } from '../components/Temperature'
import { GlobalContext } from '../contexts/GlobalContext'
const Home: React.FC = () => {
  const { dataResponse, dataResponseGraph } = useContext(GlobalContext)

  return (
    <>
      <Head>
        <title>Clima Hoje</title>
      </Head>
      {dataResponse && <p>{dataResponse.name}</p>}
      {dataResponseGraph && (
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
