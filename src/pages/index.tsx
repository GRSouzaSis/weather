/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React, { useContext } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Temperature } from '../components/Temperature'
import { GlobalContext } from '../contexts/GlobalContext'
import Graph from '../components/Graph'
import { CardDaily, Container } from '../styles/pages/Home'
import DailyCard from '../components/DailyCard'
import { BaseResponse, Hourly } from '../models/ResponseModel'
const Home: React.FC = () => {
  const { dataResponse, dataResponseGraph, isActive } = useContext(
    GlobalContext
  )
  const handleHour = (date: Date) => {
    return `${date.getHours()}:00`
  }

  const getHours = (hours: Hourly[]): Hourly[] => {
    return hours.filter((_hour, index) => {
      if (index <= 24 && index % 2 === 0) return true
    })
  }
  const hours = getHours(!!dataResponseGraph ? dataResponseGraph.hourly : [])

  const dailys = (props: BaseResponse) => {
    const dailyComponent = props.daily.map((value, i) => (
      <DailyCard key={i}
        desciption={value.weather[0].description}
        dt={value.dt}
        tempMax={value.temp.max}
        tempMin={value.temp.min}
      />
    ))
    return (
      <>
        {dailyComponent}
      </>
    )
  }

  return (<div className="container-principal" style={{ padding: 32 }}>
    <Container>
      <Head>
        <title>Clima Hoje</title>
      </Head>

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
        : dataResponseGraph && (<>
          <Temperature
            humidity={dataResponseGraph.current.humidity}
            weather={dataResponseGraph.current.weather[0].description}
            windSpeed={dataResponseGraph.current.wind_speed}
            dt={dataResponseGraph.current.dt}
            temp={dataResponseGraph.current.temp}
            tempMax={dataResponseGraph.daily[0].temp.max}
            tempMin={dataResponseGraph.daily[0].temp.min}
          />
        </>
        )}

      <Graph
        dataGraph={hours.map(value => value.temp)}
        labelsGraph={hours.map((value) => handleHour(new Date(value.dt * 1000)))}
      />

    </Container>
    <CardDaily>
      {dataResponseGraph && dailys(dataResponseGraph)}
    </CardDaily>
  </div>
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
