<script setup lang="ts">
import SectionTitle from '@shared/components/SectionTitle.vue'

import HeroSection from '../components/HeroSection.vue'
import StrategicServicesGrid from '../components/StrategicServicesGrid.vue'

const DIFFERENTIALS = [
  {
    icon: 'mdi-target',
    title: 'Precisão técnica',
    description: 'Metodologias rigorosas e equipamentos calibrados.',
  },
  {
    icon: 'mdi-chip',
    title: 'Tecnologia',
    description: 'GNSS, GPS e estações totais de alta precisão.',
  },
  {
    icon: 'mdi-shield-check',
    title: 'Acervo técnico CREA',
    description: 'Responsabilidade técnica em todos os projetos.',
  },
] as const
</script>

<template>
  <div>
    <HeroSection />

    <section class="bg-surface">
      <div class="pt-16">
        <SectionTitle title="Serviços Estratégicos" subtitle="Áreas de atuação da ENGEVITH." />
      </div>
      <StrategicServicesGrid />
    </section>

    <section class="bg-surface-container-low py-16">
      <v-container>
        <SectionTitle title="Nossos Diferenciais" />
        <v-row dense>
          <v-col v-for="(item, index) in DIFFERENTIALS" :key="item.title" cols="12" md="4">
            <v-card
              v-reveal="index * 100"
              class="h-100 pa-6 text-center card-hover"
              variant="elevated"
              color="surface"
              rounded="xl"
            >
              <v-avatar color="tertiary-container" size="64" class="mb-4">
                <v-icon color="on-tertiary-container" size="32">{{ item.icon }}</v-icon>
              </v-avatar>
              <h3 class="text-h6 font-weight-bold on-surface mb-2">{{ item.title }}</h3>
              <p class="text-body-2 on-surface-variant mb-0">{{ item.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="bg-engevith-navy py-16 text-center">
      <v-container v-reveal>
        <div class="engevith-accent-rule engevith-accent-rule--animated mx-auto mb-6" />
        <h2 class="text-h4 font-weight-bold text-white mb-4">Vamos tirar seu projeto do papel?</h2>
        <p class="text-subtitle-1 text-on-dark mb-8">
          Fale com nossa equipe e receba um orçamento sob medida.
        </p>
        <v-btn color="primary" size="large" to="/contato" prepend-icon="mdi-file-document-edit">
          Solicitar orçamento
        </v-btn>
      </v-container>
    </section>
  </div>
</template>
