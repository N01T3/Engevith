import { defineStore } from 'pinia'
import { ref } from 'vue'

import { blogService } from '../data/blog.service'
import type { FaqItem, Post } from '../types/post.types'

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<Post[]>([])
  const faqs = ref<FaqItem[]>([])
  const loading = ref(false)

  async function fetchPosts(): Promise<void> {
    loading.value = true
    try {
      const [postList, faqList] = await Promise.all([blogService.findAll(), blogService.findFaqs()])
      posts.value = postList
      faqs.value = faqList
    } finally {
      loading.value = false
    }
  }

  async function findPostBySlug(slug: string): Promise<Post | null> {
    return blogService.findBySlug(slug)
  }

  return { posts, faqs, loading, fetchPosts, findPostBySlug }
})
