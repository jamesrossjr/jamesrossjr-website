<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">JR</span>
          </div>
          <span class="font-semibold text-gray-900 hidden sm:block">James Ross Jr.</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="link in navigationLinks" 
            :key="link.path"
            :to="link.path"
            class="nav-link"
            :class="{ 'active': $route.path === link.path }"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <BaseButton
            variant="primary"
            size="sm"
            @click="navigateTo('/contact')"
          >
            Let's Connect
          </BaseButton>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              class="mobile-nav-link"
              :class="{ 'active': $route.path === link.path }"
              @click="mobileMenuOpen = false"
            >
              {{ link.name }}
            </NuxtLink>
            <BaseButton
              variant="primary"
              size="md"
              class="w-full"
              @click="() => { navigateTo('/contact'); mobileMenuOpen = false; }"
            >
              Let's Connect
            </BaseButton>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-blue-600 font-medium transition-colors relative;
}

.nav-link.active {
  @apply text-blue-600;
}

.nav-link.active::after {
  content: '';
  @apply absolute bottom-[-21px] left-0 right-0 h-[2px] bg-blue-600;
}

.mobile-nav-link {
  @apply text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-1;
}

.mobile-nav-link.active {
  @apply text-blue-600 bg-blue-50 rounded-lg;
}
</style>