<template>
  <div class="min-h-screen bg-black text-white flex items-center justify-center">
    <div class="text-center px-4">
      <h1 class="text-6xl font-bold mb-4">{{ error?.statusCode || 500 }}</h1>
      <h2 class="text-2xl mb-4">{{ error?.statusMessage || 'Server Error' }}</h2>
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
        <a 
          href="/"
          class="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>