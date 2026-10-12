<template>
  <div class="flex flex-col w-full">
    <!-- Hero Section -->
    <section class="relative w-full overflow-hidden bg-surface py-12 lg:py-20">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left Column: Storytelling & Positioning -->
          <div class="lg:col-span-7 flex flex-col space-y-6">
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Oportunidade &amp; Paixão Por Viajar</span>
            </div>
            <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              Transforma a tua paixão por viajar numa <span class="italic font-normal text-primary">oportunidade</span>.
            </h1>
            <div class="space-y-4 text-on-surface-variant font-body-lg text-body-lg">
              <p class="text-on-surface font-headline-sm text-headline-sm font-normal leading-snug">
                E se aquilo que mais gostas de fazer pudesse gerar um rendimento extra ou até uma nova carreira?
              </p>
              <p>
                Muitas pessoas adoram viajar, ajudar amigos a planear férias, descobrir novos destinos e partilhar experiências. Mas poucas imaginam que essa paixão pode transformar-se numa atividade flexível e gratificante.
              </p>
              <p>
                Foi precisamente isso que me levou a descobrir o mundo dos Travel Partners. Hoje ajudo outras pessoas a organizar viagens memoráveis e, ao mesmo tempo, tenho a oportunidade de desenvolver um projeto próprio, com liberdade para gerir o meu tempo e trabalhar a partir de onde quiser.
              </p>
            </div>
            <p class="font-headline-sm text-headline-sm text-primary italic pt-2">
              E a melhor parte? Tu também podes fazê-lo.
            </p>
            <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer" href="#oportunidade" @click.prevent="scrollToSection('oportunidade')">
                Descobrir a Oportunidade
                <span class="material-symbols-outlined ml-2 text-lg">arrow_downward</span>
              </a>
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" href="mailto:concierge@carlacoelho.pt?subject=Tenho%20Interesse%20na%20Oportunidade%20Travel%20Partner">
                Tenho Interesse
              </a>
            </div>
          </div>
          <!-- Right Column: Editorial Visual -->
          <div class="lg:col-span-5 relative">
            <div class="overflow-hidden rounded shadow-xl group">
              <div class="relative h-[380px] lg:h-[520px] overflow-hidden">
                <img alt="Interior de um jato privado com lugares em pele cor de creme" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnKsArknnfG0fKiCi8ksPkC0MfLSz8Ebeg0d-XqCmKJhUo0utt6QRFy8h3QfNZJuxGfWs_dk6cemxVaoWvU-8m5ftfdeQwYkuJK8dXotGwp0z0Xq3UwlLVKZizv-CYKAr6td4VLtnNvh1IXa6SdyOmmXBfWWSgbtNdup118NVqyOpM8zbrOfszTXfxQa3x9oZkRMd7q9xrK6FtRBrpzEubP5oZFiGfGndW1YS82tsf_h23vGq6GWB8d9cg84EEPkJfKPcjig_26UI" />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-surface-container-lowest">
                  <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold">Nova Carreira</span>
                  <p class="font-headline-sm text-headline-sm font-light mt-0.5">O teu ritmo, o teu destino</p>
                </div>
              </div>
            </div>
            <!-- Decorative Floating Card -->
            <div class="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded shadow-xl items-center gap-3 max-w-xs">
              <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span class="material-symbols-outlined">public</span>
              </div>
              <div>
                <p class="font-label-lg text-label-lg text-on-surface leading-snug">Trabalha de Onde Quiser</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Flexibilidade para gerir o teu tempo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- A Minha História Section -->
    <section class="w-full bg-surface-container-low py-20 lg:py-28" id="historia">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left: Narrative -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-2">A Minha História</span>
              <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Como uma paixão se transformou numa oportunidade
              </h2>
            </div>
            <div class="space-y-4 text-on-surface-variant font-body-lg text-body-lg">
              <p>
                Sempre gostei de viajar, planear itinerários, procurar destinos diferentes e descobrir experiências únicas.
              </p>
              <p>
                Com o tempo percebi que aquilo que fazia por gosto podia também ajudar outras pessoas. Foi assim que encontrei uma forma de unir a paixão pelas viagens ao espírito empreendedor, criando uma atividade que me permite crescer pessoal e profissionalmente enquanto ajudo outros viajantes a concretizarem os seus sonhos.
              </p>
            </div>
          </div>
          <!-- Right: Pull Quote Card -->
          <div class="lg:col-span-5">
            <div class="relative bg-surface-container-lowest p-8 lg:p-10 rounded shadow-md overflow-hidden">
              <span class="material-symbols-outlined text-primary/20 text-8xl absolute -top-4 -right-4 select-none">format_quote</span>
              <p class="font-headline-sm text-headline-sm text-on-surface italic relative z-10 leading-relaxed mb-6">
                “Hoje quero partilhar essa oportunidade com outras pessoas que procuram algo mais.”
              </p>
              <div class="relative z-10 pt-4 border-t border-surface-variant">
                <h4 class="font-headline-sm text-headline-sm text-primary leading-none">Carla Coelho</h4>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Travel Designer &amp; Fundadora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- E Se Fosse a Tua Vez? Section -->
    <section class="w-full bg-surface py-20 lg:py-28">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="max-w-2xl mb-14 space-y-3">
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Sem Barreiras de Entrada</span>
          <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            E se fosse a tua vez?
          </h2>
        </div>
        <!-- Contrast Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <!-- Não precisas de -->
          <div class="p-8 bg-surface-container-low rounded shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <span class="material-symbols-outlined text-on-surface-variant text-2xl">close</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface">Não precisas de…</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="item in notNeeded" :key="item" class="flex items-start gap-3 text-on-surface-variant font-body-lg text-body-lg">
                <span class="material-symbols-outlined text-on-surface-variant/60 text-xl shrink-0 mt-1">close</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <!-- Precisas apenas de -->
          <div class="p-8 bg-surface-container-lowest rounded shadow-sm border border-primary/10">
            <div class="flex items-center gap-3 mb-6">
              <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface">Precisas apenas de…</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="item in needed" :key="item" class="flex items-start gap-3 text-on-surface font-body-lg text-body-lg">
                <span class="material-symbols-outlined text-primary text-xl shrink-0 mt-1" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <p class="max-w-3xl text-on-surface-variant font-body-lg text-body-lg">
          Com formação, acompanhamento e uma comunidade pronta a ajudar-te, poderás descobrir como transformar a tua paixão por viajar num projeto com potencial de crescimento.
        </p>
      </div>
    </section>

    <!-- O Que Poderás Encontrar Section -->
    <section class="w-full bg-surface-container-low py-20 lg:py-28" id="oportunidade">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-3 max-w-2xl">
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Vantagens &amp; Possibilidades</span>
            <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              O que poderás encontrar nesta oportunidade?
            </h2>
          </div>
          <div class="hidden md:flex items-center gap-2">
            <span class="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">{{ benefits.length }} Motivos</span>
            <span class="w-12 h-[1px] bg-outline-variant"></span>
          </div>
        </div>
        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="benefit in benefits" :key="benefit.title" class="p-6 bg-surface-container-lowest rounded shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-md" :class="benefit.wide ? 'sm:col-span-2 lg:col-span-3' : ''">
            <span class="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5" :style="benefit.wide ? null : fillIconStyle">{{ benefit.icon }}</span>
            <div>
              <h3 class="font-label-lg text-label-lg text-on-surface mb-1">{{ benefit.title }}</h3>
              <p v-if="benefit.note" class="font-body-md text-body-md text-on-surface-variant">{{ benefit.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- A Minha Missão Section -->
    <section class="w-full bg-surface py-20 lg:py-28 relative overflow-hidden">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <span class="material-symbols-outlined text-primary/20 text-8xl select-none">format_quote</span>
          <div>
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-4">A Minha Missão</span>
            <p class="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
              Ajudar pessoas apaixonadas por viagens a descobrir novas oportunidades de crescimento pessoal e profissional, construindo uma atividade flexível e alinhada com os seus objetivos de vida.
            </p>
          </div>
          <div class="space-y-2 pt-4">
            <p class="font-headline-sm text-headline-sm text-on-surface-variant">
              Porque acredito que o trabalho não deve limitar os nossos sonhos.
            </p>
            <p class="font-headline-sm text-headline-sm text-primary italic">
              Deve ser uma ferramenta para os alcançar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pronto para descobrir mais? CTA Section -->
    <section class="w-full bg-surface-container-low py-20 lg:py-28" id="contacto">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16 relative">
          <!-- Subtle background gradient glow -->
          <div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary-fixed/20 blur-3xl pointer-events-none"></div>
          <div class="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-primary">
              <span class="material-symbols-outlined text-base">flight_takeoff</span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest font-semibold">O Teu Próximo Capítulo</span>
            </div>
            <!-- Punchline Highlight -->
            <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              Pronto para descobrir <span class="italic text-primary">mais?</span>
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Se gostas de viajar, conhecer pessoas e procuras uma oportunidade diferente, talvez este seja o momento de explorares um caminho que nunca tinhas considerado.
            </p>
            <p class="font-headline-sm text-headline-sm text-primary italic max-w-xl mx-auto">
              Quem sabe se a tua próxima viagem não será o início da tua próxima aventura profissional?
            </p>
            <!-- Action Container -->
            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-10 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md" href="mailto:concierge@carlacoelho.pt?subject=Tenho%20Interesse%20na%20Oportunidade%20Travel%20Partner">
                <span class="material-symbols-outlined mr-2 text-xl">send</span>
                Tenho Interesse
              </a>
              <router-link class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container text-on-surface hover:bg-surface-container-high px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" to="/contactos">
                <span class="material-symbols-outlined mr-2 text-xl text-primary">call</span>
                Falar Comigo
              </router-link>
            </div>
            <div class="pt-6 border-t border-surface-container flex flex-wrap items-center justify-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">verified</span>
                Sem compromisso
              </span>
              <span class="text-outline-variant">•</span>
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">schedule</span>
                Resposta em menos de 24 horas
              </span>
              <span class="text-outline-variant">•</span>
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">handshake</span>
                Acompanhamento personalizado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const notNeeded = [
  'ter experiência em turismo.',
  'abandonar a tua atividade atual.',
  'ser especialista em viagens.'
]

const needed = [
  'vontade de aprender.',
  'gosto por comunicar com pessoas.',
  'ambição para construir algo teu.'
]

const fillIconStyle = { fontVariationSettings: "'FILL' 1" }

const benefits = [
  { title: 'Flexibilidade para gerir o teu horário', icon: 'schedule' },
  { title: 'Possibilidade de trabalhar a partir de qualquer lugar', icon: 'public' },
  { title: 'Formação contínua e acompanhamento', icon: 'school' },
  { title: 'Desenvolvimento pessoal e profissional', icon: 'trending_up' },
  { title: 'Integração numa equipa dinâmica e inspiradora', icon: 'groups' },
  { title: 'Rendimento complementar ou construção de uma atividade a tempo inteiro', icon: 'payments' },
  {
    title: 'A oportunidade de fazer parte da indústria das viagens',
    icon: 'flight_takeoff',
    wide: true,
    note: 'Entra num setor que transforma sonhos em memórias — e a tua paixão em profissão.'
  }
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>