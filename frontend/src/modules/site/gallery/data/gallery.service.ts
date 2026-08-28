import { defaultMockAdapter } from '@core/mocks/mock-adapter'

import type { MediaItem } from '../types/media.types'
import { GALLERY_MOCK } from './gallery.mock'

/**
 * Porta de entrada de dados da galeria.
 *
 * Nesta fase, lê do mock. No futuro, chamará `GET /api/v1/gallery`.
 */
export const galleryService = {
  async findAll(): Promise<MediaItem[]> {
    return defaultMockAdapter.resolve([...GALLERY_MOCK])
  },
}
