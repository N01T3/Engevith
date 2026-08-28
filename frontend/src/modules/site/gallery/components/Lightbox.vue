<script setup lang="ts">
import type { MediaItem } from '../types/media.types'

defineProps<{
  item: MediaItem | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <v-dialog :model-value="item !== null" max-width="960" @update:model-value="emit('close')">
    <v-card v-if="item">
      <v-card-title class="d-flex justify-space-between align-center">
        <span>{{ item.title }}</span>
        <v-btn icon variant="text" @click="emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-img :src="item.src" :alt="item.title" max-height="540" contain />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
