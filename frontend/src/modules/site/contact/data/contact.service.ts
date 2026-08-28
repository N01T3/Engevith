import { inMemoryDb } from '@core/mocks/in-memory-db'
import { defaultMockAdapter } from '@core/mocks/mock-adapter'

import type { Lead, LeadInput } from '../types/contact.types'

const LEADS_COLLECTION = 'leads'

/**
 * Porta de entrada de dados de contato (criação de Lead).
 *
 * Nesta fase, persiste no banco em memória. No futuro, chamará
 * `POST /api/v1/leads`.
 */
export const contactService = {
  async createLead(input: LeadInput): Promise<Lead> {
    const leads = inMemoryDb.getCollection<Lead>(LEADS_COLLECTION)
    const lead: Lead = {
      id: `lead-${Date.now()}`,
      name: input.name,
      email: input.email,
      phone: input.phone,
      company: input.company,
      message: input.message,
      source: 'SITE',
      status: 'NEW',
      createdAt: new Date().toISOString(),
    }
    leads.push(lead)
    inMemoryDb.setCollection(LEADS_COLLECTION, leads)
    return defaultMockAdapter.resolve(lead)
  },
}
