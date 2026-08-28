<script setup lang="ts">
import { useServiceCatalogStore } from '@modules/site/services-catalog'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = useServiceCatalogStore()
const { categories, loading } = storeToRefs(store)

onMounted(() => {
  void store.fetchCategories()
})
</script>

<template>
  <v-container class="py-14">
    <v-progress-linear v-if="loading" indeterminate color="primary" class="mb-8" />

    <template v-else>
      <v-row dense>
        <v-col v-for="(category, index) in categories" :key="category.id" cols="12" sm="6" lg="4">
          <v-card
            v-reveal="(index % 3) * 100"
            class="h-100 pa-5 card-hover"
            variant="elevated"
            color="surface"
            rounded="xl"
            :to="`/servicos/${category.slug}`"
          >
            <div class="d-flex align-center justify-space-between mb-3">
              <v-avatar color="primary-container" size="56">
                <v-icon color="on-primary-container" size="28">{{ category.icon }}</v-icon>
              </v-avatar>
              <span class="text-h6 font-weight-bold text-tertiary">{{ category.number }}</span>
            </div>
            <h3 class="text-h6 font-weight-bold on-surface mb-2">{{ category.name }}</h3>
            <p class="text-body-2 on-surface mb-0">{{ category.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>
