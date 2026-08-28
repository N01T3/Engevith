export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  cover: string
  author: string
  publishedAt: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}
