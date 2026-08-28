<script setup lang="ts">
import type { ServiceCategory } from '../types/service.types'

defineProps<{
  category: ServiceCategory
}>()
</script>

<template>
  <v-card
    class="h-100 d-flex flex-column card-hover"
    variant="elevated"
    color="surface"
    rounded="xl"
    :to="`/servicos/${category.slug}`"
  >
    <v-card-item>
      <template #prepend>
        <v-avatar color="primary-container" size="56" class="mr-3">
          <v-icon color="on-primary-container" size="28">{{ category.icon }}</v-icon>
        </v-avatar>
      </template>
      <v-card-title class="text-wrap on-surface">
        {{ category.name }}
      </v-card-title>
      <v-card-subtitle class="on-surface-variant">
        {{ category.number }} · {{ category.services.length }} serviços
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="text-body-2 on-surface-variant flex-grow-1">
      {{ category.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn variant="text" color="secondary" append-icon="mdi-arrow-right">Ver serviços</v-btn>
    </v-card-actions>
  </v-card>
</template>
