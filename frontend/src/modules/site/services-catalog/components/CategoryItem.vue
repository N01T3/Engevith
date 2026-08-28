<script setup lang="ts">
import type { Service } from '../types/service.types'

defineProps<{
  service: Service
}>()
</script>

<template>
  <v-card
    class="h-100 d-flex flex-column card-hover"
    variant="elevated"
    color="surface"
    rounded="lg"
  >
    <v-card-item>
      <template #prepend>
        <v-avatar color="tertiary-container" size="44" class="mr-2">
          <v-icon color="on-tertiary-container" size="24">{{ service.icon }}</v-icon>
        </v-avatar>
      </template>
      <v-card-title class="text-wrap on-surface text-subtitle-1">{{ service.name }}</v-card-title>
    </v-card-item>

    <v-card-text class="text-body-2 on-surface-variant flex-grow-1">
      {{ service.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn variant="text" color="secondary" to="/contato" append-icon="mdi-arrow-right">
        Solicitar orçamento
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
