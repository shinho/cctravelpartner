<template>
  <footer class="w-full py-20 px-margin-desktop bg-surface-container border-t border-primary/5">
    <div class="max-w-[1280px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
        <div class="max-w-xs">
          <div class="flex items-center gap-4 mb-8">
            <img alt="Carla Coelho" class="h-8 w-auto object-contain brightness-75" src="/assets/logo.png" />
            <span class="font-headline-sm text-headline-sm text-primary font-serif-light tracking-wide">Carla Coelho</span>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">{{ $t('app.description') }}</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-16 w-full md:w-auto">
          <div>
            <h6 class="font-label-lg text-label-lg text-primary uppercase mb-8 tracking-widest text-[11px]">{{ $t('footer.servicos') }}</h6>
            <ul class="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant/80 font-light">
              <li><router-link class="hover:text-primary transition-colors" to="/consultadoria">{{ $t('footer.consultoria') }}</router-link></li>
              <li><router-link class="hover:text-primary transition-colors" to="/roteiros">{{ $t('footer.roteiros') }}</router-link></li>
              <li><router-link class="hover:text-primary transition-colors" to="/vip-concierge">{{ $t('footer.vipConcierge') }}</router-link></li>
            </ul>
          </div>
          <div>
            <h6 class="font-label-lg text-label-lg text-primary uppercase mb-8 tracking-widest text-[11px]">{{ $t('footer.agencia') }}</h6>
            <ul class="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant/80 font-light">
              <li><router-link class="hover:text-primary transition-colors" to="/sobre-nos">{{ $t('nav.sobre') }}</router-link></li>
              <li><router-link class="hover:text-primary transition-colors" to="/oportunidades">{{ $t('footer.oportunidades') }}</router-link></li>
              <li><router-link class="hover:text-primary transition-colors" to="/contactos">{{ $t('footer.contato') }}</router-link></li>
            </ul>
          </div>
          <div class="col-span-2 md:col-span-1">
            <h6 class="font-label-lg text-label-lg text-primary uppercase mb-8 tracking-widest text-[11px]">{{ $t('footer.legal') }}</h6>
            <ul class="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant/80 font-light">
              <li><router-link class="hover:text-primary transition-colors" to="/privacidade">{{ $t('footer.privacidade') }}</router-link></li>
              <li><router-link class="hover:text-primary transition-colors" to="/termos">{{ $t('footer.termos') }}</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="font-label-sm text-label-sm text-on-surface-variant/60 font-light tracking-wide text-[11px]">{{ $t('footer.direitos') }}</p>
        <div class="flex gap-10">
          <a class="text-primary/60 hover:text-primary transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined text-[20px]">face_nod</span></a>
          <a class="text-primary/60 hover:text-primary transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined text-[20px]">photo_camera</span></a>
          <router-link class="text-primary/60 hover:text-primary transition-colors" to="/contactos"><span class="material-symbols-outlined text-[20px]">alternate_email</span></router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>