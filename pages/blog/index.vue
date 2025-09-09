<template>
  <div class="min-h-screen bg-black overflow-y-auto">
    <!-- Interactive Grid Background -->
    <BackgroundInteractiveGrid />
    
    <!-- Back to Home Button -->
    <div class="fixed top-4 left-4 z-50">
      <NuxtLink to="/" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-xl text-white rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Back</span>
      </NuxtLink>
    </div>
    
    <!-- Blog Header -->
    <div class="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Blog & Insights
        </h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Exploring the intersection of AI, systems architecture, and emerging technologies
        </p>
      </div>
    </div>
    
    <!-- Category Filter -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 mb-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap gap-2 justify-center">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = selectedCategory === category ? 'All' : category"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              selectedCategory === category 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Blog Grid -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div class="max-w-7xl mx-auto">
        <!-- Loading State -->
        <div v-if="pending" class="text-center text-gray-400 py-12">
          Loading articles...
        </div>
        
        <!-- Error State -->
        <div v-else-if="error" class="text-center text-red-400 py-12">
          Error loading articles: {{ error.message }}
        </div>
        
        <!-- Articles Grid -->
        <div v-else-if="filteredPosts && filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="post in filteredPosts" 
            :key="post._path"
            :to="post._path"
            class="bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-[1.02] cursor-pointer block"
          >
            <!-- Post Image -->
            <div class="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br" :class="getCategoryGradient(post.category)"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-white/20" fill="currentColor" viewBox="0 0 20 20">
                  <path v-if="post.category === 'AI & ML'" d="M13 7H7v6h6V7z M10 1a9 9 0 100 18 9 9 0 000-18zm0 16a7 7 0 110-14 7 7 0 010 14z" />
                  <path v-else-if="post.category === 'Programming'" fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  <path v-else-if="post.category === 'Networking'" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1110.89 3.476l-2.817-2.817a2 2 0 10-1.414 1.414l2.817 2.817A6 6 0 014 10z" />
                  <path v-else-if="post.category === 'Cryptocurrency'" d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.035 8 8c0-.034.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.548.433.582 0 .034-.07.34-.433.582a2.305 2.305 0 01-.567.267z M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" />
                  <path v-else-if="post.category === 'Automation'" fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  <path v-else d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                </svg>
              </div>
            </div>
            
            <!-- Post Content -->
            <div class="p-6">
              <div class="flex items-center gap-4 mb-3 text-xs text-gray-400">
                <span class="px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">{{ post.category }}</span>
                <span>{{ post.readTime }} min read</span>
              </div>
              
              <h2 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                {{ post.title }}
              </h2>
              
              <p class="text-gray-400 text-sm mb-4 line-clamp-3">
                {{ post.description }}
              </p>
              
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-500">{{ formatDate(post.date) }}</span>
                <span class="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1">
                  Read More
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
        
        <!-- No Articles State -->
        <div v-else class="text-center text-gray-400 py-12">
          <p class="text-xl mb-4">No articles found</p>
          <p class="text-sm">Check back soon for new content!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref('All')

// Fetch blog posts using useAsyncData and $fetch
const { data: blogPosts, pending, error } = await useLazyAsyncData(
  'blog-posts',
  () => $fetch('/api/blog'),
  {
    default: () => []
  }
)

// Enable scrolling on blog page
onMounted(() => {
  if (process.client) {
    document.documentElement.style.overflowY = 'auto'
    document.body.style.overflowY = 'auto'
    document.documentElement.style.overflowX = 'hidden'
    document.body.style.overflowX = 'hidden'
  }
})

onUnmounted(() => {
  if (process.client) {
    document.documentElement.style.overflowY = 'hidden'
    document.body.style.overflowY = 'hidden'
    document.documentElement.style.overflowX = 'hidden'
    document.body.style.overflowX = 'hidden'
  }
})

// Extract unique categories from blog posts
const categories = computed(() => {
  const cats = new Set(['All'])
  if (blogPosts.value && Array.isArray(blogPosts.value)) {
    blogPosts.value.forEach(post => {
      if (post.category) cats.add(post.category)
    })
  }
  return Array.from(cats)
})

// Get gradient colors based on category
const getCategoryGradient = (category: string) => {
  const gradients: Record<string, string> = {
    'AI & ML': 'from-violet-500 via-purple-500 to-pink-500',
    'Networking': 'from-blue-500 via-cyan-500 to-teal-500',
    'Programming': 'from-orange-500 via-red-500 to-rose-500',
    'Cryptocurrency': 'from-yellow-500 via-amber-500 to-orange-500',
    'Automation': 'from-green-500 via-emerald-500 to-teal-500',
    'Architecture': 'from-pink-500 via-rose-500 to-red-500'
  }
  return gradients[category] || 'from-gray-500 via-slate-500 to-zinc-500'
}

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

// Filter posts by category
const filteredPosts = computed(() => {
  if (!blogPosts.value || !Array.isArray(blogPosts.value)) return []
  
  if (selectedCategory.value === 'All') {
    return blogPosts.value
  }
  
  return blogPosts.value.filter(post => post.category === selectedCategory.value)
})

// Log for debugging
watch(blogPosts, (newPosts) => {
  console.log('Blog posts loaded:', newPosts)
}, { immediate: true })
</script>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>