import { Card, CardContent, Typography, Box } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
} from 'chart.js'
import type { ChartOptions, ChartData } from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip
)

type GraphCardProps = {
  title: string
  value: string | number
  secondaryText?: string
  chartType?: 'line' | 'bar'
  chartData: ChartData<'line'> | ChartData<'bar'>
  chartOptions?: ChartOptions<'line'> | ChartOptions<'bar'>
}

export default function GraphCard({
  title,
  value,
  secondaryText,
  chartType = 'line',
  chartData,
  chartOptions,
}: GraphCardProps) {
  const renderChart = () => {
    const defaultOptions = {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
    }
    if (chartType === 'bar') {
      return (
        <Bar
          data={chartData as ChartData<'bar'>}
          options={{
            ...defaultOptions,
            ...(chartOptions as ChartOptions<'bar'>),
          }}
        />
      )
    }
    return (
      <Line
        data={chartData as ChartData<'line'>}
        options={{
          ...defaultOptions,
          ...(chartOptions as ChartOptions<'line'>),
        }}
      />
    )
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
      <CardContent sx={{ flex: '1 0 auto', p: 0 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="text.secondary">
          {value}
        </Typography>
        {secondaryText && (
          <Typography variant="body2" color="text.secondary">
            {secondaryText}
          </Typography>
        )}
        <Box sx={{ height: 80, mt: 1 }}>{renderChart()}</Box>
      </CardContent>
    </Card>
  )
}
