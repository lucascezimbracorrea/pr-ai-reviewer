'use client'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import Chart from '../../components/Chart'

// This component has Next.js App Router issues - unnecessary client component
export default function Dashboard() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Client-side data fetching when it should be server-side
    fetch('/api/dashboard-data')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])
  
  if (loading) {
    return <div>Loading dashboard...</div>
  }
  
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Button onClick={() => alert('Button clicked!')}>
          Refresh Data
        </Button>
      </div>
      {data && (
        <div>
          <h2>Analytics</h2>
          <Chart data={data.chartData} type="line" />
        </div>
      )}
    </div>
  )
}
