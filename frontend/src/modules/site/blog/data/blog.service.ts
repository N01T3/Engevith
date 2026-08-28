import { defaultMockAdapter } from '@core/mocks/mock-adapter'

import type { FaqItem, Post } from '../types/post.types'
import { FAQ_MOCK, POSTS_MOCK } from './blog.mock'

/**
 * Porta de entrada de dados do blog (posts + FAQ).
 *
 * Nesta fase, lê do mock. No futuro, chamará `GET /api/v1/posts`.
 */
export const blogService = {
  async findAll(): Promise<Post[]> {
    return defaultMockAdapter.resolve([...POSTS_MOCK])
  },

  async findBySlug(slug: string): Promise<Post | null> {
    const post = POSTS_MOCK.find((item) => item.slug === slug) ?? null
    return defaultMockAdapter.resolve(post)
  },

  async findFaqs(): Promise<FaqItem[]> {
    return defaultMockAdapter.resolve([...FAQ_MOCK])
  },
}
