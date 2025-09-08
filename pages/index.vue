<template>
  <NuxtLayout name="horizontal">
    <!-- Section 1: Hero -->
    <section class="section-panel" data-section="hero">
      <div class="relative w-screen h-screen flex items-center justify-center overflow-hidden">
        
        <!-- Content -->
        <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 class="animate-element text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              JAMES ROSS JR
            </span>
          </h1>
          <p class="animate-element text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Strategic Systems Architect
          </p>
          <div class="animate-element flex justify-center gap-6 text-gray-400">
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              Enterprise Architecture
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Cloud Solutions
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v1H3a1 1 0 00-1 1v10a1 1 0 001 1h1v1a1 1 0 001 1h1a1 1 0 001-1v-1h6v1a1 1 0 001 1h1a1 1 0 001-1v-1h1a1 1 0 001-1V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H7zm0 2h6v10H7V4z" clipRule="evenodd" />
              </svg>
              AI Integration
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: About -->
    <section class="section-panel" data-section="about">
      <div class="w-screen h-screen flex items-center justify-center">
        <div class="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="animate-element text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic Vision
              <span class="block text-3xl md:text-4xl text-blue-400 mt-2">Meets Technical Excellence</span>
            </h2>
            <p class="animate-element text-gray-300 text-lg leading-relaxed mb-6">
              With over a decade of experience architecting enterprise solutions, I bridge the gap between business strategy and technical implementation.
            </p>
            <div class="animate-element space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Enterprise Scale</h3>
                  <p class="text-gray-400 text-sm">Architected solutions processing billions of transactions daily</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">Cloud Native</h3>
                  <p class="text-gray-400 text-sm">Expert in AWS, Azure, and GCP architectures</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-1">AI & ML Integration</h3>
                  <p class="text-gray-400 text-sm">Pioneering intelligent system architectures</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="animate-element relative z-10">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-30"></div>
              <div class="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <div class="text-4xl font-bold text-blue-400">50+</div>
                    <div class="text-gray-400 text-sm mt-1">Enterprise Projects</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-purple-400">$100M+</div>
                    <div class="text-gray-400 text-sm mt-1">Value Created</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-green-400">15+</div>
                    <div class="text-gray-400 text-sm mt-1">Years Experience</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold text-yellow-400">98%</div>
                    <div class="text-gray-400 text-sm mt-1">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Portfolio -->
    <section class="section-panel" data-section="portfolio">
      <div class="w-screen h-screen flex items-center justify-center">
        <div class="max-w-7xl mx-auto px-8">
          <h2 class="animate-element text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            Featured Work
          </h2>
          <div class="animate-element grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="group relative overflow-hidden rounded-xl cursor-pointer">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div class="relative p-8 h-80 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                <div class="transform group-hover:translate-y-0 translate-y-4 transition-transform">
                  <h3 class="text-2xl font-bold text-white mb-2">Enterprise Cloud Migration</h3>
                  <p class="text-gray-300 text-sm mb-4">Reduced infrastructure costs by 40% while improving performance</p>
                  <div class="flex items-center text-blue-400">
                    <span class="text-sm">View Case Study</span>
                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Services -->
    <section class="section-panel" data-section="services">
      <div class="w-screen h-screen flex items-center justify-center">
        <div class="max-w-6xl mx-auto px-8">
          <h2 class="animate-element text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            Services
          </h2>
          <div class="animate-element grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
              <div class="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">Architecture Consulting</h3>
              <p class="text-gray-400 mb-4">Design scalable, resilient systems that grow with your business</p>
              <ul class="space-y-2 text-gray-300 text-sm">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  System Design & Review
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Technology Stack Selection
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance Optimization
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors">
              <div class="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">Digital Transformation</h3>
              <p class="text-gray-400 mb-4">Modernize legacy systems and embrace cloud-native architectures</p>
              <ul class="space-y-2 text-gray-300 text-sm">
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cloud Migration Strategy
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Microservices Architecture
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  DevOps Implementation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Blog -->
    <section class="section-panel" data-section="blog">
      <div class="w-screen h-screen flex items-center justify-center">
        <div class="max-w-6xl mx-auto px-8">
          <h2 class="animate-element text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            Latest Insights
          </h2>
          <div class="animate-element grid grid-cols-1 md:grid-cols-2 gap-6">
            <article class="bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors group">
              <div class="p-8">
                <div class="text-blue-400 text-sm font-semibold mb-2">ARCHITECTURE</div>
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  Building Resilient Microservices at Scale
                </h3>
                <p class="text-gray-400 mb-4">
                  Learn the patterns and practices for building microservices that can handle billions of requests
                </p>
                <div class="flex items-center text-gray-300 text-sm">
                  <span>5 min read</span>
                  <span class="mx-2">•</span>
                  <span>March 15, 2024</span>
                </div>
              </div>
            </article>
            <article class="bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors group">
              <div class="p-8">
                <div class="text-purple-400 text-sm font-semibold mb-2">AI & ML</div>
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Integrating AI into Enterprise Systems
                </h3>
                <p class="text-gray-400 mb-4">
                  A practical guide to adding intelligence to your existing infrastructure
                </p>
                <div class="flex items-center text-gray-300 text-sm">
                  <span>8 min read</span>
                  <span class="mx-2">•</span>
                  <span>March 10, 2024</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Contact -->
    <section class="section-panel" data-section="contact">
      <div class="w-screen h-screen flex items-center justify-center">
        <div class="max-w-4xl mx-auto px-8 text-center">
          <h2 class="animate-element text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Extraordinary
            </span>
          </h2>
          <p class="animate-element text-xl text-gray-300 mb-12">
            Ready to transform your technical vision into reality?
          </p>
          <div class="animate-element flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@jamesrossjr.com" class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105">
              Start a Conversation
            </a>
            <a href="https://calendly.com/jamesrossjr" class="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 transition-all">
              Schedule a Call
            </a>
          </div>
          <div class="animate-element mt-12 flex justify-center gap-6">
            <a href="https://linkedin.com/in/jamesrossjr" class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/jamesrossjr" class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://twitter.com/jamesrossjr" class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'James Ross Jr. - Strategic Systems Architect',
  meta: [
    {
      name: 'description',
      content: 'Strategic Systems Architect specializing in enterprise transformations, cloud architecture, and technical leadership.'
    }
  ]
})
</script>

<style>
/* Custom scrollbar for horizontal scroll */
::-webkit-scrollbar {
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, #2563eb, #7c3aed);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Disable vertical scroll */
body {
  overflow-y: hidden;
  overflow-x: auto;
}

/* Section panels */
.section-panel {
  flex: 0 0 100vw;
  width: 100vw;
  height: 100vh;
  position: relative;
  scroll-snap-align: none;
}

</style>