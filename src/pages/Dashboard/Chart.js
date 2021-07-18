import React from 'react'
import Chart from 'react-apexcharts'
import themeStore from '../../stores/themeStore'

const chartData = {
  options: {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
}

export default function chart() {
  const { currentTheme } = themeStore()
  const chartOptions =
    currentTheme === 'theme-mode-dark'
      ? {
          ...chartData.options,
          theme: { mode: 'dark' },
        }
      : {
          ...chartData.options,
          theme: { mode: 'dark' },
        }
  return (
    <>
      <Chart
        options={chartOptions}
        series={chartData.series}
        type='bar'
        height='100%'
      />
    </>
  )
}
