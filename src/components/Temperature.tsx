import React from 'react'
import {
  Container,
  Temperatura,
  Chuva,
  Umidade,
  Vento
} from '../styles/components/Temperature'
export function Temperature(): JSX.Element {
  return (
    <Container>
      <p className="title">Tempo agora em Presidente Venceslau - SP</p>
      <div className="HeaderTitle">
        <h1>35°</h1>
      </div>
      <section>
        <Temperatura>
          <p>Temperatura</p>
          <div>
            <p>20°</p>
            <p className="max">32°</p>
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
