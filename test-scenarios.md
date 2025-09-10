# Test Scenarios for AI PR Review Prompt

## Scenario 1: Next.js App Router - Unnecessary Client Component
**File**: `app/dashboard/page.tsx`
```typescript
'use client'
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/api/dashboard-data')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  return (
    <div>
      <h1>Dashboard</h1>
      {data ? <div>{data.message}</div> : <div>Loading...</div>}
    </div>
  )
}
```

## Scenario 2: Performance Issues - Large Bundle
**File**: `components/Chart.tsx`
```typescript
import * as d3 from 'd3'
import * as plotly from 'plotly.js'
import { Chart as ChartJS } from 'chart.js'
import { LineChart } from 'recharts'

export default function Chart({ data }) {
  return (
    <div>
      <LineChart data={data} />
      <div id="d3-chart"></div>
      <div id="plotly-chart"></div>
    </div>
  )
}
```

## Scenario 3: Accessibility Issues
**File**: `components/Button.tsx`
```typescript
export default function Button({ onClick, children }) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        padding: '10px', 
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer'
      }}
    >
      {children}
    </div>
  )
}
```

## Scenario 4: Security Issue
**File**: `components/UserProfile.tsx`
```typescript
export default function UserProfile({ user }) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>API Key: {apiKey}</p>
      <div dangerouslySetInnerHTML={{ __html: user.bio }} />
    </div>
  )
}
```

## Scenario 5: Good Implementation
**File**: `app/products/page.tsx`
```typescript
import Image from 'next/image'
import { Suspense } from 'react'

async function ProductList() {
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }
  }).then(res => res.json())
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <Image 
            src={product.image} 
            alt={product.name}
            width={300}
            height={200}
            priority={false}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <main>
      <h1>Our Products</h1>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductList />
      </Suspense>
    </main>
  )
}
```
