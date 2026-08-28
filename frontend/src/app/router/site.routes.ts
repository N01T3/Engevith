import { About } from '@modules/site/about'
import { Blog, BlogPost } from '@modules/site/blog'
import { Contact } from '@modules/site/contact'
import { Gallery } from '@modules/site/gallery'
import { Home } from '@modules/site/home'
import { CategoryDetail, ServicesList } from '@modules/site/services-catalog'
import type { RouteRecordRaw } from 'vue-router'

export const siteRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sobre',
    name: 'about',
    component: About,
  },
  {
    path: '/servicos',
    name: 'services',
    component: ServicesList,
  },
  {
    path: '/servicos/:slug',
    name: 'category-detail',
    component: CategoryDetail,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost,
  },
  {
    path: '/galeria',
    name: 'gallery',
    component: Gallery,
  },
  {
    path: '/contato',
    name: 'contact',
    component: Contact,
  },
]
