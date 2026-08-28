<script setup lang="ts">
import SectionTitle from '@shared/components/SectionTitle.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import CategoryCard from '../components/CategoryCard.vue'
import { useServiceCatalogStore } from '../stores/service-catalog.store'

const store = useServiceCatalogStore()
const { categories, loading } = storeToRefs(store)

onMounted(() => {
  void store.fetchCategories()
})
</script>

<template>
  <v-container class="py-12">
    <SectionTitle
      title="Nossos Serviços"
      subtitle="Soluções completas de engenharia, topografia, regularização e meio ambiente."
    />

    <v-progress-linear v-if="loading" indeterminate color="primary" class="mb-8" />

    <template v-else>
      <v-row dense>
        <v-col
          v-for="(category, index) in categories"
          :key="category.id"
          v-reveal="(index % 3) * 100"
          cols="12"
          sm="6"
          lg="4"
        >
          <CategoryCard :category="category" />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>
