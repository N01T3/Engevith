<script setup lang="ts">
import SectionTitle from '@shared/components/SectionTitle.vue'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

import Lightbox from '../components/Lightbox.vue'
import { useGalleryStore } from '../stores/gallery.store'
import type { MediaItem } from '../types/media.types'

const store = useGalleryStore()
const { items, loading } = storeToRefs(store)

const selected = ref<MediaItem | null>(null)

function openLightbox(item: MediaItem): void {
  selected.value = item
}

onMounted(() => {
  void store.fetchItems()
})
</script>

<template>
  <v-container class="py-12">
    <SectionTitle title="Galeria" subtitle="Registros dos nossos projetos e serviços." />

    <v-progress-linear v-if="loading" indeterminate color="primary" class="mb-8" />

    <template v-else>
      <v-row dense>
        <v-col
          v-for="(item, index) in items"
          :key="item.id"
          v-reveal="(index % 3) * 100"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="card-hover" variant="elevated" color="surface" @click="openLightbox(item)">
            <v-img :src="item.src" :alt="item.title" aspect-ratio="4 / 3" cover />
            <v-card-item>
              <v-card-title class="text-subtitle-1 on-surface">
                <v-icon size="small" class="mr-1" color="tertiary">
                  {{ item.type === 'VIDEO' ? 'mdi-video' : 'mdi-image' }}
                </v-icon>
                {{ item.title }}
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <Lightbox :item="selected" @close="selected = null" />
  </v-container>
</template>
