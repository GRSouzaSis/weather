/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Temperature } from '../components/Temperature'
import { GlobalContext } from '../contexts/GlobalContext'
import Graph from '../components/Graph'
import { CardDaily, Container } from '../styles/pages/Home'
import DailyCard from '../components/DailyCard'
import { Hourly } from '../models/ResponseModel'
const Home: React.FC = () => {
  const { dataResponse, dataResponseGraph, isActive } = useContext(
    GlobalContext
  )
  const handleHour = (date: Date) => {
    return `${date.getHours()}:00`
  }

  const getHours = (hours: Hourly[]): Hourly[] => {
    return hours.filter((_hour, index) => {
      if (index <= 23) return true
    })
  }
  const hours = getHours(!!dataResponseGraph ? dataResponseGraph.hourly : [])

  return (
    <Container>
      <Head>
        <title>Clima Hoje</title>
      </Head>
      <section className="home-section">

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
            <CardDaily>
              {
                dataResponseGraph.daily.map((item, i) => {
                  <DailyCard key={i}
                    // desciption={item.weather[i].description}
                    dt={item.dt}
                    tempMax={item.temp.max}
                    tempMin={item.temp.min}
                  />
                })
              }

            </CardDaily>
          </>
          )}
      </section>
      <Graph
        dataGraph={hours.map(value => value.temp)}
        labelsGraph={hours.map((value) => handleHour(new Date(value.dt * 1000)))}
      />
    </Container>
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
