/**
 * "Banco" em memória compartilhado entre os mocks.
 *
 * Nesta fase (V1), os dados de cada módulo são mockados dentro de
 * `data/*.mock.ts`. Este repositório central simula uma fonte de dados única
 * (single source of truth) que, no futuro, será substituída pelo PostgreSQL
 * real via a API.
 */
class InMemoryDb {
  private readonly store = new Map<string, unknown[]>()

  getCollection<T>(name: string): T[] {
    if (!this.store.has(name)) {
      this.store.set(name, [])
    }
    return this.store.get(name) as T[]
  }

  setCollection<T>(name: string, items: T[]): void {
    this.store.set(name, items)
  }
}

export const inMemoryDb = new InMemoryDb()
