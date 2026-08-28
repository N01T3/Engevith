<script setup lang="ts">
defineProps<{
  color: string
  label: string
}>()
</script>

<template>
  <v-chip size="small" :color="color" label>
    {{ label }}
  </v-chip>
</template>
