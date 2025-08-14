import GraphCard from './GraphCard'
export default {
  title: 'Components/GraphCard',
  component: GraphCard,
}

const sampleChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [12, 19, 15, 17, 22, 18, 25],
      borderColor: '#FF5151',
      backgroundColor: '#FF5151',
      tension: 0.4,
    },
  ],
}

export const LineGraph = () => (
  <GraphCard
    title="Weekly Sales"
    value="$4,200"
    secondaryText="+12% from last week"
    chartType="line"
    chartData={sampleChartData}
  />
)

export const BarGraph = () => (
  <GraphCard
    title="Active Users"
    value="$1,245"
    secondaryText="-5% from last week"
    chartType="bar"
    chartData={sampleChartData}
  />
)
