import PublicLayout from '@shared/layouts/PublicLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

import { adminRoutes } from './admin.routes'
import { requireAuthGuard } from './guards/require-auth.guard'
import { siteRoutes } from './site.routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: PublicLayout,
      children: [...siteRoutes, ...adminRoutes],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@shared/layouts/NotFound.vue'),
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

router.beforeEach(requireAuthGuard)

export default router
