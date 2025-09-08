<template>
  <div class="horizontal-layout">
    <!-- Interactive Grid Background -->
    <BackgroundInteractiveGrid />
    
    <!-- Navigation Dots at Bottom -->
    <nav class="nav-dots-bottom">
      <button
        v-for="(section, index) in sections"
        :key="index"
        @click="scrollToSection(index)"
        :class="['nav-dot', { active: currentSection === index }]"
        :aria-label="`Go to ${section}`"
        :title="section"
      >
      </button>
    </nav>

    <!-- Main Content Container -->
    <div ref="scrollContainer" class="horizontal-scroll-container" @scroll="handleScroll">
      <div ref="scrollContent" class="horizontal-scroll-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
const scrollContent = ref<HTMLElement>()
const currentSection = ref(0)
const progress = ref(0)

const sections = [
  'Home',
  'About',
  'Portfolio',
  'Services',
  'Blog',
  'Contact'
]

onMounted(() => {
  if (!process.client || !scrollContainer.value) return
  
  // Handle keyboard navigation
  window.addEventListener('keydown', handleKeydown)
  
  // Handle mouse wheel for horizontal scrolling - attach to container and window
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('wheel', handleWheel, { passive: false })
  }
  window.addEventListener('wheel', handleWheel, { passive: false })
  
  // Set initial state
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('wheel', handleWheel)
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('wheel', handleWheel)
  }
})

const handleScroll = () => {
  updateProgress()
}

const updateProgress = () => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const scrollLeft = container.scrollLeft
  const scrollWidth = container.scrollWidth - container.clientWidth
  
  if (scrollWidth > 0) {
    const scrollPercentage = (scrollLeft / scrollWidth) * 100
    progress.value = scrollPercentage
    
    // Update current section based on scroll position
    const sectionWidth = container.clientWidth
    currentSection.value = Math.round(scrollLeft / sectionWidth)
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') {
    scrollNext()
  } else if (e.key === 'ArrowLeft') {
    scrollPrev()
  }
}

// Add debounce flag to prevent rapid scrolling
let isScrolling = false

const handleWheel = (e: WheelEvent) => {
  e.preventDefault()
  e.stopPropagation()
  
  if (!scrollContainer.value || isScrolling) return
  
  // Get scroll direction
  const deltaY = e.deltaY
  const deltaX = e.deltaX
  
  // Use the larger delta
  const scrollDelta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX
  
  // Threshold for triggering section change (much lower for easier scrolling)
  const threshold = 30
  
  if (Math.abs(scrollDelta) > threshold) {
    isScrolling = true
    
    if (scrollDelta > 0) {
      // Scrolling down/right - go to next section
      scrollNext()
    } else {
      // Scrolling up/left - go to previous section
      scrollPrev()
    }
    
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrolling = false
    }, 600) // Adjust this timing based on your scroll animation duration
  }
}

const scrollToSection = (index: number) => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const sectionWidth = container.clientWidth
  const targetScroll = index * sectionWidth
  
  container.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  })
  
  currentSection.value = index
}

const scrollNext = () => {
  if (currentSection.value < sections.length - 1) {
    scrollToSection(currentSection.value + 1)
  }
}

const scrollPrev = () => {
  if (currentSection.value > 0) {
    scrollToSection(currentSection.value - 1)
  }
}
</script>

<style scoped>
.horizontal-layout {
  @apply relative w-full h-screen overflow-hidden bg-black;
}

.horizontal-scroll-container {
  @apply w-full h-full;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  position: relative;
  z-index: 1;
}

.horizontal-scroll-container::-webkit-scrollbar {
  display: none;
}

.horizontal-scroll-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.horizontal-scroll-content {
  @apply flex h-full;
  width: fit-content;
}

/* Navigation Dots at Bottom */
.nav-dots-bottom {
  @apply fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50;
  @apply flex gap-3;
}

.nav-dot {
  @apply w-3 h-3 rounded-full bg-white/20 transition-all duration-300;
  @apply hover:bg-white/40 cursor-pointer;
  @apply hover:scale-110;
}

.nav-dot.active {
  @apply bg-white scale-125;
  @apply shadow-lg shadow-white/50;
}


/* Responsive */
@media (max-width: 768px) {
  .nav-dots-bottom {
    @apply bottom-4 gap-2;
  }
  
  .nav-dot {
    @apply w-2 h-2;
  }
}
</style>