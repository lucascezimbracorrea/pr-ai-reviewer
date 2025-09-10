// This component has performance issues - importing multiple heavy chart libraries
import * as d3 from 'd3'
import * as plotly from 'plotly.js'
import { Chart as ChartJS } from 'chart.js'
import { LineChart } from 'recharts'

interface ChartProps {
  data: any[]
  type: 'line' | 'bar' | 'scatter'
}

export default function Chart({ data, type }: ChartProps) {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <h3>Data Visualization</h3>
      {type === 'line' && <LineChart data={data} />}
      <div id="d3-chart" style={{ display: 'none' }}></div>
      <div id="plotly-chart" style={{ display: 'none' }}></div>
      <div id="chartjs-container" style={{ display: 'none' }}></div>
    </div>
  )
}
