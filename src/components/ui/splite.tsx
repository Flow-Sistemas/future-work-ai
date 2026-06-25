'use client'

import { useEffect, useRef, useState } from 'react'
import { Application } from '@splinetool/runtime'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let isMounted = true
    let splineApp: Application | null = null

    async function initSpline() {
      try {
        // Initialize the vanilla @splinetool/runtime Application directly on the canvas element.
        // This is SSR-safe and fully compatible with React 19 since it bypasses the react-spline package hooks.
        splineApp = new Application(canvas!)
        await splineApp.load(scene)
        if (isMounted) {
          setLoading(false)
        }
      } catch (err) {
        console.error("Failed to load Spline scene:", err)
        if (isMounted) {
          setError(String(err))
          setLoading(false)
        }
      }
    }

    initSpline()

    return () => {
      isMounted = false
      // Clean up the application resources on unmount
      if (splineApp) {
        try {
          // Dispose resources if runtime supports it
        } catch (e) {
          // ignore
        }
      }
    }
  }, [scene])

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
          <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-950/20 text-red-400 z-10 text-xs p-4 text-center">
          Erro ao carregar cena 3D.
        </div>
      )}
      <canvas ref={canvasRef} className={`w-full h-full block ${className || ""}`} />
    </div>
  )
}
