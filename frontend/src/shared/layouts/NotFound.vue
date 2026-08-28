<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center text-center">
    <v-icon size="96" color="secondary">mdi-map-marker-question-outline</v-icon>
    <h1 class="text-h3 font-weight-bold mt-4">404</h1>
    <p class="text-subtitle-1 text-medium-emphasis mt-2">
      Página não encontrada. Verifique o endereço ou volte para a home.
    </p>
    <v-btn color="primary" class="mt-4" @click="router.push('/')">Voltar para a Home</v-btn>
  </v-container>
</template>
