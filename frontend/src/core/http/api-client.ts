import { API_BASE_URL } from '../env'

/**
 * Instância Axios pré-configurada.
 *
 * Nesta fase (V1 100% front-end) ela ainda não é usada diretamente pelos
 * `data/*.service.ts` — eles leem dos mocks. Quando o back-end existir, basta
 * trocar a implementação do service para chamar este cliente.
 */
export interface HttpClient {
  get<T>(url: string): Promise<T>
  post<T>(url: string, body?: unknown): Promise<T>
  put<T>(url: string, body?: unknown): Promise<T>
  delete<T>(url: string): Promise<T>
}

export const API_BASE_URL_CONSTANT: string = API_BASE_URL
