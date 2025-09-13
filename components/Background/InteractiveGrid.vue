<template>
  <canvas
    ref="canvas"
    class="fixed top-0 left-0 w-full h-full"
    style="pointer-events: none; z-index: 0;"
  />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D | null = null
let animationId: number | null = null
let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0

// Grid configuration
const gridSize = 50
const dotSize = 1
const baseAlpha = 0.1
const glowRadius = 150
const glowIntensity = 0.5

// Animation variables
let time = 0
const waveSpeed = 0.002
const waveAmplitude = 20

interface GridPoint {
  x: number
  y: number
  baseX: number
  baseY: number
  alpha: number
  size: number
}

let gridPoints: GridPoint[] = []

const initCanvas = () => {
  if (!canvas.value) return
  
  ctx = canvas.value.getContext('2d')
  if (!ctx) return
  
  resizeCanvas()
  initGrid()
  animate()
}

const resizeCanvas = () => {
  if (!canvas.value || !ctx) return
  
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  
  initGrid()
}

const initGrid = () => {
  if (!canvas.value) return
  
  gridPoints = []
  const cols = Math.ceil(canvas.value.width / gridSize) + 2
  const rows = Math.ceil(canvas.value.height / gridSize) + 2
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * gridSize
      const y = j * gridSize
      
      gridPoints.push({
        x,
        y,
        baseX: x,
        baseY: y,
        alpha: baseAlpha,
        size: dotSize
      })
    }
  }
}

const handleMouseMove = (e: MouseEvent) => {
  targetMouseX = e.clientX
  targetMouseY = e.clientY
}

const handleTouchMove = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    targetMouseX = e.touches[0].clientX
    targetMouseY = e.touches[0].clientY
  }
}

const animate = () => {
  if (!ctx || !canvas.value) return
  
  // Clear canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
  
  // Smooth mouse movement
  mouseX += (targetMouseX - mouseX) * 0.1
  mouseY += (targetMouseY - mouseY) * 0.1
  
  // Update time for wave animation
  time += waveSpeed
  
  // Draw grid
  gridPoints.forEach((point) => {
    // Calculate distance from mouse
    const dx = point.baseX - mouseX
    const dy = point.baseY - mouseY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Wave effect
    const waveX = Math.sin(time + point.baseY * 0.01) * waveAmplitude
    const waveY = Math.cos(time + point.baseX * 0.01) * waveAmplitude
    
    // Mouse repulsion effect
    let offsetX = 0
    let offsetY = 0
    if (distance < glowRadius && distance > 0.1) {
      const force = (1 - distance / glowRadius) * 30
      offsetX = (dx / distance) * force
      offsetY = (dy / distance) * force
    }
    
    // Update point position - ensure values are finite
    point.x = point.baseX + waveX + offsetX
    point.y = point.baseY + waveY + offsetY
    
    // Validate point position
    if (!isFinite(point.x) || !isFinite(point.y)) {
      point.x = point.baseX
      point.y = point.baseY
    }
    
    // Calculate glow effect
    if (distance < glowRadius) {
      point.alpha = baseAlpha + (1 - distance / glowRadius) * glowIntensity
      point.size = dotSize + (1 - distance / glowRadius) * 3
    } else {
      point.alpha = baseAlpha
      point.size = dotSize
    }
    
    // Validate alpha and size
    point.alpha = Math.min(1, Math.max(0, point.alpha))
    point.size = Math.max(0.1, point.size)
    
    // Draw point
    ctx.beginPath()
    ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
    
    // Create gradient for glow effect
    if (distance < glowRadius && isFinite(point.x) && isFinite(point.y) && point.size > 0) {
      try {
        const gradientRadius = Math.max(1, point.size * 4)
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, gradientRadius)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${point.alpha})`) // blue-500
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${point.alpha * 0.5})`) // purple-500
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')
        ctx.fillStyle = gradient
      } catch (e) {
        // Fallback to solid color if gradient fails
        ctx.fillStyle = `rgba(59, 130, 246, ${point.alpha})`
      }
    } else {
      ctx.fillStyle = `rgba(255, 255, 255, ${point.alpha})`
    }
    
    ctx.fill()
  })
  
  // Draw connection lines between nearby glowing points
  gridPoints.forEach((point, i) => {
    if (point.alpha > baseAlpha && isFinite(point.x) && isFinite(point.y)) {
      gridPoints.slice(i + 1).forEach((otherPoint) => {
        if (!isFinite(otherPoint.x) || !isFinite(otherPoint.y)) return
        
        const dx = point.x - otherPoint.x
        const dy = point.y - otherPoint.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < gridSize * 1.5 && distance > 0 && otherPoint.alpha > baseAlpha) {
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(otherPoint.x, otherPoint.y)
          
          const lineAlpha = Math.min(1, Math.max(0, Math.min(point.alpha, otherPoint.alpha) * 0.3))
          
          try {
            const gradient = ctx.createLinearGradient(point.x, point.y, otherPoint.x, otherPoint.y)
            gradient.addColorStop(0, `rgba(59, 130, 246, ${lineAlpha})`)
            gradient.addColorStop(0.5, `rgba(139, 92, 246, ${lineAlpha})`)
            gradient.addColorStop(1, `rgba(59, 130, 246, ${lineAlpha})`)
            ctx.strokeStyle = gradient
          } catch (e) {
            // Fallback to solid color if gradient fails
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`
          }
          
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })
    }
  })
  
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (process.client) {
    initCanvas()
    
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    
    // Set initial mouse position to center
    targetMouseX = window.innerWidth / 2
    targetMouseY = window.innerHeight / 2
    mouseX = targetMouseX
    mouseY = targetMouseY
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('touchmove', handleTouchMove)
})
</script>

<style scoped>
canvas {
  background: linear-gradient(to bottom right, #000000, #0a0a0a);
}
</style>