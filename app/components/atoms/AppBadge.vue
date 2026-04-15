<script setup lang="ts">
interface Props {
  variant?: 'gold' | 'primary' | 'subtle'
  size?: 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'gold',
  size: 'sm',
})

const classes = computed(() => {
  const base = 'inline-flex items-center gap-2 font-label font-bold uppercase rounded-full'

  const variants: Record<string, string> = {
    gold: 'bg-secondary-container text-on-secondary-container',
    primary: 'bg-primary text-white',
    subtle: 'bg-secondary-container/20 border border-secondary-container/30 text-secondary-container',
  }

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1 text-[10px] tracking-widest',
    md: 'px-4 py-2 text-xs tracking-widest',
  }

  return [base, variants[props.variant], sizes[props.size]].join(' ')
})
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
