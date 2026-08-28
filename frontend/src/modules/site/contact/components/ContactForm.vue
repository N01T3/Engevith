<script setup lang="ts">
import { ref } from 'vue'

import { contactService } from '../data/contact.service'
import type { LeadInput } from '../types/contact.types'

interface ContactFormModel {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const form = ref<ContactFormModel>({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
})

const submitting = ref(false)
const submitted = ref(false)
const formRef = ref<{ validate: () => Promise<{ valid: boolean }> } | null>(null)

const EMAIL_RULE = (value: string): string | true => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(value) || 'E-mail inválido'
}

const REQUIRED_RULE = (value: string): string | true => !!value || 'Campo obrigatório'

async function submit(): Promise<void> {
  const result = await formRef.value?.validate()
  if (!result?.valid) {
    return
  }

  submitting.value = true
  try {
    const input: LeadInput = { ...form.value }
    await contactService.createLead(input)
    submitted.value = true
  } finally {
    submitting.value = false
  }
}

function reset(): void {
  form.value = { name: '', email: '', phone: '', company: '', message: '' }
  submitted.value = false
}
</script>

<template>
  <v-card class="pa-6" variant="elevated" color="surface" rounded="xl">
    <v-alert v-if="submitted" type="success" variant="tonal" class="mb-4">
      Mensagem enviada com sucesso! Em breve entraremos em contato.
    </v-alert>

    <v-form ref="formRef" @submit.prevent="submit">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.name"
            label="Nome"
            :rules="[REQUIRED_RULE]"
            density="comfortable"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.email"
            label="E-mail"
            :rules="[REQUIRED_RULE, EMAIL_RULE]"
            density="comfortable"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.phone"
            label="Telefone"
            :rules="[REQUIRED_RULE]"
            density="comfortable"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="form.company" label="Empresa" density="comfortable" />
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="form.message" label="Mensagem" :rules="[REQUIRED_RULE]" rows="4" />
        </v-col>
      </v-row>

      <div class="d-flex flex-wrap ga-3 mt-2">
        <v-btn type="submit" color="primary" :loading="submitting" prepend-icon="mdi-send">
          Enviar mensagem
        </v-btn>
        <v-btn v-if="submitted" variant="text" color="secondary" @click="reset"
          >Enviar outra mensagem</v-btn
        >
      </div>
    </v-form>
  </v-card>
</template>
