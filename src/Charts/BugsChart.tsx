import React, { useState, useEffect, useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import { ChartLayout } from './ChartLayout'
import axios from 'axios'
import { Bug } from './mockData'
import { Interval, isWithinInterval, subYears } from 'date-fns'
import { Chart } from 'chart.js'
import DateTimePicker from 'react-datetime-picker'

import {
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  BarController,
  CategoryScale,
  BarControllerChartOptions,
  BarElement,
  BarHoverOptions,
} from 'chart.js'

type Props = {
  bugsList: Bug[]
}

Chart.register(
  CategoryScale,
  Title,
  BarController,
  BarElement,
  LinearScale,
  LineController,
  LineElement,
)

export const BugsChart = (props: Props) => {
  const [bugs, setBugs] = useState<Bug[]>(props.bugsList)

  console.log('bugs', bugs)

  // prettier-ignore
  const [dateRange, setDateRange] = useState<Interval>({
    start: subYears(new Date(), 1),
    end: new Date()
  })

  const getOpenBugs = (bugs: Bug[]) => bugs.filter(({ open }) => open)
  const getClosedBugs = (bugs: Bug[]) => bugs.filter(({ open }) => !open)

  // Filter For Correct Date
  useEffect(() => {
    setBugs((bugs) =>
      bugs.filter((bug) => isWithinInterval(bug.date, dateRange)),
    )
  }, [dateRange.start, dateRange.end])

  return (
    <ChartLayout>
      <div className='w-full h-full'>
        <div className='flex space-x-2 bg-blue-100 p-4 items-center justify-center'>
          <DateTimePicker
            label='Start'
            value={dateRange.start}
            onChange={(start: Date) =>
              // prettier-ignore
              setDateRange(({ end }) => ({ start, end }))
            }
          />
          <DateTimePicker
            label='End'
            value={dateRange.end}
            onChange={(end: Date) =>
              // prettier-ignore
              setDateRange(({ start }) => ({ start, end }))
            }
          />
        </div>

        <Bar
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Cryptocurrency prices',
              },
              legend: {
                display: true,
                position: 'bottom',
              },
            },
          }}
          data={{
            labels: ['Open', 'Closed'],
            datasets: [
              {
                label: 'Open',
                data: [getOpenBugs(bugs).length],
              },
              {
                label: 'Closed',
                data: [getClosedBugs(bugs).length],
              },
            ],
          }}
        />
      </div>
    </ChartLayout>
  )
}
