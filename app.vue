<template>
  <NuxtPage />
</template>

<script setup>
// Force favicon update to use ICO
if (process.client) {
  onMounted(() => {
    // Remove existing favicons
    const existingIcons = document.querySelectorAll('link[rel*="icon"]')
    existingIcons.forEach(icon => icon.remove())
    
    // Add ICO favicon as primary
    const icoIcon = document.createElement('link')
    icoIcon.rel = 'icon'
    icoIcon.type = 'image/x-icon'
    icoIcon.href = '/favicon.ico?v=' + Date.now() // Cache bust
    document.head.appendChild(icoIcon)
    
    // Add shortcut icon for compatibility
    const shortcutIcon = document.createElement('link')
    shortcutIcon.rel = 'shortcut icon'
    shortcutIcon.href = '/favicon.ico?v=' + Date.now()
    document.head.appendChild(shortcutIcon)
  })
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
    overflow: hidden;
  }
  
  body {
    @apply antialiased text-white bg-black;
    overflow: hidden;
    min-height: 100vh;
    width: 100vw;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-semibold tracking-tight;
  }
}

/* Global horizontal scroll styles */
.horizontal-scroll-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
}

.section-panel {
  flex: 0 0 100vw;
  width: 100vw;
  height: 100vh;
}

/* Hide scrollbar for clean look */
.horizontal-scroll-container::-webkit-scrollbar {
  display: none;
}

.horizontal-scroll-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animation classes */
.animate-element {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient text */
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600;
}
</style>