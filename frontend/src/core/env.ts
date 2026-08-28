declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_NAME?: string
    readonly VITE_API_BASE_URL?: string
    readonly VITE_MOCK_DELAY_MS?: string
  }
}

export const APP_NAME: string = import.meta.env.VITE_APP_NAME ?? 'ENGEVITH'

export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? '/api/v1'

const DEFAULT_MOCK_DELAY_MS = 250

export const MOCK_DELAY_MS: number = Number(
  import.meta.env.VITE_MOCK_DELAY_MS ?? DEFAULT_MOCK_DELAY_MS,
)
