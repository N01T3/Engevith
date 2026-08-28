import type { NavigationGuard } from 'vue-router'

/**
 * Guard de autenticação para rotas com `meta: { requiresAuth: true }`.
 *
 * Hoje a autenticação é simulada no front (ver `useAuth`). Quando o back-end
 * existir, este guard passará a validar um JWT real.
 */
export const requireAuthGuard: NavigationGuard = (to, _from, next) => {
  const requiresAuth = to.meta.requiresAuth === true

  if (requiresAuth) {
    // Placeholder: a lógica real de JWT entra quando o back-end existir.
    next({ name: 'home' })
    return
  }

  next()
}
