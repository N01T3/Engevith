export type LeadSource = 'SITE' | 'INDICACAO' | 'GOOGLE' | 'INSTAGRAM' | 'OUTRO'

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'PROPOSAL' | 'WON' | 'LOST'

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  company: string
  message: string
  source: LeadSource
  status: LeadStatus
  createdAt: string
}

export interface LeadInput {
  name: string
  email: string
  phone: string
  company: string
  message: string
}
