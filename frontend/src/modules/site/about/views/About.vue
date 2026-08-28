<script setup lang="ts">
import SectionTitle from '@shared/components/SectionTitle.vue'

const VALUES = [
  {
    icon: 'mdi-target',
    title: 'Missão',
    description: 'Entregar soluções de engenharia com precisão, ética e responsabilidade técnica.',
  },
  {
    icon: 'mdi-telescope',
    title: 'Visão',
    description: 'Ser referência em engenharia e geotecnologia, unindo inovação e confiança.',
  },
  {
    icon: 'mdi-heart',
    title: 'Valores',
    description: 'Precisão, transparência, tecnologia e compromisso com cada cliente.',
  },
] as const

const DIFFERENTIALS = [
  {
    icon: 'mdi-account-group',
    title: 'Equipe técnica',
    description: 'Engenheiros e técnicos qualificados e registrados no CREA.',
  },
  {
    icon: 'mdi-crosshairs-gps',
    title: 'Equipamentos',
    description: 'GNSS, GPS e estações totais de alta precisão.',
  },
  {
    icon: 'mdi-shield-check',
    title: 'Responsabilidade técnica',
    description: 'ARTs emitidas e acervo técnico comprovado.',
  },
] as const
</script>

<template>
  <v-container class="py-12">
    <SectionTitle
      title="Sobre a ENGEVITH"
      subtitle="Quem somos, no que acreditamos e como trabalhamos."
    />

    <section class="mb-12">
      <h2 class="text-h5 font-weight-bold on-surface mb-4">Quem Somos</h2>
      <p class="text-body-1 on-surface-variant">
        A ENGEVITH nasceu em 2017 para unir engenharia de precisão e tecnologia aplicada ao campo.
        Com sede em Cerqueira César/SP, atuamos em projetos, topografia e geodésia, regularização,
        obras e soluções florestais, oferecendo acompanhamento técnico completo — do levantamento
        inicial à entrega do projeto.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-h5 font-weight-bold on-surface mb-4">Missão, Visão e Valores</h2>
      <v-row dense>
        <v-col
          v-for="(item, index) in VALUES"
          :key="item.title"
          v-reveal="index * 100"
          cols="12"
          md="4"
        >
          <v-card
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
    </section>

    <section class="mb-12">
      <h2 class="text-h5 font-weight-bold on-surface mb-4">Nossos Diferenciais</h2>
      <v-row dense>
        <v-col
          v-for="(item, index) in DIFFERENTIALS"
          :key="item.title"
          v-reveal="index * 100"
          cols="12"
          md="4"
        >
          <v-card class="h-100 pa-5 card-hover" variant="elevated" color="surface" rounded="xl">
            <v-avatar color="primary-container" size="56" class="mb-3">
              <v-icon color="on-primary-container" size="28">{{ item.icon }}</v-icon>
            </v-avatar>
            <h3 class="text-h6 font-weight-bold on-surface mb-2">{{ item.title }}</h3>
            <p class="text-body-2 on-surface-variant mb-0">{{ item.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="mb-12">
      <h2 class="text-h5 font-weight-bold on-surface mb-4">Engenheiros Responsáveis</h2>
      <v-card variant="elevated" color="surface" rounded="xl">
        <v-list>
          <v-list-item
            prepend-icon="mdi-badge-account-horizontal"
            title="Engenheiro(a) Responsável"
            subtitle="CREA 5069715079"
          />
        </v-list>
      </v-card>
    </section>

    <section>
      <h2 class="text-h5 font-weight-bold on-surface mb-4">Dados da Empresa</h2>
      <v-card variant="elevated" color="surface" rounded="xl">
        <v-list>
          <v-list-item prepend-icon="mdi-domain" title="CNPJ" subtitle="29.315.910/0001-45" />
          <v-divider inset color="outline-variant" />
          <v-list-item prepend-icon="mdi-calendar-star" title="Fundação" subtitle="Desde 2017" />
          <v-divider inset color="outline-variant" />
          <v-list-item prepend-icon="mdi-map-marker" title="Sede" subtitle="Cerqueira César - SP" />
        </v-list>
      </v-card>
    </section>
  </v-container>
</template>
