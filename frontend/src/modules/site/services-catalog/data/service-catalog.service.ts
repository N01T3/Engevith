import { defaultMockAdapter } from '@core/mocks/mock-adapter'

import type { ServiceCategory } from '../types/service.types'
import { SERVICE_CATEGORIES_MOCK } from './service-catalog.mock'

/**
 * Porta de entrada de dados do catálogo de serviços.
 *
 * Nesta fase, lê do mock. No futuro, chamará `GET /api/v1/services`.
 */
export const serviceCatalogService = {
  async findAllCategories(): Promise<ServiceCategory[]> {
    return defaultMockAdapter.resolve(SERVICE_CATEGORIES_MOCK.map((category) => ({ ...category })))
  },

  async findCategoryBySlug(slug: string): Promise<ServiceCategory | null> {
    const category = SERVICE_CATEGORIES_MOCK.find((item) => item.slug === slug) ?? null
    return defaultMockAdapter.resolve(category ? { ...category } : null)
  },
}
