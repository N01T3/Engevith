<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import logoUrl from '@/assets/images/logo.png'

const NAV_ITEMS = [
  { title: 'Home', to: '/' },
  { title: 'Sobre', to: '/sobre' },
  { title: 'Serviços', to: '/servicos' },
  { title: 'Blog', to: '/blog' },
  { title: 'Galeria', to: '/galeria' },
  { title: 'Contato', to: '/contato' },
] as const

const route = useRoute()
const drawer = ref(false)

function isActive(to: string): boolean {
  if (to === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(to)
}
</script>

<template>
  <v-app>
    <v-app-bar color="surface" flat scroll-behavior="elevate" class="border-b px-2">
      <template #prepend>
        <router-link to="/" class="d-flex align-center">
          <v-img :src="logoUrl" alt="ENGEVITH" max-width="160" contain class="ml-2" />
        </router-link>
      </template>

      <div class="d-none d-md-flex flex-grow-1 justify-center align-center">
        <v-btn
          v-for="item in NAV_ITEMS"
          :key="item.to"
          :to="item.to"
          variant="text"
          :color="isActive(item.to) ? 'primary' : 'on-surface-variant'"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <template #append>
        <v-btn
          to="/contato"
          color="primary"
          class="d-none d-md-inline-flex"
          prepend-icon="mdi-file-document-edit"
        >
          Solicitar orçamento
        </v-btn>
        <v-app-bar-nav-icon class="d-md-none" color="on-surface" @click="drawer = !drawer" />
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary location="right" class="d-md-none">
      <v-list>
        <v-list-item
          v-for="item in NAV_ITEMS"
          :key="item.to"
          :to="item.to"
          :title="item.title"
          @click="drawer = false"
        />
        <v-list-item to="/contato" title="Solicitar orçamento" @click="drawer = false" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-footer color="engevith-navy" class="py-6">
      <v-container>
        <v-row align="center" class="gap-y-4">
          <v-col cols="12" md="5" class="d-flex align-center">
            <v-img :src="logoUrl" alt="ENGEVITH" max-width="130" contain class="mr-4" />
            <span class="text-body-2 text-on-dark">
              Engenharia que transforma precisão em resultado.
            </span>
          </v-col>
          <v-col cols="12" md="4">
            <div class="d-flex flex-wrap gap-x-6 gap-y-1">
              <router-link
                v-for="item in NAV_ITEMS"
                :key="item.to"
                :to="item.to"
                class="text-body-2 text-on-dark"
              >
                {{ item.title }}
              </router-link>
            </div>
          </v-col>
          <v-col cols="12" md="3" class="text-md-right">
            <p class="text-body-2 text-on-dark mb-1">
              <v-icon size="small" class="mr-1">mdi-email</v-icon> contato@engevith.com.br
            </p>
            <p class="text-body-2 text-on-dark mb-1">
              <v-icon size="small" class="mr-1">mdi-phone</v-icon>
              <a href="tel:+5514996088573" class="text-on-dark">(14) 99608-8573</a>
            </p>
            <p class="text-body-2 text-on-dark mb-0">
              <v-icon size="small" class="mr-1">mdi-map-marker</v-icon> R. Juvenal Coimbra, 465 –
              Cerqueira César/SP
            </p>
          </v-col>
        </v-row>
        <v-divider class="my-4" color="#ffffff" opacity="0.15" />
        <p class="text-caption text-center text-on-dark-muted mb-0">
          © {{ new Date().getFullYear() }} ENGEVITH · CNPJ 29.315.910/0001-45 · Todos os direitos
          reservados.
        </p>
      </v-container>
    </v-footer>
  </v-app>
</template>
