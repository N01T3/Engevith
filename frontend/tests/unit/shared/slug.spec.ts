import { describe, expect, it } from 'vitest'

import { slugify } from '@/shared/utils/slug'

describe('slugify', () => {
  it('converte texto em slug kebab-case', () => {
    expect(slugify('Projetos de Engenharia')).toBe('projetos-de-engenharia')
  })

  it('remove acentos', () => {
    expect(slugify('Georreferenciamento de Imóveis Rurais')).toBe(
      'georreferenciamento-de-imoveis-rurais',
    )
  })
})
