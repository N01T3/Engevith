<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CategoryItem from '../components/CategoryItem.vue'
import { serviceCatalogService } from '../data/service-catalog.service'
import type { ServiceCategory } from '../types/service.types'

const route = useRoute()
const router = useRouter()

const category = ref<ServiceCategory | null>(null)
const loading = ref(true)

onMounted(async () => {
  const slug = String(route.params.slug)
  category.value = await serviceCatalogService.findCategoryBySlug(slug)
  loading.value = false
})
</script>

<template>
  <v-container class="py-12">
    <v-btn
      variant="text"
      prepend-icon="mdi-arrow-left"
      color="secondary"
      @click="router.push('/servicos')"
    >
      Todos os serviços
    </v-btn>

    <v-progress-linear v-if="loading" indeterminate color="primary" class="mt-6" />

    <template v-else-if="category">
      <header v-reveal class="mt-6 mb-8">
        <div class="d-flex align-center gap-4 mb-4">
          <v-avatar color="primary-container" size="64">
            <v-icon color="on-primary-container" size="32">{{ category.icon }}</v-icon>
          </v-avatar>
          <div>
            <p class="text-caption font-weight-bold text-tertiary mb-0">
              {{ category.number }} · SERVIÇOS
            </p>
            <h1 class="text-h4 font-weight-bold on-surface">{{ category.name }}</h1>
          </div>
        </div>
        <div class="engevith-accent-rule" />
        <p class="text-subtitle-1 on-surface-variant mt-4">{{ category.description }}</p>
      </header>

      <v-row dense>
        <v-col
          v-for="(service, index) in category.services"
          :key="service.id"
          v-reveal="(index % 3) * 100"
          cols="12"
          sm="6"
          lg="4"
        >
          <CategoryItem :service="service" />
        </v-col>
      </v-row>

      <div v-reveal class="text-center mt-12">
        <h2 class="text-h5 font-weight-bold on-surface mb-2">Não encontrou o que procura?</h2>
        <p class="text-subtitle-1 on-surface-variant mb-6">
          Fale com a nossa equipe e receba um orçamento sob medida.
        </p>
        <v-btn color="primary" size="large" to="/contato" prepend-icon="mdi-file-document-edit">
          Solicitar orçamento
        </v-btn>
      </div>
    </template>

    <template v-else>
      <v-alert type="warning" variant="tonal" class="mt-6">
        Categoria de serviço não encontrada.
      </v-alert>
    </template>
  </v-container>
</template>
