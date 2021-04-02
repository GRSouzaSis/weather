import React from 'react'
import { Card } from '../styles/components/DailyCard'

interface DailyTempProps {
  dt?: number
  tempMin?: number
  tempMax?: number
  desciption?: string
}
const DailyCard = (props: DailyTempProps): JSX.Element => {
  return (
    <Card>
      <strong>
        {new Date(props.dt * 1000).toLocaleDateString('pt-BR', {
          weekday: 'short'
        })}
      </strong>
      <p>{props.desciption}</p>
      <div className="tempDaily">
        <p>{Math.floor(props.tempMin)}°C </p>
        <p>{Math.floor(props.tempMax)}°C</p>
      </div>
    </Card>
  )
}

export default DailyCard
