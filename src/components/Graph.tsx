import React from 'react'

import { Line } from 'react-chartjs-2'
import { ChartDataSets, ChartOptions } from 'chart.js'
import theme from '../styles/theme'
import { Card } from '../styles/components/Graph'

interface GraphProps {
  labelsGraph: string[]
  dataGraph: number[]
}

const Graph = (props: GraphProps): JSX.Element => {
  const { dataGraph, labelsGraph } = props

  const datasets: ChartDataSets[] = [
    {
      fill: false,
      lineTension: 0,
      borderColor: theme.colors.primary,
      pointBackgroundColor: theme.colors.primary,
      pointBorderColor: theme.colors.primary,
      backgroundColor: '#FFF',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderWidth: 5,
      pointHoverRadius: 1,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dataGraph
    }
  ]

  const options: ChartOptions = {
    animation: {
      duration: 1000
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    },
    legend: {
      position: 'bottom',
      display: false,

      labels: {
        usePointStyle: true
      }
    }
  }

  const data = {
    labels: labelsGraph,
    datasets: datasets
  }
  return (
    <Card>
      {/* <p>Clima Hoje 2021</p> */}
      <Line data={data} options={options}></Line>
    </Card>
  )
}

export default Graph
