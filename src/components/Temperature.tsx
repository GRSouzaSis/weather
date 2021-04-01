import React from 'react'
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
  return (
    <Container>
      <p className="title">{`Previsão de Hoje ${new Date(
        props.dt * 1000
      ).toLocaleDateString('pt-BR')} em Presidente Venceslau - SP`}</p>
      <div className="HeaderTitle">
        <h1>{props.temp}°</h1>
      </div>
      <section>
        <Temperatura>
          <p>Temperatura</p>
          <div>
            <p>{Math.floor(props.tempMin)}°</p>
            <p className="max">{Math.floor(props.tempMax)}°</p>
          </div>
        </Temperatura>
        <Chuva>
          <p>Chuva</p>
          <div>
            <p>{props.weather}</p>
          </div>
        </Chuva>
        <Vento>
          <p>Vento</p>
          <div>
            <p>{((props.windSpeed * (60 * 60)) / 1000).toFixed(1)} km/h</p>
          </div>
        </Vento>
        <Umidade>
          <p>Umidade</p>
          <div>
            <p>{props.humidity}%</p>
          </div>
        </Umidade>
      </section>
    </Container>
  )
}
