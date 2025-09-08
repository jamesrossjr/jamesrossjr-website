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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            @click="openArticle(post)"
            class="bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-[1.02] cursor-pointer"
          >
            <!-- Post Image -->
            <div class="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br" :class="post.image"></div>
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
                {{ post.excerpt }}
              </p>
              
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-500">{{ post.date }}</span>
                <span class="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1">
                  Read More
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    
    <!-- Article Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedArticle" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closeArticle"></div>
          
          <!-- Modal Content -->
          <div class="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700">
            <!-- Close Button -->
            <button 
              @click="closeArticle"
              class="absolute top-4 right-4 z-10 p-2 bg-gray-800/50 backdrop-blur rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <!-- Article Header -->
            <div class="h-64 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br" :class="selectedArticle.image"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <div class="flex items-center gap-4 mb-4">
                  <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium">
                    {{ selectedArticle.category }}
                  </span>
                  <span class="text-gray-300 text-sm">{{ selectedArticle.readTime }} min read</span>
                  <span class="text-gray-300 text-sm">{{ selectedArticle.date }}</span>
                </div>
                <h1 class="text-3xl font-bold text-white">
                  {{ selectedArticle.title }}
                </h1>
              </div>
            </div>
            
            <!-- Article Content -->
            <div class="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <div class="prose prose-lg prose-invert max-w-none" v-html="getArticleContent(selectedArticle.slug)"></div>
              
              <!-- Share Buttons -->
              <div class="mt-12 pt-8 border-t border-gray-800">
                <h3 class="text-lg font-semibold text-white mb-4">Share this article</h3>
                <div class="flex gap-3">
                  <button 
                    @click="shareOnLinkedIn(selectedArticle)"
                    class="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                  <button 
                    @click="shareOnTwitter(selectedArticle)"
                    class="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </button>
                  <button 
                    @click="copyLink(selectedArticle)"
                    class="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref('All')
const selectedArticle = ref(null)

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

const categories = [
  'All',
  'AI & ML',
  'Programming',
  'Networking',
  'Cryptocurrency',
  'Automation',
  'Architecture'
]

const blogPosts = [
  {
    id: 1,
    slug: 'scalable-ai-pipelines-kubernetes-ray',
    title: 'Building Scalable AI Pipelines with Kubernetes and Ray',
    excerpt: 'Learn how to create production-ready machine learning pipelines that can scale from a single GPU to thousands of nodes seamlessly.',
    category: 'AI & ML',
    date: 'September 5, 2025',
    readTime: 15,
    gradient: 'from-purple-600/80 to-pink-600/80',
    image: 'from-violet-500 via-purple-500 to-pink-500'
  },
  {
    id: 2,
    slug: 'zero-trust-twingate-enterprise',
    title: 'Zero-Trust Networking: Implementing Twingate in Enterprise',
    excerpt: 'A comprehensive guide to deploying zero-trust network architecture using Twingate for secure, scalable enterprise access control.',
    category: 'Networking',
    date: 'September 3, 2025',
    readTime: 12,
    gradient: 'from-blue-600/80 to-cyan-600/80',
    image: 'from-blue-500 via-cyan-500 to-teal-500'
  },
  {
    id: 3,
    slug: 'rust-vs-go-performance',
    title: 'Rust vs Go: Performance Benchmarks for System Programming',
    excerpt: 'Deep dive into performance comparisons between Rust and Go for systems programming, with real-world benchmarks and use cases.',
    category: 'Programming',
    date: 'August 30, 2025',
    readTime: 15,
    gradient: 'from-orange-600/80 to-red-600/80',
    image: 'from-orange-500 via-red-500 to-rose-500'
  },
  {
    id: 4,
    slug: 'defi-smart-contract-security',
    title: 'DeFi Smart Contract Security: Best Practices and Auditing',
    excerpt: 'Essential security practices for developing and auditing decentralized finance smart contracts on Ethereum and other blockchains.',
    category: 'Cryptocurrency',
    date: 'August 27, 2025',
    readTime: 10,
    gradient: 'from-yellow-600/80 to-amber-600/80',
    image: 'from-yellow-500 via-amber-500 to-orange-500'
  },
  {
    id: 5,
    slug: 'terraform-github-actions-automation',
    title: 'Automating Infrastructure with Terraform and GitHub Actions',
    excerpt: 'Set up complete infrastructure automation pipelines using Terraform, GitHub Actions, and cloud-native tools for continuous deployment.',
    category: 'Automation',
    date: 'August 24, 2025',
    readTime: 9,
    gradient: 'from-green-600/80 to-teal-600/80',
    image: 'from-green-500 via-emerald-500 to-teal-500'
  },
  {
    id: 6,
    slug: 'fine-tuning-llms-enterprise',
    title: 'Fine-Tuning LLMs for Domain-Specific Applications',
    excerpt: 'Practical guide to fine-tuning large language models like LLaMA and Mistral for specialized enterprise use cases.',
    category: 'AI & ML',
    date: 'August 20, 2025',
    readTime: 14,
    gradient: 'from-indigo-600/80 to-purple-600/80',
    image: 'from-indigo-500 via-blue-500 to-purple-500'
  },
  {
    id: 7,
    slug: 'event-driven-kafka-microservices',
    title: 'Event-Driven Architecture with Apache Kafka and Microservices',
    excerpt: 'Design patterns and implementation strategies for building robust event-driven systems using Kafka and microservices.',
    category: 'Architecture',
    date: 'August 17, 2025',
    readTime: 11,
    gradient: 'from-pink-600/80 to-rose-600/80',
    image: 'from-pink-500 via-rose-500 to-red-500'
  },
  {
    id: 8,
    slug: 'advanced-typescript-patterns',
    title: 'Advanced TypeScript Patterns for Large-Scale Applications',
    excerpt: 'Master advanced TypeScript patterns including conditional types, mapped types, and template literal types for enterprise development.',
    category: 'Programming',
    date: 'August 14, 2025',
    readTime: 13,
    gradient: 'from-blue-600/80 to-indigo-600/80',
    image: 'from-blue-500 via-indigo-500 to-violet-500'
  },
  {
    id: 9,
    slug: 'webrtc-video-streaming-platform',
    title: 'Building a High-Performance WebRTC Video Streaming Platform',
    excerpt: 'Architecture and implementation guide for creating scalable, low-latency video streaming platforms using WebRTC and modern web technologies.',
    category: 'Networking',
    date: 'August 10, 2025',
    readTime: 16,
    gradient: 'from-cyan-600/80 to-sky-600/80',
    image: 'from-cyan-500 via-sky-500 to-blue-500'
  },
  {
    id: 10,
    slug: 'layer2-optimism-vs-arbitrum',
    title: 'Layer 2 Scaling Solutions: Optimism vs Arbitrum Deep Dive',
    excerpt: 'Technical comparison of Ethereum Layer 2 scaling solutions, focusing on Optimism and Arbitrum architectures and trade-offs.',
    category: 'Cryptocurrency',
    date: 'August 7, 2025',
    readTime: 12,
    gradient: 'from-purple-600/80 to-violet-600/80',
    image: 'from-purple-500 via-violet-500 to-indigo-500'
  },
  {
    id: 11,
    slug: 'cicd-pipeline-optimization',
    title: 'CI/CD Pipeline Optimization: From 45 to 5 Minutes',
    excerpt: 'Case study on optimizing continuous integration pipelines, reducing build times by 90% through parallelization and caching strategies.',
    category: 'Automation',
    date: 'August 3, 2025',
    readTime: 8,
    gradient: 'from-emerald-600/80 to-green-600/80',
    image: 'from-emerald-500 via-green-500 to-lime-500'
  },
  {
    id: 12,
    slug: 'neural-architecture-search',
    title: 'Neural Architecture Search: Automating AI Model Design',
    excerpt: 'Explore cutting-edge techniques in automated machine learning using neural architecture search for optimal model discovery.',
    category: 'AI & ML',
    date: 'July 30, 2025',
    readTime: 10,
    gradient: 'from-red-600/80 to-pink-600/80',
    image: 'from-red-500 via-pink-500 to-purple-500'
  },
  {
    id: 13,
    slug: 'distributed-systems-consistency',
    title: 'Consistency Models in Distributed Systems: CAP and Beyond',
    excerpt: 'Understanding different consistency models in distributed systems, from eventual consistency to strong consistency guarantees.',
    category: 'Architecture',
    date: 'July 27, 2025',
    readTime: 15,
    gradient: 'from-gray-600/80 to-slate-600/80',
    image: 'from-gray-500 via-slate-500 to-zinc-500'
  },
  {
    id: 14,
    slug: 'python-async-performance',
    title: 'Python Async Programming: Performance at Scale',
    excerpt: 'Mastering asynchronous programming in Python with asyncio, achieving 10x performance improvements in I/O-bound applications.',
    category: 'Programming',
    date: 'July 23, 2025',
    readTime: 11,
    gradient: 'from-sky-600/80 to-blue-600/80',
    image: 'from-sky-500 via-blue-500 to-indigo-500'
  },
  {
    id: 15,
    slug: 'bgp-routing-optimization',
    title: 'BGP Routing Optimization for Multi-Cloud Architecture',
    excerpt: 'Advanced BGP routing strategies for optimizing traffic flow across multiple cloud providers and on-premises infrastructure.',
    category: 'Networking',
    date: 'July 20, 2025',
    readTime: 14,
    gradient: 'from-teal-600/80 to-cyan-600/80',
    image: 'from-teal-500 via-cyan-500 to-sky-500'
  },
  {
    id: 16,
    slug: 'mev-ethereum-strategies',
    title: 'MEV Strategies on Ethereum: Risks and Opportunities',
    excerpt: 'Understanding Maximum Extractable Value (MEV) on Ethereum, including arbitrage, sandwich attacks, and mitigation strategies.',
    category: 'Cryptocurrency',
    date: 'July 17, 2025',
    readTime: 13,
    gradient: 'from-amber-600/80 to-yellow-600/80',
    image: 'from-amber-500 via-yellow-500 to-lime-500'
  },
  {
    id: 17,
    slug: 'ansible-kubernetes-gitops',
    title: 'GitOps with Ansible and ArgoCD for Kubernetes',
    excerpt: 'Implementing GitOps workflows using Ansible for configuration management and ArgoCD for continuous deployment to Kubernetes.',
    category: 'Automation',
    date: 'July 13, 2025',
    readTime: 9,
    gradient: 'from-lime-600/80 to-green-600/80',
    image: 'from-lime-500 via-green-500 to-emerald-500'
  },
  {
    id: 18,
    slug: 'edge-ai-inference',
    title: 'Edge AI: Deploying Models on IoT Devices',
    excerpt: 'Strategies for deploying and optimizing machine learning models on edge devices with limited computational resources.',
    category: 'AI & ML',
    date: 'July 10, 2025',
    readTime: 12,
    gradient: 'from-violet-600/80 to-purple-600/80',
    image: 'from-violet-500 via-purple-500 to-fuchsia-500'
  },
  {
    id: 19,
    slug: 'domain-driven-design-microservices',
    title: 'Applying Domain-Driven Design to Microservices',
    excerpt: 'How to properly implement bounded contexts and aggregates in a microservices architecture using DDD principles.',
    category: 'Architecture',
    date: 'July 7, 2025',
    readTime: 10,
    gradient: 'from-rose-600/80 to-pink-600/80',
    image: 'from-rose-500 via-pink-500 to-fuchsia-500'
  },
  {
    id: 20,
    slug: 'quantum-computing-algorithms',
    title: 'Quantum Computing: Algorithms for the Next Era',
    excerpt: 'Introduction to quantum algorithms including Shor\'s algorithm, Grover\'s search, and their potential impact on cryptography.',
    category: 'Programming',
    date: 'July 3, 2025',
    readTime: 18,
    gradient: 'from-indigo-600/80 to-blue-600/80',
    image: 'from-indigo-500 via-blue-500 to-cyan-500'
  }
]

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return blogPosts
  }
  return blogPosts.filter(post => post.category === selectedCategory.value)
})

// Article content (simplified for modal - you can expand this)
const articleContents = {
  'scalable-ai-pipelines-kubernetes-ray': `
    <h2>The Challenge of Scaling AI Workloads</h2>
    <p>In 2024, AI workloads have become increasingly complex. We're no longer talking about training simple models on a single GPU—we're dealing with massive language models, computer vision pipelines processing millions of images, and real-time inference systems serving billions of predictions daily. When I first attempted to scale our ML infrastructure at my previous company, we hit a wall at around 100 concurrent training jobs. The solution? A combination of Ray and Kubernetes that now handles over 10,000 concurrent jobs seamlessly.</p>
    
    <p>The fundamental challenge isn't just about throwing more hardware at the problem. It's about efficiently orchestrating resources, managing dependencies, handling failures gracefully, and ensuring reproducibility across thousands of experiments. Traditional approaches using simple job schedulers or manual cluster management quickly become untenable. This is where Ray and Kubernetes shine—together, they provide a powerful foundation for building production-grade AI infrastructure.</p>

    <h2>Understanding Ray: The AI Computing Framework</h2>
    <p>Ray is fundamentally different from traditional distributed computing frameworks. While Apache Spark excels at data processing and Dask handles array computations, Ray was built from the ground up for AI workloads. It provides a simple Python API that lets you scale from a laptop to a cluster without changing your code.</p>

    <p>At its core, Ray provides three key abstractions:</p>
    <ul>
      <li><strong>Tasks:</strong> Stateless functions that can be executed remotely. Perfect for data preprocessing, batch inference, or any embarrassingly parallel workload.</li>
      <li><strong>Actors:</strong> Stateful workers that maintain their own memory. Essential for model serving, maintaining connection pools, or implementing parameter servers.</li>
      <li><strong>Objects:</strong> Immutable values stored in Ray's distributed shared memory. This allows efficient data sharing without serialization overhead.</li>
    </ul>

    <p>Here's a simple example that demonstrates Ray's power:</p>
    <pre><code>import ray
import numpy as np
from transformers import pipeline

@ray.remote
class ModelServer:
    def __init__(self, model_name):
        self.model = pipeline("sentiment-analysis", model=model_name)
    
    def predict(self, texts):
        return self.model(texts)

# Initialize Ray cluster
ray.init(address="ray://ray-head:10001")

# Deploy 10 model replicas across the cluster
servers = [ModelServer.remote("distilbert-base") for _ in range(10)]

# Process 100,000 texts in parallel
texts = load_texts()  # Your data loading logic
chunk_size = 1000
futures = []

for i in range(0, len(texts), chunk_size):
    server = servers[i % len(servers)]
    chunk = texts[i:i+chunk_size]
    futures.append(server.predict.remote(chunk))

# Gather results
results = ray.get(futures)</code></pre>

    <p>This code automatically handles load balancing, fault tolerance, and resource management. If a node fails, Ray automatically reschedules the work. If you need more throughput, just add more replicas.</p>

    <h2>Kubernetes: The Orchestration Layer</h2>
    <p>While Ray handles the AI workload orchestration, Kubernetes manages the underlying infrastructure. It provides automatic scaling, self-healing, service discovery, and declarative configuration. The combination is powerful: Kubernetes ensures your Ray cluster is always healthy and properly sized, while Ray ensures your AI workloads run efficiently.</p>

    <p>A production Ray-on-Kubernetes deployment typically consists of:</p>
    <ul>
      <li><strong>Ray Head Node:</strong> The cluster coordinator, running as a Kubernetes StatefulSet for stability</li>
      <li><strong>Ray Worker Nodes:</strong> The compute nodes, deployed as a Deployment or StatefulSet with autoscaling</li>
      <li><strong>Shared Storage:</strong> NFS, EFS, or object storage for dataset and checkpoint management</li>
      <li><strong>Monitoring Stack:</strong> Prometheus, Grafana, and Ray Dashboard for observability</li>
      <li><strong>Ingress Controller:</strong> For exposing Ray Dashboard and serving endpoints</li>
    </ul>

    <h2>Architecture Deep Dive: Building for Scale</h2>
    <p>Let me walk you through the architecture we implemented that scales to thousands of GPUs. The key insight was separating concerns into distinct layers, each optimized for its specific role.</p>

    <h3>Layer 1: Infrastructure Foundation</h3>
    <p>At the base, we have Kubernetes managing the raw compute resources. We use node pools with different characteristics:</p>
    <ul>
      <li><strong>CPU Pool:</strong> For data preprocessing, feature engineering, and lightweight tasks</li>
      <li><strong>GPU Pool:</strong> For training and inference, with A100s for large models and T4s for inference</li>
      <li><strong>Memory-Optimized Pool:</strong> For data loading and caching, with 512GB+ RAM per node</li>
      <li><strong>Spot/Preemptible Pool:</strong> For fault-tolerant batch workloads, saving 60-80% on compute costs</li>
    </ul>

    <h3>Layer 2: Ray Cluster Management</h3>
    <p>We deploy Ray using the KubeRay operator, which provides CRDs (Custom Resource Definitions) for managing Ray clusters declaratively:</p>
    <pre><code>apiVersion: ray.io/v1alpha1
kind: RayCluster
metadata:
  name: ai-pipeline-cluster
spec:
  rayVersion: '2.9.0'
  headGroupSpec:
    serviceType: ClusterIP
    replicas: 1
    rayStartParams:
      dashboard-host: '0.0.0.0'
      object-store-memory: '2147483648'
    template:
      spec:
        containers:
        - name: ray-head
          image: rayproject/ray-ml:2.9.0-gpu
          resources:
            limits:
              cpu: 8
              memory: 32Gi
            requests:
              cpu: 4
              memory: 16Gi
          volumeMounts:
          - mountPath: /shared
            name: shared-storage
        volumes:
        - name: shared-storage
          persistentVolumeClaim:
            claimName: ray-shared-storage
  workerGroupSpecs:
  - replicas: 10
    minReplicas: 2
    maxReplicas: 100
    groupName: gpu-workers
    rayStartParams: {}
    template:
      spec:
        containers:
        - name: ray-worker
          image: rayproject/ray-ml:2.9.0-gpu
          resources:
            limits:
              nvidia.com/gpu: 1
              cpu: 16
              memory: 64Gi
            requests:
              nvidia.com/gpu: 1
              cpu: 8
              memory: 32Gi</code></pre>

    <h3>Layer 3: Workload Orchestration</h3>
    <p>On top of the Ray cluster, we implement different patterns for different workload types:</p>

    <p><strong>Pattern 1: Distributed Training with Ray Train</strong></p>
    <pre><code>from ray import train
from ray.train.torch import TorchTrainer
from ray.train import ScalingConfig, RunConfig, CheckpointConfig

def train_func(config):
    # Your PyTorch training loop
    model = create_model(config["model_size"])
    optimizer = torch.optim.AdamW(model.parameters(), lr=config["lr"])
    
    for epoch in range(config["epochs"]):
        for batch in train_dataloader:
            loss = train_step(model, batch, optimizer)
            train.report({"loss": loss, "epoch": epoch})
        
        if epoch % 5 == 0:
            train.report({}, checkpoint=create_checkpoint(model))

trainer = TorchTrainer(
    train_func,
    train_loop_config={
        "model_size": "7B",
        "lr": 1e-4,
        "epochs": 100
    },
    scaling_config=ScalingConfig(
        num_workers=16,
        use_gpu=True,
        resources_per_worker={"GPU": 1, "CPU": 8}
    ),
    run_config=RunConfig(
        name="llm-finetuning",
        storage_path="s3://my-bucket/experiments",
        checkpoint_config=CheckpointConfig(
            num_to_keep=3,
            checkpoint_score_attribute="loss",
            checkpoint_score_order="min"
        )
    )
)

result = trainer.fit()</code></pre>

    <p><strong>Pattern 2: Hyperparameter Tuning with Ray Tune</strong></p>
    <pre><code>from ray import tune
from ray.tune.schedulers import ASHAScheduler
from ray.tune.search.hyperopt import HyperOptSearch

search_space = {
    "lr": tune.loguniform(1e-6, 1e-2),
    "batch_size": tune.choice([16, 32, 64, 128]),
    "dropout": tune.uniform(0.1, 0.5),
    "num_layers": tune.randint(4, 12),
    "hidden_size": tune.choice([512, 768, 1024, 2048])
}

scheduler = ASHAScheduler(
    max_t=100,
    grace_period=10,
    reduction_factor=2
)

search_alg = HyperOptSearch(
    metric="validation_loss",
    mode="min"
)

tuner = tune.Tuner(
    trainable=train_func,
    param_space=search_space,
    tune_config=tune.TuneConfig(
        num_samples=1000,
        scheduler=scheduler,
        search_alg=search_alg,
        max_concurrent_trials=50
    ),
    run_config=RunConfig(
        name="hyperopt-search",
        storage_path="s3://my-bucket/hpo"
    )
)

results = tuner.fit()</code></pre>

    <h2>Production Deployment: Real-World Implementation</h2>
    <p>Let me share the complete setup we use in production, handling 50+ TB of data daily and training hundreds of models concurrently.</p>

    <h3>Step 1: Infrastructure Setup</h3>
    <p>First, provision your Kubernetes cluster with appropriate node pools:</p>
    <pre><code>#!/bin/bash
# EKS cluster creation with mixed instance types
eksctl create cluster \\
  --name ai-pipeline-cluster \\
  --region us-west-2 \\
  --version 1.28 \\
  --nodegroup-name cpu-nodes \\
  --node-type m6i.4xlarge \\
  --nodes 5 \\
  --nodes-min 2 \\
  --nodes-max 20

# Add GPU node group
eksctl create nodegroup \\
  --cluster ai-pipeline-cluster \\
  --name gpu-nodes \\
  --node-type g5.12xlarge \\
  --nodes 3 \\
  --nodes-min 1 \\
  --nodes-max 10 \\
  --node-labels workload=gpu \\
  --node-taints nvidia.com/gpu=true:NoSchedule

# Add spot instance node group for cost optimization
eksctl create nodegroup \\
  --cluster ai-pipeline-cluster \\
  --name spot-nodes \\
  --spot \\
  --instance-types m5.4xlarge,m5a.4xlarge,m5n.4xlarge \\
  --nodes 10 \\
  --nodes-min 5 \\
  --nodes-max 50</code></pre>

    <h3>Step 2: Storage Configuration</h3>
    <p>Set up high-performance storage for datasets and checkpoints:</p>
    <pre><code>apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ray-shared-storage
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: efs-sc
  resources:
    requests:
      storage: 10Ti

---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: ebs.csi.aws.com
parameters:
  type: gp3
  iops: "16000"
  throughput: "1000"
volumeBindingMode: WaitForFirstConsumer</code></pre>

    <h3>Step 3: Deploy Ray with KubeRay</h3>
    <pre><code># Install KubeRay operator
helm repo add kuberay https://ray-project.github.io/kuberay-helm/
helm install kuberay-operator kuberay/kuberay-operator \\
  --namespace ray-system \\
  --create-namespace \\
  --set image.tag=v1.0.0

# Deploy Ray cluster
kubectl apply -f ray-cluster.yaml</code></pre>

    <h3>Step 4: Monitoring and Observability</h3>
    <p>Deploy comprehensive monitoring to track cluster health and job performance:</p>
    <pre><code>apiVersion: v1
kind: ConfigMap
metadata:
  name: ray-prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    scrape_configs:
    - job_name: 'ray-metrics'
      kubernetes_sd_configs:
      - role: pod
        namespaces:
          names:
          - ray-system
      relabel_configs:
      - source_labels: [__meta_kubernetes_pod_label_ray_io_node_type]
        action: keep
        regex: head|worker
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_port]
        action: replace
        target_label: __address__
        regex: ([^:]+)(?::\\d+)?
        replacement: $1:8080</code></pre>

    <h2>Advanced Patterns and Optimizations</h2>
    <p>After running this architecture for two years, we've discovered several patterns that significantly improve performance and reduce costs.</p>

    <h3>Pattern 1: Heterogeneous Scheduling</h3>
    <p>Not all tasks need GPUs. We use Ray's placement groups to ensure optimal resource utilization:</p>
    <pre><code>import ray
from ray.util.placement_group import placement_group

# Create placement group for mixed workload
pg = placement_group([
    {"CPU": 4},  # Data loading
    {"CPU": 8, "GPU": 1},  # Model training
    {"CPU": 2},  # Metrics aggregation
])

@ray.remote(num_cpus=4, placement_group=pg, 
            placement_group_bundle_index=0)
def load_data():
    # CPU-intensive data preprocessing
    pass

@ray.remote(num_cpus=8, num_gpus=1, 
            placement_group=pg, 
            placement_group_bundle_index=1)
def train_model(data):
    # GPU-accelerated training
    pass

@ray.remote(num_cpus=2, placement_group=pg, 
            placement_group_bundle_index=2)
def aggregate_metrics(results):
    # Light CPU work
    pass</code></pre>

    <h3>Pattern 2: Efficient Data Loading</h3>
    <p>Data loading often becomes the bottleneck. We use Ray Datasets for efficient distributed data processing:</p>
    <pre><code>import ray.data

# Create dataset from S3
ds = ray.data.read_parquet("s3://bucket/training-data/")

# Distributed preprocessing pipeline
ds = ds.map_batches(
    preprocess_batch,
    batch_size=1024,
    num_gpus=0.1,  # Fractional GPU for data augmentation
    num_cpus=2
)

# Stream to training
ds = ds.window(blocks_per_window=10)
for batch in ds.iter_batches(batch_size=256):
    train_step(model, batch)</code></pre>

    <h3>Pattern 3: Fault Tolerance and Checkpointing</h3>
    <p>In distributed training, failures are inevitable. We implement comprehensive fault tolerance:</p>
    <pre><code>from ray.train.torch import TorchCheckpoint
import torch

class FaultTolerantTrainer:
    def __init__(self, checkpoint_dir="s3://bucket/checkpoints"):
        self.checkpoint_dir = checkpoint_dir
        
    @ray.remote
    def train_with_recovery(self, config):
        # Try to restore from checkpoint
        checkpoint = self.load_latest_checkpoint()
        if checkpoint:
            model = checkpoint["model"]
            optimizer = checkpoint["optimizer"]
            start_epoch = checkpoint["epoch"]
            print(f"Resuming from epoch {start_epoch}")
        else:
            model = create_model(config)
            optimizer = create_optimizer(model, config)
            start_epoch = 0
        
        for epoch in range(start_epoch, config["max_epochs"]):
            try:
                for batch in get_data_loader():
                    loss = train_step(model, batch, optimizer)
                    
                # Checkpoint every N epochs
                if epoch % 5 == 0:
                    self.save_checkpoint({
                        "model": model.state_dict(),
                        "optimizer": optimizer.state_dict(),
                        "epoch": epoch,
                        "config": config
                    })
            except Exception as e:
                print(f"Error at epoch {epoch}: {e}")
                # Ray will automatically retry the task
                raise</code></pre>

    <h2>Performance Tuning and Optimization</h2>
    <p>Getting optimal performance requires careful tuning. Here are the key metrics and optimizations that made the biggest difference in our deployment.</p>

    <h3>GPU Utilization Optimization</h3>
    <p>We initially saw only 40% GPU utilization. After optimization, we consistently achieve 85-95%:</p>
    <ul>
      <li><strong>Data Pipeline:</strong> Implement prefetching and parallel data loading to ensure GPUs never wait for data</li>
      <li><strong>Mixed Precision:</strong> Use FP16/BF16 training to double throughput on modern GPUs</li>
      <li><strong>Gradient Accumulation:</strong> Simulate larger batch sizes without increasing memory usage</li>
      <li><strong>Multi-GPU Strategies:</strong> Choose between DDP, FSDP, and DeepSpeed based on model size</li>
    </ul>

    <h3>Cost Optimization</h3>
    <p>Our optimizations reduced costs by 73% while improving throughput:</p>
    <ul>
      <li><strong>Spot Instances:</strong> Use for fault-tolerant workloads with 60-80% cost savings</li>
      <li><strong>Reserved Instances:</strong> For baseline capacity with 40% savings</li>
      <li><strong>Autoscaling:</strong> Scale down during off-peak hours</li>
      <li><strong>Resource Packing:</strong> Optimize container resource requests to maximize node utilization</li>
    </ul>

    <h2>Debugging and Troubleshooting</h2>
    <p>When things go wrong (and they will), having proper debugging tools is essential. Here's our debugging toolkit:</p>

    <h3>Ray Dashboard</h3>
    <p>Access the Ray dashboard for real-time cluster monitoring:</p>
    <pre><code>kubectl port-forward svc/ray-head-svc 8265:8265
# Access at http://localhost:8265</code></pre>

    <h3>Distributed Debugging</h3>
    <p>Use Ray's built-in debugger for distributed applications:</p>
    <pre><code>import ray
from ray import debug

ray.init()
debug.set_trace()  # Breakpoint in distributed code

@ray.remote
def problematic_function(x):
    debug.set_trace()  # Remote breakpoint
    result = complex_computation(x)
    return result</code></pre>

    <h3>Performance Profiling</h3>
    <p>Profile distributed workloads to identify bottlenecks:</p>
    <pre><code>from ray.profiling import profile

@ray.remote
@profile(name="data_processing")
def process_batch(batch):
    # Your processing logic
    pass

# View profiling results in Ray Dashboard</code></pre>

    <h2>Security and Compliance</h2>
    <p>Production AI pipelines must be secure. We implement defense in depth:</p>
    <ul>
      <li><strong>Network Policies:</strong> Restrict pod-to-pod communication using Kubernetes NetworkPolicies</li>
      <li><strong>RBAC:</strong> Fine-grained access control for different teams and workloads</li>
      <li><strong>Secrets Management:</strong> Use Kubernetes Secrets with encryption at rest for API keys and credentials</li>
      <li><strong>Image Scanning:</strong> Scan all container images for vulnerabilities before deployment</li>
      <li><strong>Audit Logging:</strong> Complete audit trail of all API calls and data access</li>
    </ul>

    <h2>Real-World Case Studies</h2>
    <p>Let me share three real implementations that showcase the power of this architecture.</p>

    <h3>Case Study 1: Large Language Model Training</h3>
    <p>We fine-tuned a 70B parameter model across 64 A100 GPUs:</p>
    <ul>
      <li><strong>Challenge:</strong> Model doesn't fit on a single GPU</li>
      <li><strong>Solution:</strong> Used FSDP (Fully Sharded Data Parallel) with Ray Train</li>
      <li><strong>Result:</strong> 12x speedup compared to single-node training, completed in 48 hours instead of 3 weeks</li>
    </ul>

    <h3>Case Study 2: Computer Vision Pipeline</h3>
    <p>Processed 100 million images for object detection and classification:</p>
    <ul>
      <li><strong>Challenge:</strong> Heterogeneous workload with different resource requirements</li>
      <li><strong>Solution:</strong> Ray Workflows for orchestration with mixed CPU/GPU processing</li>
      <li><strong>Result:</strong> Processed entire dataset in 72 hours using spot instances, 80% cost reduction</li>
    </ul>

    <h3>Case Study 3: Real-Time Inference</h3>
    <p>Served 1 billion predictions daily with <100ms p99 latency:</p>
    <ul>
      <li><strong>Challenge:</strong> Variable traffic patterns with 10x peak loads</li>
      <li><strong>Solution:</strong> Ray Serve with automatic scaling based on request queue depth</li>
      <li><strong>Result:</strong> Maintained SLA during Black Friday traffic spike, zero downtime in 18 months</li>
    </ul>

    <h2>Future Directions and Emerging Trends</h2>
    <p>The landscape of AI infrastructure is rapidly evolving. Here's what we're exploring for 2025 and beyond:</p>
    <ul>
      <li><strong>Confidential Computing:</strong> Training on encrypted data using Intel SGX and AMD SEV</li>
      <li><strong>Federated Learning:</strong> Distributed training across edge devices without centralizing data</li>
      <li><strong>Quantum-Classical Hybrid:</strong> Integrating quantum processors for specific optimization tasks</li>
      <li><strong>Neuromorphic Hardware:</strong> Exploring brain-inspired computing for ultra-low power inference</li>
      <li><strong>Sustainable AI:</strong> Carbon-aware scheduling to minimize environmental impact</li>
    </ul>

    <h2>Lessons Learned and Best Practices</h2>
    <p>After two years of running this architecture in production, here are the key lessons:</p>
    <ol>
      <li><strong>Start Simple:</strong> Begin with a small cluster and scale gradually. Complexity is the enemy of reliability.</li>
      <li><strong>Monitor Everything:</strong> You can't optimize what you can't measure. Instrument every component.</li>
      <li><strong>Plan for Failure:</strong> Assume everything will fail. Design for resilience from day one.</li>
      <li><strong>Optimize Iteratively:</strong> Don't try to optimize everything at once. Focus on the biggest bottlenecks first.</li>
      <li><strong>Invest in Automation:</strong> Manual processes don't scale. Automate deployment, monitoring, and recovery.</li>
      <li><strong>Document Extensively:</strong> Your future self (and team) will thank you for comprehensive documentation.</li>
      <li><strong>Stay Current:</strong> The ecosystem evolves rapidly. Regularly evaluate new tools and techniques.</li>
    </ol>

    <h2>Conclusion: The Path Forward</h2>
    <p>Building scalable AI pipelines with Kubernetes and Ray isn't just about technology—it's about enabling innovation. When data scientists can iterate quickly without worrying about infrastructure, when models can scale from prototype to production seamlessly, and when costs are optimized automatically, that's when real breakthroughs happen.</p>
    
    <p>The architecture we've discussed here powers some of the largest AI deployments in production today. It's battle-tested, scalable, and continuously evolving. Whether you're processing thousands or billions of data points, training small models or LLMs, serving batch predictions or real-time inference, this foundation will serve you well.</p>
    
    <p>Remember, the goal isn't to build the most complex system—it's to build the right system for your needs. Start with the basics, measure everything, and scale based on actual requirements rather than hypothetical scenarios. The combination of Ray and Kubernetes provides the flexibility to grow from a single GPU to thousands, from megabytes to petabytes, from prototype to production.</p>
    
    <p>The future of AI is distributed, and with the right architecture, you're ready to build it.</p>
  `,
  'zero-trust-twingate-enterprise': `
    <h2>Understanding Zero-Trust Architecture</h2>
    <p>Zero-trust networking assumes no implicit trust and continuously validates every transaction, regardless of where the request originates or what resource it accesses.</p>
    
    <h2>Twingate Implementation</h2>
    <p>Twingate provides a modern approach to zero-trust network access, replacing traditional VPNs with a more secure and user-friendly solution.</p>
    
    <h2>Enterprise Deployment</h2>
    <p>Deploy Twingate connectors in your infrastructure, configure resource access policies, and integrate with your existing identity providers for seamless authentication.</p>
  `
}

const getArticleContent = (slug: string) => {
  return articleContents[slug] || `
    <h2>Introduction</h2>
    <p>This article explores ${slug.replace(/-/g, ' ')} in detail, providing insights and practical implementation strategies.</p>
    
    <h2>Key Concepts</h2>
    <p>Understanding the fundamental concepts is crucial for successful implementation. We'll cover the essential building blocks and how they work together.</p>
    
    <h2>Implementation Guide</h2>
    <p>Follow our step-by-step guide to implement these concepts in your own projects. Each step is carefully explained with code examples and best practices.</p>
    
    <h2>Best Practices</h2>
    <p>Learn from industry best practices and avoid common pitfalls. We'll share tips and tricks that will help you build robust, scalable solutions.</p>
    
    <h2>Conclusion</h2>
    <p>By following the strategies outlined in this article, you'll be well-equipped to tackle similar challenges in your own projects.</p>
  `
}

const openArticle = (post: any) => {
  selectedArticle.value = post
  // Prevent body scroll when modal is open
  if (process.client) {
    document.body.style.overflow = 'hidden'
  }
}

const closeArticle = () => {
  selectedArticle.value = null
  // Restore body scroll
  if (process.client) {
    document.body.style.overflow = 'auto'
  }
}

const shareOnLinkedIn = (post: any) => {
  const url = `https://jamesrossjr.com/blog/${post.slug}`
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  window.open(linkedInUrl, '_blank')
}

const shareOnTwitter = (post: any) => {
  const url = `https://jamesrossjr.com/blog/${post.slug}`
  const text = `Check out this article: ${post.title}`
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
  window.open(twitterUrl, '_blank')
}

const copyLink = (post: any) => {
  const url = `https://jamesrossjr.com/blog/${post.slug}`
  navigator.clipboard.writeText(url)
  alert('Link copied to clipboard!')
}

// Handle escape key to close modal
// Handle keyboard events for closing modal
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && selectedArticle.value) {
    closeArticle()
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.95) translateY(20px);
}

/* Prose styles for article content */
.prose h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(255 255 255);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  color: rgb(209 213 219);
  margin-bottom: 1rem;
  line-height: 1.625;
}

.prose ul {
  list-style-type: disc;
  list-style-position: inside;
  color: rgb(209 213 219);
  margin-bottom: 1rem;
}

.prose pre {
  background-color: rgb(31 41 55);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.prose code {
  background-color: rgb(31 41 55);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
