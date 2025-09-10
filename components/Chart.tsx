// Good implementation: Optimized chart component with dynamic imports
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamic import to reduce bundle size
const LineChart = dynamic(() => import('recharts').then(mod => ({ default: mod.LineChart })), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
})

interface ChartProps {
  data: any[]
  type: 'line' | 'bar' | 'scatter'
}

export default function Chart({ data, type }: ChartProps) {
  if (!data || data.length === 0) {
    return (
      <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>No data available</p>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <h3>Data Visualization</h3>
      <Suspense fallback={<div>Loading chart...</div>}>
        {type === 'line' && (
          <LineChart
            width={800}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <LineChart.Line type="monotone" dataKey="value" stroke="#8884d8" />
            <LineChart.XAxis dataKey="name" />
            <LineChart.YAxis />
            <LineChart.CartesianGrid strokeDasharray="3 3" />
            <LineChart.Tooltip />
            <LineChart.Legend />
          </LineChart>
        )}
      </Suspense>
    </div>
  )
}
