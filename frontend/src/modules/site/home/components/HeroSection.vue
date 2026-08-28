<script setup lang="ts">
const HERO_TITLE = 'Engenharia que transforma precisão em resultado'
const HERO_SUBTITLE =
  'Projetos, topografia, regularização e soluções florestais com responsabilidade técnica e tecnologia de ponta.'
</script>

<template>
  <section class="hero py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="9" class="text-center text-md-left">
          <div class="engevith-accent-rule engevith-accent-rule--animated mb-6 mx-auto mx-md-0" />
          <h1 class="text-h3 text-md-h2 font-weight-bold text-white mb-4">
            {{ HERO_TITLE }}
          </h1>
          <p class="text-subtitle-1 text-on-dark mb-8">{{ HERO_SUBTITLE }}</p>
          <div class="d-flex flex-wrap ga-3 justify-center justify-md-start">
            <v-btn color="primary" size="large" to="/contato" prepend-icon="mdi-file-document-edit">
              Solicitar orçamento
            </v-btn>
            <v-btn variant="tonal" color="white" size="large" to="/servicos">
              Conheça nossos serviços
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero {
  background:
    radial-gradient(1000px 400px at 85% -10%, rgb(0 107 93 / 45%), transparent 60%),
    linear-gradient(135deg, #0b2437 0%, #0d2f4b 55%, #0b2437 100%);
}
</style>
