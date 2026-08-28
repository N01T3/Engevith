import { defineStore } from 'pinia'
import { ref } from 'vue'

import { serviceCatalogService } from '../data/service-catalog.service'
import type { ServiceCategory } from '../types/service.types'

export const useServiceCatalogStore = defineStore('service-catalog', () => {
  const categories = ref<ServiceCategory[]>([])
  const loading = ref(false)

  async function fetchCategories(): Promise<void> {
    loading.value = true
    try {
      categories.value = await serviceCatalogService.findAllCategories()
    } finally {
      loading.value = false
    }
  }

  async function findCategoryBySlug(slug: string): Promise<ServiceCategory | null> {
    return serviceCatalogService.findCategoryBySlug(slug)
  }

  return { categories, loading, fetchCategories, findCategoryBySlug }
})
