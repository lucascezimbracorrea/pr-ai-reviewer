// Good implementation: Proper Next.js App Router server component
import { Suspense } from 'react'
import Image from 'next/image'
import Button from '../../components/Button'
import Chart from '../../components/Chart'

// Server component for data fetching
async function DashboardData() {
  try {
    const response = await fetch('http://localhost:3000/api/dashboard-data', {
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data')
    }
    
    const data = await response.json()
    
    return (
      <div>
        <h2>Analytics</h2>
        <Chart data={data.chartData} type="line" />
        <div style={{ marginTop: '20px' }}>
          <p>Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div>
        <p>Error loading dashboard data. Please try again later.</p>
      </div>
    )
  }
}

// Client component for interactive features
function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <Button onClick={handleRefresh} variant="primary">
      Refresh Data
    </Button>
  )
}

export default function Dashboard() {
  return (
    <main>
      <header>
        <h1>Dashboard</h1>
        <Image
          src="/dashboard-icon.svg"
          alt="Dashboard"
          width={32}
          height={32}
          priority
        />
      </header>
      
      <section>
        <div style={{ marginBottom: '20px' }}>
          <RefreshButton />
        </div>
        
        <Suspense fallback={
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Loading dashboard data...</p>
          </div>
        }>
          <DashboardData />
        </Suspense>
      </section>
    </main>
  )
}
