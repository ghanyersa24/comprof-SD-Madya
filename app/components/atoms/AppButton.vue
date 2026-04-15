<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
})

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center gap-3 font-headline font-bold transition-all'

  const variants: Record<string, string> = {
    primary: 'bg-secondary-container text-primary hover:shadow-[0_0_20px_rgba(254,214,91,0.4)] rounded-xl',
    secondary: 'bg-primary text-white hover:translate-y-[-2px] hover:shadow-xl rounded-xl shadow-lg',
    outline: 'border border-white/30 text-white hover:bg-white/10 rounded-xl',
    ghost: 'bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-xl',
  }

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  }

  return [base, variants[props.variant], sizes[props.size]].join(' ')
})

const componentTag = computed(() => props.href ? resolveComponent('NuxtLink') : props.tag)
</script>

<template>
  <component
    :is="componentTag"
    :[props.href?'to':null]="href"
    :class="classes"
  >
    <slot />
  </component>
</template>
