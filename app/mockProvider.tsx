'use client'
import { useEffect, useState } from 'react'

export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [mockingEnabled, enableMocking] = useState(false)

  useEffect(() => {
    async function enableApiMocking() {
      if (typeof window !== 'undefined') {
        const { worker } = await import('../mocks/browser')
        await worker.start()
        enableMocking(true)
      }
    }
    enableApiMocking()
  }, [])

  if (!mockingEnabled) {
    return null
  }

  return <>{children}</>
}
