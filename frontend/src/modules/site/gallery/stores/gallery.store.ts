import { defineStore } from 'pinia'
import { ref } from 'vue'

import { galleryService } from '../data/gallery.service'
import type { MediaItem } from '../types/media.types'

export const useGalleryStore = defineStore('gallery', () => {
  const items = ref<MediaItem[]>([])
  const loading = ref(false)

  async function fetchItems(): Promise<void> {
    loading.value = true
    try {
      items.value = await galleryService.findAll()
    } finally {
      loading.value = false
    }
  }

  return { items, loading, fetchItems }
})
