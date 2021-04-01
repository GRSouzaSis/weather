import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
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
      <p className="title">{`Previsão de Hoje ${new Date(
        props.dt * 1000
      ).toLocaleDateString('pt-BR')} em ${
        isActive ? props.city : 'sua localização'
      }`}</p>
      <div className="HeaderTitle">
        <h1>{Math.floor(props.temp)}°</h1>
      </div>
      <section>
        <Temperatura>
          <strong>Temperatura</strong>
          <div>
            <p>{Math.floor(props.tempMin)}°</p>
            <p className="max">{Math.floor(props.tempMax)}°</p>
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
