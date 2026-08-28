<script setup lang="ts">
import SectionTitle from '@shared/components/SectionTitle.vue'

import ContactForm from '../components/ContactForm.vue'

interface ContactInfoItem {
  icon: string
  label: string
  value: string
  href?: string
}

const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: 'mdi-email',
    label: 'E-mail',
    value: 'contato@engevith.com.br',
    href: 'mailto:contato@engevith.com.br',
  },
  { icon: 'mdi-phone', label: 'Telefone', value: '(14) 99608-8573', href: 'tel:+5514996088573' },
  {
    icon: 'mdi-map-marker',
    label: 'Endereço',
    value: 'R. Juvenal Coimbra, 465 - Centro, Cerqueira César - SP, 18760-000',
  },
]

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=R.%20Juvenal%20Coimbra%2C%20465%20-%20Centro%2C%20Cerqueira%20C%C3%A9sar%20-%20SP%2C%2018760-000&z=15&output=embed'
</script>

<template>
  <v-container class="py-12">
    <SectionTitle title="Contato" subtitle="Fale com a nossa equipe e solicite um orçamento." />

    <v-row>
      <v-col cols="12" md="5">
        <v-card class="pa-6 h-100" variant="elevated" color="surface" rounded="xl">
          <h3 class="text-h6 font-weight-bold on-surface mb-4">Informações de Contato</h3>
          <div v-for="item in CONTACT_INFO" :key="item.label" class="d-flex align-center mb-4">
            <v-avatar color="secondary-container" size="40" class="mr-3">
              <v-icon color="on-secondary-container">{{ item.icon }}</v-icon>
            </v-avatar>
            <div>
              <p class="text-caption on-surface-variant mb-0">{{ item.label }}</p>
              <p class="text-body-1 font-weight-bold on-surface mb-0">
                <a v-if="item.href" :href="item.href" class="on-surface">{{ item.value }}</a>
                <template v-else>{{ item.value }}</template>
              </p>
            </div>
          </div>

          <v-divider class="my-4" color="outline-variant" />

          <h3 class="text-h6 font-weight-bold on-surface mb-3">Localização</h3>
          <div class="rounded-lg overflow-hidden border">
            <iframe
              :src="MAP_EMBED_URL"
              width="100%"
              height="240"
              style="border: 0"
              loading="lazy"
              title="Localização ENGEVITH"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <ContactForm />
      </v-col>
    </v-row>
  </v-container>
</template>
