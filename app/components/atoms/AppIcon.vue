<script setup lang="ts">
interface Props {
  name: string
  filled?: boolean
  size?: string
}

withDefaults(defineProps<Props>(), {
  filled: false,
  size: '',
})
</script>

<template>
  <span
    :class="[filled ? 'material-symbols-filled' : 'material-symbols-outlined', size]"
  >{{ name }}</span>
</template>
