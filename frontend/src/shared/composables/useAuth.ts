import { computed, ref, type ComputedRef } from 'vue'

export type UserRole = 'ADMIN' | 'ENGINEER' | 'CLIENT'

export interface AuthUser {
  id: string
  name: string
  email: string
  role: UserRole
}

export interface UseAuth {
  isAuthenticated: ComputedRef<boolean>
  user: ComputedRef<AuthUser | null>
  login: (userData: AuthUser) => void
  logout: () => void
  hasRole: (role: UserRole) => boolean
}

/**
 * Autenticação simulada (V1).
 *
 * Mantém o estado local/mock do usuário e expõe a mesma API que consumirá um
 * JWT real quando o back-end existir. Os guards de rota já usam esta camada.
 */
const currentUser = ref<AuthUser | null>(null)

export function useAuth(): UseAuth {
  const isAuthenticated = computed(() => currentUser.value !== null)
  const user = computed(() => currentUser.value)

  function login(userData: AuthUser): void {
    currentUser.value = userData
  }

  function logout(): void {
    currentUser.value = null
  }

  function hasRole(role: UserRole): boolean {
    return currentUser.value?.role === role
  }

  return { isAuthenticated, user, login, logout, hasRole }
}
