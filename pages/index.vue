<template>
  <NuxtLayout name="horizontal">
    <!-- Section 1: Hero -->
    <section class="section-panel" data-section="hero">
      <div class="relative w-screen h-screen flex items-center justify-center overflow-hidden">
        
        <!-- Content -->
        <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 class="animate-element text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              JAMES ROSS JR
            </span>
          </h1>
          <p class="animate-element text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 md:mb-8 font-light">
            Strategic Systems Architect
          </p>
          <div class="animate-element flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-gray-400 text-sm sm:text-base">
            <span class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span>Enterprise Architecture</span>
            </span>
            <span class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>On-Prem Solutions</span>
            </span>
            <span class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v1H3a1 1 0 00-1 1v10a1 1 0 001 1h1v1a1 1 0 001 1h1a1 1 0 001-1v-1h6v1a1 1 0 001 1h1a1 1 0 001-1v-1h1a1 1 0 001-1V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H7zm0 2h6v10H7V4z" clipRule="evenodd" />
              </svg>
              <span>AI Integration</span>
            </span>
          </div>
        </div>
        
        <!-- Mobile Swipe Indicator -->
        <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 md:hidden">
          <div class="text-white/50 text-xs animate-pulse">Swipe to navigate</div>
        </div>
      </div>
    </section>

    <!-- Section 2: About -->
    <section class="section-panel" data-section="about">
      <div class="w-screen h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="text-center lg:text-left">
            <h2 class="animate-element text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Strategic Vision
              <span class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-400 mt-2">Meets Technical Excellence</span>
            </h2>
            <p class="animate-element text-gray-300 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
              With 6 years of experience architecting enterprise solutions, I bridge the gap between business strategy and technical implementation.
            </p>
            <div class="animate-element space-y-4 flex flex-col items-center lg:items-start">
              <div class="flex items-center gap-4 w-full max-w-sm lg:max-w-none">
                <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div class="text-left flex-1">
                  <h3 class="text-white font-semibold mb-1">Enterprise Solutions</h3>
                  <p class="text-gray-400 text-sm">Zero-trust networking with Twingate and secure access solutions</p>
                </div>
              </div>
              <div class="flex items-center gap-4 w-full max-w-sm lg:max-w-none">
                <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div class="text-left flex-1">
                  <h3 class="text-white font-semibold mb-1">On-Prem Infrastructure</h3>
                  <p class="text-gray-400 text-sm">Advanced networking and AI hardware solutions with GPU clusters</p>
                </div>
              </div>
              <div class="flex items-center gap-4 w-full max-w-sm lg:max-w-none">
                <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div class="text-left flex-1">
                  <h3 class="text-white font-semibold mb-1">AI & ML Integration</h3>
                  <p class="text-gray-400 text-sm">3 years pioneering intelligent system architectures</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative mt-8 lg:mt-0">
            <div class="animate-element relative z-10">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-30"></div>
              <div class="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700">
                <div class="grid grid-cols-2 gap-4 sm:gap-6">
                  <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">20+</div>
                    <div class="text-gray-400 text-xs sm:text-sm mt-1">Enterprise Projects</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">6</div>
                    <div class="text-gray-400 text-xs sm:text-sm mt-1">Years Experience</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400">3</div>
                    <div class="text-gray-400 text-xs sm:text-sm mt-1">Years in AI/ML</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">100%</div>
                    <div class="text-gray-400 text-xs sm:text-sm mt-1">Client Satisfaction</div>
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
      <div class="w-screen h-screen flex flex-col justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
        <div class="max-w-7xl mx-auto w-full">
          <h2 class="animate-element text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 text-center">
            Featured Work
          </h2>
          
          <!-- Scrollable Projects Container -->
          <div class="animate-element overflow-y-auto max-h-[60vh] pr-2 portfolio-scroll">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pb-4">
              <!-- Project 1: Canvas-CLI -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">Canvas-CLI</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">CLI for local AI model interaction</p>
                </div>
              </div>
              
              <!-- Project 2: NORM -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">NORM</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">AI Hardware GPU optimization</p>
                </div>
              </div>
              
              <!-- Project 3: Twingate Zero-Trust -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">SecureNet</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Zero-trust network architecture</p>
                </div>
              </div>
              
              <!-- Project 4: DataStream Analytics -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">DataStream</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Real-time analytics pipeline</p>
                </div>
              </div>
              
              <!-- Project 5: CloudMigrate Pro -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">CloudMigrate</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">AWS migration automation</p>
                </div>
              </div>
              
              <!-- Project 6: AI Vision -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">AI Vision</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Computer vision ML platform</p>
                </div>
              </div>
              
              <!-- Project 7: CryptoVault -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-yellow-600 to-amber-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">CryptoVault</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">DeFi wallet infrastructure</p>
                </div>
              </div>
              
              <!-- Project 8: DevOps Central -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">DevOps Central</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">CI/CD pipeline automation</p>
                </div>
              </div>
              
              <!-- Project 9: API Gateway -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">API Gateway</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Microservices orchestration</p>
                </div>
              </div>
              
              <!-- Project 10: Kubernetes Manager -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">K8s Manager</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Kubernetes cluster management</p>
                </div>
              </div>
              
              <!-- Project 11: NeuralNet Studio -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">NeuralNet Studio</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Deep learning framework</p>
                </div>
              </div>
              
              <!-- Project 12: BlockChain Explorer -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-lime-600 to-green-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">Chain Explorer</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Blockchain analytics tool</p>
                </div>
              </div>
              
              <!-- Project 13: Terraform Cloud -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-sky-600 to-blue-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">TerraCloud</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Infrastructure as Code platform</p>
                </div>
              </div>
              
              <!-- Project 14: Monitoring Suite -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">MonitorPro</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Observability & monitoring</p>
                </div>
              </div>
              
              <!-- Project 15: Serverless Framework -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-pink-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">Serverless Hub</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Lambda function orchestration</p>
                </div>
              </div>
              
              <!-- Project 16: GraphQL Engine -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">GraphQL Engine</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">API query optimization</p>
                </div>
              </div>
              
              <!-- Project 17: Edge Computing -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-slate-600 to-gray-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">EdgeCompute</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">CDN & edge functions</p>
                </div>
              </div>
              
              <!-- Project 18: Database Sharding -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">ShardMaster</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Database scaling solution</p>
                </div>
              </div>
              
              <!-- Project 19: Load Balancer -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">LoadBalance Pro</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Traffic distribution system</p>
                </div>
              </div>
              
              <!-- Project 20: Security Scanner -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">SecScan</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Vulnerability assessment tool</p>
                </div>
              </div>
              
              <!-- Project 21: WebRTC Platform -->
              <div class="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative p-4 sm:p-6 h-32 sm:h-40 flex flex-col justify-end bg-gray-900/50 backdrop-blur group-hover:bg-gray-900/30 transition-all">
                  <h3 class="text-lg sm:text-xl font-bold text-white mb-1">StreamConnect</h3>
                  <p class="text-gray-300 text-xs sm:text-sm line-clamp-2">Video streaming platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Services -->
    <section class="section-panel" data-section="services">
      <div class="w-screen h-screen flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden">
        <div class="max-w-6xl mx-auto w-full h-full flex flex-col">
          <h2 class="animate-element text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center flex-shrink-0">
            Services
          </h2>
          <div class="animate-element overflow-y-auto flex-1 pr-2 services-scroll">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pb-8">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-colors">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 sm:mb-4">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Architecture Consulting</h3>
              <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">Design scalable, resilient systems that grow with your business</p>
              <ul class="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>System Design & Review</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Technology Stack Selection</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-purple-500 transition-colors">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3 sm:mb-4">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Digital Transformation</h3>
              <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">Modernize legacy systems and embrace cloud-native architectures</p>
              <ul class="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cloud Migration Strategy</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Microservices Architecture</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>DevOps Implementation</span>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-green-500 transition-colors">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-3 sm:mb-4">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Web Development</h3>
              <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">Modern, responsive web applications that deliver exceptional user experiences</p>
              <ul class="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>React/Vue/Angular Development</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Progressive Web Apps</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>API Integration & RESTful Services</span>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-orange-500 transition-colors">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3 sm:mb-4">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Software Development</h3>
              <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">Custom software solutions tailored to your business needs</p>
              <ul class="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Enterprise Applications</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Backend Development & APIs</span>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Database Design & Optimization</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Blog -->
    <section class="section-panel" data-section="blog">
      <div class="w-screen h-screen flex flex-col justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
        <div class="max-w-6xl mx-auto w-full">
          <h2 class="animate-element text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center">
            Latest Insights
          </h2>
          
          <!-- Visit Blog Call-out -->
          <div class="animate-element mb-6 sm:mb-8 text-center">
            <a href="/blog" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Visit My Blog</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <p class="text-gray-400 text-sm mt-3">Explore more articles, tutorials, and insights on systems architecture and AI</p>
          </div>
          
          <div class="animate-element grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <article class="bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors group">
              <div class="p-4 sm:p-6 md:p-8">
                <div class="text-blue-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">ARCHITECTURE</div>
                <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  Building Resilient Microservices at Scale
                </h3>
                <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  Learn the patterns and practices for building microservices that can handle billions of requests
                </p>
                <div class="flex items-center text-gray-300 text-xs sm:text-sm">
                  <span>5 min read</span>
                  <span class="mx-1 sm:mx-2">•</span>
                  <span>March 15, 2024</span>
                </div>
              </div>
            </article>
            <article class="bg-gray-800/50 backdrop-blur-xl rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors group">
              <div class="p-4 sm:p-6 md:p-8">
                <div class="text-purple-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">AI & ML</div>
                <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                  Integrating AI into Enterprise Systems
                </h3>
                <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  A practical guide to adding intelligence to your existing infrastructure
                </p>
                <div class="flex items-center text-gray-300 text-xs sm:text-sm">
                  <span>8 min read</span>
                  <span class="mx-1 sm:mx-2">•</span>
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
      <div class="w-screen h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div class="max-w-4xl mx-auto w-full text-center">
          <h2 class="animate-element text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Let's Build Something
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Extraordinary
            </span>
          </h2>
          <p class="animate-element text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12">
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

/* Custom scrollbar for Services section */
.services-scroll::-webkit-scrollbar {
  width: 8px;
}

.services-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.services-scroll::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 4px;
}

.services-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.5);
}

/* Firefox scrollbar */
.services-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
}

/* Portfolio scrollbar styles */
.portfolio-scroll::-webkit-scrollbar {
  width: 8px;
}

.portfolio-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.portfolio-scroll::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 4px;
}

.portfolio-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.5);
}

.portfolio-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
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