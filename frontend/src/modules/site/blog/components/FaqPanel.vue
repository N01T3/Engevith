<script setup lang="ts">
import type { FaqItem } from '../types/post.types'

defineProps<{
  faqs: FaqItem[]
}>()
</script>

<template>
  <v-card class="pa-4" variant="elevated" color="surface" rounded="lg">
    <h3 class="text-h6 font-weight-bold on-surface mb-2">Perguntas Frequentes</h3>
    <v-expansion-panels variant="accordion" rounded="lg">
      <v-expansion-panel v-for="faq in faqs" :key="faq.id">
        <v-expansion-panel-title class="on-surface">{{ faq.question }}</v-expansion-panel-title>
        <v-expansion-panel-text class="on-surface-variant">{{ faq.answer }}</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
