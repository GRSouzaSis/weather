/* eslint-disable react/react-in-jsx-scope */
import { createContext, useEffect, useState } from 'react'
import { BaseResponse, BaseResponseCity } from '../models/ResponseModel'
import { getCityWeather, getWeather } from '../services/weather'
interface NavbarContextData {
  onClickReload: () => void
  onClickSearch: (city: string) => void
  dataResponse: BaseResponseCity
  dataResponseGraph: BaseResponse
  lat: number
  lon: number
  isActive: boolean
}

export const GlobalContext = createContext({} as NavbarContextData)

export function GlobalProvider({ children }) {
  const [dataResponse, setDataResponse] = useState<BaseResponseCity>(undefined)
  const [dataResponseGraph, setDataResponseGraph] = useState<BaseResponse>(
    undefined
  )
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [location, setLocation] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const [soughtcity, setSoughtCity] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (!location) {
      onClickReload()
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
        }
      )
    } else {
      setError(true)
      alert(
        'Seu navegador não suporta a função de localização! Busque o nome da localização desejada'
      )
    }
  }
  async function onClickReload() {
    await getLocation()
    setIsActive(false)
    if (!isActive) {
      const data = await getWeather({
        lat: lat,
        lon: lon,
        part: 'alerts'
      })

      if (data) {
        setDataResponseGraph(data)
      }
      console.log('Context Reload', data)
    }
  }
  async function onClickSearch(city: string) {
    const data = await getCityWeather({
      city: city
    })
    if (data) {
      setDataResponse(data)
      console.log('cidade >>', data)
    }
    setIsActive(true)
  }
  return (
    <GlobalContext.Provider
      value={{
        onClickReload,
        onClickSearch,
        dataResponse,
        dataResponseGraph,
        lat,
        lon,
        isActive
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
