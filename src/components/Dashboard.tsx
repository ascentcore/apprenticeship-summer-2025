import React from 'react'
import StatisticCard from './StatisticCard'
import GraphCard from './GraphCard'
import { Card, CardContent, Typography, Button } from '@mui/material'

const Dashboard: React.FC = () => {
  // Exemplu date pentru grafice
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [5, 8, 6, 10, 7],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  }

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Titlu + Search bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <input
          type="text"
          placeholder="Search..."
          className="mt-3 md:mt-0 border rounded-lg px-4 py-2 w-full md:w-64"
        />
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Statistic Cards */}
        <StatisticCard
          title="Available Position"
          value="24"
          subtitle="Active Hiring"
        />
        <StatisticCard title="Job Open" value="10" subtitle="Active Hiring" />
        <StatisticCard title="New Employees" value="24" subtitle="This Month" />

        <StatisticCard
          title="Total Employees"
          value="216"
          subtitle="This Month"
        />
        <StatisticCard
          title="Talent Request"
          value="16"
          subtitle="This Month"
        />

        {/* Graph Card cu props corecte */}
        <GraphCard
          title="Hiring Trend"
          value={42}
          secondaryText="Last 5 months"
          chartType="line"
          chartData={lineChartData}
        />
      </div>

      {/* GRID SECUNDAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Announcements */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Announcement
            </Typography>
            <ul className="space-y-3">
              <li>Outing schedule for every department</li>
              <li>Meeting HR Department</li>
              <li>IT Department need more workers for URA project</li>
            </ul>
            <Button size="small" sx={{ mt: 2 }}>
              See all Announcements
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Schedule */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Upcoming Schedule
            </Typography>
            <ul className="space-y-3">
              <li>Review candidate applications</li>
              <li>Interview with candidates</li>
              <li>Short meeting with product designer</li>
            </ul>
            <Button size="small" sx={{ mt: 2 }}>
              Create a new Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card sx={{ bgcolor: 'indigo.900', color: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body2" gutterBottom>
              You Posted a New Job
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }} gutterBottom>
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Today you made 12 Activities
            </Typography>
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{ mt: 2 }}
            >
              See All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
