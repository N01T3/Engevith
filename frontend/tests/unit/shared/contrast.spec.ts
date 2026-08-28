import { describe, expect, it } from 'vitest'

import { engevithLight } from '@/app/theme'

function relativeLuminance(hex: string): number {
  const value = hex.replace('#', '')
  const r = parseInt(value.slice(0, 2), 16) / 255
  const g = parseInt(value.slice(2, 4), 16) / 255
  const b = parseInt(value.slice(4, 6), 16) / 255
  const linearize = (c: number): number =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)
}

function contrastRatio(foreground: string, background: string): number {
  const l1 = relativeLuminance(foreground)
  const l2 = relativeLuminance(background)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

const { colors } = engevithLight

describe('contraste de cores (WCAG AA)', () => {
  const TEXT_PAIRS: Array<[string, string, string]> = [
    ['primary / on-primary', colors.primary, colors['on-primary']],
    ['secondary / on-secondary', colors.secondary, colors['on-secondary']],
    ['tertiary / on-tertiary', colors.tertiary, colors['on-tertiary']],
    ['on-surface / surface', colors['on-surface'], colors.surface],
    ['on-surface-variant / surface', colors['on-surface-variant'], colors.surface],
    [
      'on-surface-variant / surface-container',
      colors['on-surface-variant'],
      colors['surface-container'],
    ],
    [
      'on-primary-container / primary-container',
      colors['on-primary-container'],
      colors['primary-container'],
    ],
    [
      'on-secondary-container / secondary-container',
      colors['on-secondary-container'],
      colors['secondary-container'],
    ],
    [
      'on-tertiary-container / tertiary-container',
      colors['on-tertiary-container'],
      colors['tertiary-container'],
    ],
    ['texto em fundo escuro / navy', '#C9D4E0', colors['engevith-navy']],
  ]

  it.each(TEXT_PAIRS)('%s >= 4.5:1', (_label, foreground, background) => {
    expect(contrastRatio(foreground, background)).toBeGreaterThanOrEqual(4.5)
  })

  const UI_PAIRS: Array<[string, string, string]> = [
    ['tertiary / surface (ícones)', colors.tertiary, colors.surface],
    ['primary / surface (ícones)', colors.primary, colors.surface],
  ]

  it.each(UI_PAIRS)('%s >= 3:1', (_label, foreground, background) => {
    expect(contrastRatio(foreground, background)).toBeGreaterThanOrEqual(3)
  })
})
