import type { ObjectDirective } from 'vue'

interface RevealElement extends HTMLElement {
  __revealDelay?: number
}

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') {
    return null
  }
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
  }
  return observer
}

/**
 * Diretiva de scroll reveal: `v-reveal` (opcional: `v-reveal="120"` para delay em ms).
 */
export const vReveal: ObjectDirective<RevealElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value}ms`
    }
    const obs = getObserver()
    if (obs) {
      obs.observe(el)
    } else {
      el.classList.add('reveal-visible')
    }
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
