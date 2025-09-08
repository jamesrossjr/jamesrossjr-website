<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div class="card-body">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  rounded: 'md',
  hover: false
})

const cardClasses = computed(() => {
  const base = 'transition-all duration-300'
  
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border-2 border-gray-300',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20'
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const roundings = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }
  
  const hoverEffect = props.hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
  
  return `${base} ${variants[props.variant]} ${paddings[props.padding]} ${roundings[props.rounded]} ${hoverEffect}`
})
</script>

<style scoped>
.card-header {
  @apply border-b border-gray-200 pb-4 mb-4;
}

.card-footer {
  @apply border-t border-gray-200 pt-4 mt-4;
}
</style>