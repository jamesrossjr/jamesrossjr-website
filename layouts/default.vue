<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />
    
    <main class="flex-grow pt-16">
      <slot />
    </main>
    
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// The layout automatically provides structure for all pages
</script>