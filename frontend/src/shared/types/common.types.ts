export interface Pagination<T> {
  items: T[]
  total: number
  page: number
  perPage: number
}

export interface ApiResult<T> {
  data: T
}

export type Nullable<T> = T | null
