import HeroSection from '@modules/site/home/components/HeroSection.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

import vuetify from '@/app/plugins/vuetify'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div />' } },
    { path: '/contato', component: { template: '<div />' } },
    { path: '/servicos', component: { template: '<div />' } },
  ],
})

describe('HeroSection', () => {
  it('renderiza título e botões', () => {
    const wrapper = mount(HeroSection, {
      global: {
        plugins: [vuetify, router],
      },
    })

    expect(wrapper.text()).toContain('Engenharia que transforma precisão em resultado')
    expect(wrapper.text()).toContain('Solicitar orçamento')
    expect(wrapper.text()).toContain('Conheça nossos serviços')
  })
})
