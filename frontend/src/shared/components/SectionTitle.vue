<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div v-reveal class="text-center mb-10">
    <h2 class="text-h4 font-weight-bold on-surface">{{ title }}</h2>
    <p v-if="subtitle" class="text-subtitle-1 on-surface-variant mt-2">{{ subtitle }}</p>
    <div class="engevith-accent-rule mx-auto mt-4" />
  </div>
</template>
