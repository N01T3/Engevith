/**
 * Interceptors de token JWT e tratamento de erro.
 *
 * Hoje inertes: o front roda 100% contra os mocks. Quando o back-end existir,
 * estes interceptors serão acoplados ao Axios para injetar o Bearer token e
 * normalizar erros da API.
 */
export interface RequestInterceptor {
  onRequest(config: unknown): unknown
}

export interface ResponseInterceptor {
  onResponse(response: unknown): unknown
  onError(error: unknown): Promise<never>
}

export function applyAuthHeader(config: Record<string, unknown>, token: string): void {
  config.headers = {
    ...(config.headers as Record<string, unknown>),
    Authorization: `Bearer ${token}`,
  }
}
