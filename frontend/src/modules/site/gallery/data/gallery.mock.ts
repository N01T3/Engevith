import type { MediaItem } from '../types/media.types'

function placeholderImage(title: string, color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="50%" fill="#ffffff" font-family="Arial" font-size="28" text-anchor="middle" dominant-baseline="middle">${title}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const GALLERY_MOCK: MediaItem[] = [
  {
    id: 'gal-1',
    title: 'Levantamento topográfico',
    type: 'IMAGE',
    src: placeholderImage('Topografia', '#1a4b6b'),
  },
  {
    id: 'gal-2',
    title: 'Levantamento com GPS GNSS',
    type: 'IMAGE',
    src: placeholderImage('GPS GNSS', '#0b2a3c'),
  },
  {
    id: 'gal-3',
    title: 'Projeto estrutural',
    type: 'IMAGE',
    src: placeholderImage('Projetos', '#e8a020'),
  },
  {
    id: 'gal-4',
    title: 'Obra em andamento',
    type: 'IMAGE',
    src: placeholderImage('Obras', '#2e7d32'),
  },
  {
    id: 'gal-5',
    title: 'Regularização fundiária',
    type: 'IMAGE',
    src: placeholderImage('Regularização', '#5e35b1'),
  },
  {
    id: 'gal-6',
    title: 'Soluções florestais',
    type: 'IMAGE',
    src: placeholderImage('Florestal', '#00695c'),
  },
]
