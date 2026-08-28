export interface ThemePalette {
  dark: boolean
  colors: Record<string, string>
}

export const engevithLight: ThemePalette = {
  dark: false,
  colors: {
    background: '#F4F6F8',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-variant': '#E0E3E9',
    'surface-container-low': '#F3F4F7',
    'surface-container': '#EEF0F4',
    'surface-container-high': '#E9EBEF',
    'on-surface': '#1A1C20',
    'on-surface-variant': '#44474E',
    'on-background': '#1A1C20',
    outline: '#74777F',
    'outline-variant': '#C4C6CF',

    primary: '#005B9F',
    'on-primary': '#FFFFFF',
    'primary-container': '#D6E3FF',
    'on-primary-container': '#001B3F',

    secondary: '#535F70',
    'on-secondary': '#FFFFFF',
    'secondary-container': '#D7E3F8',
    'on-secondary-container': '#101C2B',

    tertiary: '#006B5D',
    'on-tertiary': '#FFFFFF',
    'tertiary-container': '#BFF5EC',
    'on-tertiary-container': '#00201C',

    error: '#BA1A1A',
    'on-error': '#FFFFFF',
    'error-container': '#FFDAD6',
    'on-error-container': '#410002',

    info: '#005B9F',
    'on-info': '#FFFFFF',
    success: '#2E7D32',
    'on-success': '#FFFFFF',
    warning: '#B26A00',
    'on-warning': '#FFFFFF',

    'engevith-navy': '#0B2437',
    'on-engevith-navy': '#FFFFFF',
  },
}
