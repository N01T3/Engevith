export function formatDate(isoDate: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(isoDate)
  return new Intl.DateTimeFormat(
    'pt-BR',
    options ?? { day: '2-digit', month: 'long', year: 'numeric' },
  ).format(date)
}

export function formatShortDate(isoDate: string): string {
  return formatDate(isoDate, { day: '2-digit', month: '2-digit', year: 'numeric' })
}
