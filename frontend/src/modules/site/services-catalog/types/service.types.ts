export interface Service {
  id: string
  slug: string
  name: string
  description: string
  icon: string
}

export interface ServiceCategory {
  id: string
  number: string
  name: string
  slug: string
  icon: string
  description: string
  services: Service[]
}
