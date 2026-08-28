import type { RouteRecordRaw } from 'vue-router'

/**
 * Rotas administrativas (ERP).
 *
 * Fase V1: o domínio Admin/ERP será implementado futuramente. Estas rotas já
 * ficam mapeadas com `meta: { requiresAuth: true }` para que o guard e o
 * `AdminLayout` estejam prontos quando os módulos forem adicionados.
 */
export const adminRoutes: RouteRecordRaw[] = []
