<script setup lang="ts">
import { formatDate } from '@shared/utils/date'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { blogService } from '../data/blog.service'
import type { Post } from '../types/post.types'

const route = useRoute()
const router = useRouter()

const post = ref<Post | null>(null)
const loading = ref(true)

onMounted(async () => {
  const slug = String(route.params.slug)
  post.value = await blogService.findBySlug(slug)
  loading.value = false
})
</script>

<template>
  <v-container class="py-12">
    <v-btn variant="text" prepend-icon="mdi-arrow-left" color="secondary" @click="router.back()">
      Voltar
    </v-btn>

    <v-progress-linear v-if="loading" indeterminate color="primary" class="mt-6" />

    <template v-else-if="post">
      <article class="mt-4">
        <h1 class="text-h4 font-weight-bold on-surface">{{ post.title }}</h1>
        <p class="text-subtitle-2 on-surface-variant mt-2">
          {{ post.author }} · {{ formatDate(post.publishedAt) }}
        </p>
        <v-divider class="my-4" color="outline-variant" />
        <div class="text-body-1 on-surface text-pre-line">{{ post.content }}</div>
      </article>
    </template>

    <template v-else>
      <v-alert type="warning" variant="tonal" class="mt-6">Publicação não encontrada.</v-alert>
    </template>
  </v-container>
</template>
