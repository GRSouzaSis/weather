import React from 'react'
import {
  Container,
  Temperatura,
  Chuva,
  Umidade,
  Vento
} from '../styles/components/Temperature'
interface TempProps {
  tempMin: number
  tempMax: number
  temp: number
}
export function Temperature(props: TempProps): JSX.Element {
  return (
    <Container>
      <p className="title">Tempo agora em Presidente Venceslau - SP</p>
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
            <p>0mm</p>
            <p>0%</p>
          </div>
        </Chuva>
        <Vento>
          <p>Vento</p>
          <div>
            <p>15km/h</p>
          </div>
        </Vento>
        <Umidade>
          <p>Umidade</p>
          <div>
            <p>29%</p>
            <p className="max">89%</p>
          </div>
        </Umidade>
      </section>
    </Container>
  )
}
