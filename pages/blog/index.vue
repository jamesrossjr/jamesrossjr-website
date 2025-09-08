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
    readTime: 8,
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
    <h2>Introduction to Ray and Kubernetes</h2>
    <p>Building scalable AI pipelines requires careful orchestration of compute resources. Ray provides a simple, universal API for building distributed applications, while Kubernetes handles container orchestration at scale.</p>
    
    <h2>Architecture Overview</h2>
    <p>Our pipeline architecture consists of three main components: the Ray cluster for distributed computing, Kubernetes for container orchestration, and a message queue for task distribution.</p>
    
    <h2>Implementation</h2>
    <p>Start by deploying Ray on Kubernetes using the official Helm charts. Configure autoscaling based on workload demands and implement proper monitoring.</p>
    
    <h2>Best Practices</h2>
    <p>Always implement proper error handling, use resource limits effectively, and monitor your pipelines continuously for optimal performance.</p>
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
  @apply text-2xl font-bold text-white mt-8 mb-4;
}

.prose p {
  @apply text-gray-300 mb-4 leading-relaxed;
}

.prose ul {
  @apply list-disc list-inside text-gray-300 mb-4;
}

.prose pre {
  @apply bg-gray-800 rounded-lg p-4 overflow-x-auto mb-4;
}

.prose code {
  @apply bg-gray-800 px-2 py-1 rounded text-sm;
}
</style>