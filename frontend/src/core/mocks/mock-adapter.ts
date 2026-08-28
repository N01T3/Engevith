import { MOCK_DELAY_MS } from '../env'

export interface MockAdapterOptions {
  latency?: number
  failRate?: number
}

/**
 * Simula latência e falha de rede para os `data/*.mock.ts`.
 *
 * Garante que a UI seja construída já assumindo chamadas assíncronas e
 * tratamento de erro, da mesma forma que as futuras chamadas HTTP reais.
 */
export class MockAdapter {
  private readonly latency: number
  private readonly failRate: number

  constructor(options: MockAdapterOptions = {}) {
    this.latency = options.latency ?? MOCK_DELAY_MS
    this.failRate = options.failRate ?? 0
  }

  async resolve<T>(data: T): Promise<T> {
    await this.wait()
    if (this.shouldFail()) {
      throw new Error('Falha simulada de rede no mock.')
    }
    return data
  }

  private wait(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this.latency))
  }

  private shouldFail(): boolean {
    return Math.random() < this.failRate
  }
}

export const defaultMockAdapter: MockAdapter = new MockAdapter()
