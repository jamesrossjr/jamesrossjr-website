<template>
  <BaseCard variant="elevated" :hover="true" class="h-full">
    <div class="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span class="text-sm font-medium text-gray-600">{{ caseStudy.category }}</span>
        </div>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">
        {{ caseStudy.title }}
      </h3>
      <p class="text-sm text-blue-600 font-medium mb-3">
        {{ caseStudy.subtitle }}
      </p>
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ caseStudy.description }}
      </p>
      
      <!-- Metrics -->
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div v-for="metric in caseStudy.metrics" :key="metric.label" class="text-center">
          <div class="text-2xl font-bold text-blue-600">{{ metric.value }}</div>
          <div class="text-xs text-gray-500">{{ metric.label }}</div>
        </div>
      </div>
      
      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in caseStudy.technologies"
          :key="tech"
          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- CTA -->
      <NuxtLink
        :to="`/portfolio/${caseStudy.id}`"
        class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
      >
        View Case Study
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
interface CaseStudy {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  metrics: Array<{ label: string; value: string }>
  technologies: string[]
  image?: string
}

defineProps<{
  caseStudy: CaseStudy
}>()
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>