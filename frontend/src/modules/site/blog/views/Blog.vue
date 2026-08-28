<script setup lang="ts">
import SectionTitle from '@shared/components/SectionTitle.vue'
import { formatDate } from '@shared/utils/date'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import FaqPanel from '../components/FaqPanel.vue'
import { useBlogStore } from '../stores/blog.store'

const store = useBlogStore()
const { posts, faqs, loading } = storeToRefs(store)

onMounted(() => {
  void store.fetchPosts()
})
</script>

<template>
  <v-container class="py-12">
    <SectionTitle title="Blog & Notícias" subtitle="Conteúdo técnico e novidades da ENGEVITH." />

    <v-progress-linear v-if="loading" indeterminate color="primary" class="mb-8" />

    <template v-else>
      <v-row dense>
        <v-col
          v-for="(post, index) in posts"
          :key="post.id"
          v-reveal="(index % 3) * 100"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card
            class="h-100 d-flex flex-column card-hover"
            variant="elevated"
            color="surface"
            :to="`/blog/${post.slug}`"
          >
            <v-card-item>
              <v-card-title class="text-wrap on-surface">{{ post.title }}</v-card-title>
              <v-card-subtitle class="on-surface-variant">
                {{ post.author }} · {{ formatDate(post.publishedAt) }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text class="text-body-2 on-surface-variant flex-grow-1">
              {{ post.excerpt }}
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="secondary" append-icon="mdi-arrow-right">Ler mais</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div class="mt-10">
        <FaqPanel :faqs="faqs" />
      </div>
    </template>
  </v-container>
</template>
