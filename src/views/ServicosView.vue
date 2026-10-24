<template>
  <div data-testId="servicos-view" class="flex flex-col w-full">
    <ServicosHeroSection />
    <ServicosStatementSection />
    <ServicosCatalogSection />
    <ServicosStepsSection />
    <ServicosBenefitsSection />
    <ServicosContactSection />
    <ServicosQuickInquirySection />
  </div>
</template>

<script setup>
import ServicosHeroSection from '../components/servicos/ServicosHeroSection.vue'
import ServicosStatementSection from '../components/servicos/ServicosStatementSection.vue'
import ServicosCatalogSection from '../components/servicos/ServicosCatalogSection.vue'
import ServicosStepsSection from '../components/servicos/ServicosStepsSection.vue'
import ServicosBenefitsSection from '../components/servicos/ServicosBenefitsSection.vue'
import ServicosContactSection from '../components/servicos/ServicosContactSection.vue'
import ServicosQuickInquirySection from '../components/servicos/ServicosQuickInquirySection.vue'
</script>

