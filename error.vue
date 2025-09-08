<template>
  <div class="min-h-screen bg-black text-white flex items-center justify-center">
    <div class="text-center px-4">
      <h1 class="text-6xl font-bold mb-4">500</h1>
      <h2 class="text-2xl mb-4">Server Error</h2>
      <p class="text-gray-400 mb-8">
        {{ error?.message || 'Something went wrong. Please try again later.' }}
      </p>
      <div class="space-x-4">
        <button 
          @click="handleError"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Try Again
        </button>
        <NuxtLink 
          to="/"
          class="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          Go Home
        </NuxtLink>
      </div>
      
      <!-- Debug info in development -->
      <div v-if="isDev" class="mt-8 text-left max-w-2xl mx-auto">
        <details class="bg-gray-900 p-4 rounded-lg">
          <summary class="cursor-pointer text-yellow-400">Debug Information</summary>
          <pre class="mt-2 text-xs overflow-auto">{{ JSON.stringify(error, null, 2) }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

const isDev = process.env.NODE_ENV === 'development'

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>