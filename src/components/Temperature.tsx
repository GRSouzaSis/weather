import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { MdLocationOn } from 'react-icons/md'

import {
  Container,
  Temperatura,
  Chuva,
  Umidade,
  Vento
} from '../styles/components/Temperature'
interface TempProps {
  dt: number
  tempMin: number
  tempMax: number
  temp: number
  humidity: number
  windSpeed: number
  weather: string
  city?: string
}
export function Temperature(props: TempProps): JSX.Element {
  const { isActive } = useContext(GlobalContext)

  return (
    <Container>
      <p className="title">
        {`Previsão para ${new Date(props.dt * 1000).toLocaleDateString(
          'pt-BR',
          { day: '2-digit', month: 'short' }
        )} em ${isActive ? props.city : 'sua localização'}`}
        <MdLocationOn size={20} />
      </p>
      <div className="HeaderTitle">
        <h1>{Math.floor(props.temp)}°C</h1>
      </div>
      <section>
        <Temperatura>
          <strong>Temperatura</strong>
          <div>
            <p>{Math.floor(props.tempMin)}°C</p>
            <p className="max">{Math.floor(props.tempMax)}°C</p>
          </div>
        </Temperatura>
        <Chuva>
          <strong>Chuva</strong>
          <div>
            <p>{props.weather}</p>
          </div>
        </Chuva>
        <Vento>
          <strong>Vento</strong>
          <div>
            <p>{((props.windSpeed * (60 * 60)) / 1000).toFixed(1)} km/h</p>
          </div>
        </Vento>
        <Umidade>
          <strong>Umidade</strong>
          <div>
            <p>{props.humidity}%</p>
          </div>
        </Umidade>
      </section>
    </Container>
  )
}
