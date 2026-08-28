export type MediaType = 'IMAGE' | 'VIDEO'

export interface MediaItem {
  id: string
  title: string
  type: MediaType
  src: string
}
