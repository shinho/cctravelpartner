<template>
  <main class="min-h-screen bg-surface py-16 lg:py-24">
    <section class="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
      <p class="mb-3 font-label-sm uppercase tracking-widest text-primary">{{ t('inquiry.eyebrow') }}</p>
      <h1 class="mb-4 font-headline-xl text-headline-xl text-on-surface">{{ t('inquiry.title') }}</h1>
      <p class="mb-10 font-body-lg text-on-surface-variant">{{ t('inquiry.description') }}</p>

      <form class="space-y-6 rounded-xl bg-surface-container-lowest p-6 shadow-lg sm:p-10" name="inquiry" @submit.prevent="submitInquiry">
        <input type="hidden" name="form-name" value="inquiry" />
        <p class="hidden"><label>Leave this field empty <input name="bot-field" /></label></p>
        <div class="grid gap-6 sm:grid-cols-2">
          <label class="block font-label-md text-on-surface">{{ t('inquiry.name') }} *
            <input v-model="form.name" required name="name" autocomplete="name" class="mt-2 w-full rounded border-outline-variant bg-surface px-4 py-3" />
          </label>
          <label class="block font-label-md text-on-surface">{{ t('inquiry.email') }} *
            <input v-model="form.email" required type="email" name="email" autocomplete="email" class="mt-2 w-full rounded border-outline-variant bg-surface px-4 py-3" />
          </label>
          <label class="block font-label-md text-on-surface">{{ t('inquiry.phone') }}
            <input v-model="form.phone" type="tel" name="phone" autocomplete="tel" class="mt-2 w-full rounded border-outline-variant bg-surface px-4 py-3" />
          </label>
          <label class="block font-label-md text-on-surface">{{ t('inquiry.topic') }} *
            <input v-model="form.topic" required name="topic" class="mt-2 w-full rounded border-outline-variant bg-surface px-4 py-3" />
          </label>
        </div>
        <label class="block font-label-md text-on-surface">{{ t('inquiry.message') }} *
          <textarea v-model="form.message" required name="message" rows="6" class="mt-2 w-full rounded border-outline-variant bg-surface px-4 py-3"></textarea>
        </label>
        <p v-if="status === 'success'" role="status" class="text-green-800">{{ t('inquiry.success') }}</p>
        <p v-if="status === 'error'" role="alert" class="text-red-700">{{ t('inquiry.error') }}</p>
        <button type="submit" :disabled="status === 'pending'" class="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 font-label-lg uppercase tracking-wider text-on-primary disabled:opacity-60">
          {{ status === 'pending' ? t('inquiry.sending') : t('inquiry.submit') }}
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()
const form = reactive({
  name: '',
  email: '',
  phone: '',
  topic: String(route.query.topic || ''),
  message: String(route.query.context || '')
})
const status = ref('idle')

async function submitInquiry() {
  status.value = 'pending'
  const body = new URLSearchParams({ 'form-name': 'inquiry', ...form })

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })
    if (!response.ok) throw new Error('Submission rejected')
    status.value = 'success'
    Object.assign(form, { name: '', email: '', phone: '', topic: '', message: '' })
  } catch {
    status.value = 'error'
  }
}
</script>
