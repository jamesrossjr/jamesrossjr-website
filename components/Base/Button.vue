<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon
      v-if="loading"
      name="heroicons:arrow-path"
      class="w-4 h-4 mr-2 animate-spin"
    />
    <Icon
      v-else-if="icon"
      :name="icon"
      :class="iconClasses"
    />
    <span v-if="$slots.default">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  tag?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  iconPosition: 'left',
  tag: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const disabledClasses = props.disabled || props.loading 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer'
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabledClasses}`
})

const iconClasses = computed(() => {
  const position = props.iconPosition === 'right' ? 'ml-2' : 'mr-2'
  const size = props.size === 'sm' ? 'w-4 h-4' : props.size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
  return `${size} ${position}`
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>