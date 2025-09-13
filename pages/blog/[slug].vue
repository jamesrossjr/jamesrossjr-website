<template>
  <div class="min-h-screen bg-black">
    <!-- Interactive Grid Background -->
    <BackgroundInteractiveGrid />
    
    <!-- Navigation Header -->
    <div class="sticky top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Home</span>
        </NuxtLink>
        
        <div class="flex items-center gap-3">
          <button 
            @click="shareOnLinkedIn"
            class="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
            title="Share on LinkedIn"
          >
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </button>
          <button 
            @click="copyLink"
            class="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
            title="Copy link"
          >
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Article Content -->
    <article v-if="article" class="relative z-10 pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Article Header -->
        <header class="mb-12">
          <div class="flex items-center gap-4 mb-6">
            <span v-if="article.category" class="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium">
              {{ article.category }}
            </span>
            <span v-if="article.readTime" class="text-gray-400 text-sm">{{ article.readTime }} min read</span>
            <span v-if="article.date" class="text-gray-400 text-sm">{{ formatDate(article.date) }}</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {{ article.title }}
          </h1>
          
          <p class="text-xl text-gray-400">
            {{ article.description }}
          </p>
          
          <div class="mt-8 flex items-center gap-4">
            <img
              src="/images/headshot.jpg"
              alt="James Ross Jr."
              class="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            />
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" style="display: none;"></div>
            <div>
              <p class="text-white font-medium">{{ article.author?.name || 'James Ross Jr.' }}</p>
              <p class="text-gray-400 text-sm">{{ article.author?.bio || 'Strategic Systems Architect' }}</p>
            </div>
          </div>
        </header>
        
        <!-- Article Body -->
        <div class="prose prose-lg prose-invert max-w-none">
          <div v-html="article.body"></div>
        </div>
        
        <!-- Tags -->
        <div v-if="article.tags && article.tags.length > 0" class="mt-12 pt-8 border-t border-gray-800">
          <h3 class="text-lg font-semibold text-white mb-4">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in article.tags" 
              :key="tag"
              class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </article>
    
    <!-- Loading State -->
    <div v-else-if="pending" class="flex items-center justify-center min-h-screen">
      <div class="text-gray-400">Loading article...</div>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-white mb-4">Article Not Found</h2>
        <p class="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
        <NuxtLink to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug as string

// Fetch the article using API endpoint
const { data: article, pending, error } = await useFetch(`/api/blog/${slug}`)

// Enable scrolling on blog article page
onMounted(() => {
  if (process.client) {
    // Remove any overflow restrictions to allow natural scrolling
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.documentElement.style.height = 'auto'
    document.body.style.height = 'auto'
  }
})

onUnmounted(() => {
  // Don't restrict overflow when leaving the page
})

// Format date for display
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  } catch {
    return dateString
  }
}

// Share functions
const shareOnLinkedIn = () => {
  const url = `https://jamesrossjr.com${route.path}`
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  window.open(linkedInUrl, '_blank')
}


const copyLink = () => {
  const url = `https://jamesrossjr.com${route.path}`
  navigator.clipboard.writeText(url)
  alert('Link copied to clipboard!')
}

// SEO
useHead({
  title: article.value?.title,
  meta: [
    { name: 'description', content: article.value?.description },
    { property: 'og:title', content: article.value?.title },
    { property: 'og:description', content: article.value?.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://jamesrossjr.com${route.path}` },
    { property: 'article:published_time', content: article.value?.date },
    { property: 'article:author', content: article.value?.author?.name },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: article.value?.title },
    { name: 'twitter:description', content: article.value?.description },
  ]
})
</script>

<style scoped>
/* Ensure page scrolling */
:global(html), :global(body) {
  overflow-y: auto !important;
  height: auto !important;
}

/* Prose customization for dark theme */
:deep(.prose) {
  --tw-prose-body: rgb(209 213 219);
  --tw-prose-headings: rgb(255 255 255);
  --tw-prose-links: rgb(96 165 250);
  --tw-prose-bold: rgb(255 255 255);
  --tw-prose-code: rgb(248 250 252);
  --tw-prose-pre-bg: rgb(31 41 55);
  --tw-prose-pre-code: rgb(248 250 252);
  --tw-prose-quotes: rgb(209 213 219);
  --tw-prose-quote-borders: rgb(75 85 99);
  --tw-prose-hr: rgb(75 85 99);
  --tw-prose-bullets: rgb(156 163 175);
  color: rgb(209 213 219);
}

:deep(.prose h2) {
  @apply text-3xl font-bold text-white mt-12 mb-6;
}

:deep(.prose h3) {
  @apply text-2xl font-semibold text-white mt-8 mb-4;
}

:deep(.prose p) {
  @apply text-gray-300 mb-6 leading-relaxed;
}

:deep(.prose ul) {
  @apply list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4;
}

:deep(.prose ol) {
  @apply list-decimal list-inside text-gray-300 space-y-2 mb-6 ml-4;
}

:deep(.prose li) {
  @apply text-gray-300;
}

:deep(.prose pre) {
  @apply bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6;
}

:deep(.prose code) {
  @apply bg-gray-800 px-2 py-1 rounded text-sm text-gray-200;
}

:deep(.prose pre code) {
  @apply bg-transparent p-0 text-sm;
}

:deep(.prose blockquote) {
  @apply border-l-4 border-blue-500 pl-6 italic text-gray-400 my-6;
}

:deep(.prose a) {
  @apply text-blue-400 hover:text-blue-300 transition-colors underline;
}

:deep(.prose strong) {
  @apply font-bold text-white;
}

:deep(.prose hr) {
  @apply border-gray-700 my-12;
}

:deep(.prose img) {
  @apply rounded-lg my-8;
}

:deep(.prose table) {
  @apply w-full text-left text-gray-300 mb-6;
}

:deep(.prose th) {
  @apply bg-gray-800 font-semibold text-white px-4 py-2;
}

:deep(.prose td) {
  @apply border-t border-gray-700 px-4 py-2;
}
</style>