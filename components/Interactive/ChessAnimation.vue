<template>
  <div class="chess-animation-container">
    <div class="chess-board">
      <div class="chess-piece" :style="pieceStyle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
          <path d="M19 22H5v-2h14v2M17 10c-.3 0-.5.1-.7.3l-2 2c-.2.2-.3.4-.3.7s.1.5.3.7l2 2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L16.4 13H20v-2h-3.6l1.3-1.3c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3M7 10c-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4L7.6 13H4v2h3.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l2-2c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-2-2c-.2-.2-.4-.3-.7-.3M12 2l-2 5h4l-2-5z"/>
        </svg>
      </div>
      <div class="board-squares">
        <div v-for="i in 64" :key="i" :class="getSquareClass(i)"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

interface Props {
  autoPlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoPlay: true
})

const piecePosition = ref({ x: 0, y: 0 })

const pieceStyle = computed(() => ({
  transform: `translate(${piecePosition.value.x}px, ${piecePosition.value.y}px)`,
  transition: 'transform 1s ease-in-out'
}))

const getSquareClass = (index: number) => {
  const row = Math.floor((index - 1) / 8)
  const col = (index - 1) % 8
  const isDark = (row + col) % 2 === 0
  return `board-square ${isDark ? 'dark' : 'light'}`
}

onMounted(() => {
  if (props.autoPlay) {
    animateKnight()
  }
})

const animateKnight = () => {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 })
  
  const moves = [
    { x: 100, y: 50 },
    { x: 150, y: 150 },
    { x: 50, y: 200 },
    { x: 0, y: 100 },
    { x: 0, y: 0 }
  ]
  
  moves.forEach((move, index) => {
    timeline.to(piecePosition.value, {
      x: move.x,
      y: move.y,
      duration: 1,
      ease: 'power2.inOut',
      delay: index === 0 ? 0.5 : 0
    })
  })
}
</script>

<style scoped>
.chess-animation-container {
  @apply relative w-full h-64 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100;
}

.chess-board {
  @apply relative w-full h-full flex items-center justify-center;
}

.board-squares {
  @apply absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20;
}

.board-square {
  @apply w-full h-full;
}

.board-square.dark {
  @apply bg-gray-800;
}

.board-square.light {
  @apply bg-gray-200;
}

.chess-piece {
  @apply absolute text-blue-600 z-10;
  top: 50%;
  left: 50%;
  margin-top: -24px;
  margin-left: -24px;
}
</style>