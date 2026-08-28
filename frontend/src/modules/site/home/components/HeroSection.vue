<script setup lang="ts">
import logoUrl from '@/assets/images/logo.png'

const HERO_TITLE = 'Engenharia que transforma precisão em resultado'
const HERO_SUBTITLE =
  'Projetos, topografia, regularização e soluções florestais com responsabilidade técnica e tecnologia de ponta.'
</script>

<template>
  <section class="hero">
    <v-container class="hero-container">
      <div v-reveal class="hero-content">
        <v-img :src="logoUrl" alt="ENGEVITH" contain eager aspect-ratio="2.857" class="hero-logo" />
        <div class="engevith-accent-rule engevith-accent-rule--animated hero-rule" />
        <h1 class="hero-title font-weight-bold text-white">{{ HERO_TITLE }}</h1>
        <p class="hero-subtitle text-on-dark">{{ HERO_SUBTITLE }}</p>
        <div class="d-flex flex-wrap ga-4 justify-center">
          <v-btn color="primary" size="large" to="/contato" prepend-icon="mdi-file-document-edit">
            Solicitar orçamento
          </v-btn>
          <v-btn variant="tonal" color="white" size="large" to="/servicos">
            Conheça nossos serviços
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: clamp(460px, 72svh, 620px);
  overflow: hidden;
  background:
    radial-gradient(900px 420px at 50% -14%, rgb(0 168 143 / 34%), transparent 62%),
    radial-gradient(760px 420px at -8% 110%, rgb(0 91 159 / 28%), transparent 60%),
    linear-gradient(135deg, #0b2437 0%, #0d2f4b 52%, #0b2437 100%);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgb(255 255 255 / 3.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 3.5%) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at 50% 30%, black 0%, transparent 78%);
}

.hero::after {
  content: '';
  position: absolute;
  top: 8%;
  left: 50%;
  width: clamp(360px, 44vw, 600px);
  aspect-ratio: 1;
  transform: translateX(-50%);
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, rgb(0 168 143 / 22%), transparent 64%);
  filter: blur(10px);
}

.hero-container {
  position: relative;
  z-index: 1;
  padding-inline: clamp(16px, 4vw, 48px);
  padding-block: clamp(56px, 8vh, 88px);
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-logo {
  width: clamp(220px, 55vw, 460px);
  filter: drop-shadow(0 16px 40px rgb(0 0 0 / 35%));
}

.hero-rule {
  margin-top: 24px;
  margin-bottom: 24px;
}

.hero-title {
  font-size: clamp(2.25rem, 1rem + 3vw, 3.5rem);
  line-height: 1.15;
  letter-spacing: -0.25px;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: clamp(1rem, 0.75rem + 0.8vw, 1.2rem);
  line-height: 1.55;
  max-width: 52ch;
  margin-bottom: 32px;
}
</style>
