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
      borderColor: theme.colors.primary,
      pointBackgroundColor: theme.colors.primary,
      pointBorderColor: theme.colors.primary,
      borderJoinStyle: 'bevel',
      pointBorderWidth: 5,
      pointHoverRadius: 1,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 5,
      data: dataGraph,
      label: 'C°'
    }
  ]

  const options: ChartOptions = {
    animation: {
      duration: 1500
    },
    responsive: true,
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
    layout: {
      padding: {
        top: 8,
        left: 0,
        right: 0,
        bottom: 8
      }
    },
    legend: {
      position: 'bottom',
      display: true,

      labels: {
        usePointStyle: true,
        padding: 4
      }
    },
    tooltips: {
      displayColors: false,
      titleFontSize: 16,
      bodyFontSize: 14,
      xPadding: 10,
      yPadding: 10
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
