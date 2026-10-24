<template>
  <div class="flex flex-col w-full">
    <!-- Top Ambient Banner & Overline -->
    <section class="relative w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12">

      <!-- Editorial Hero Portrait & Intro Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left: Portrait Frame with Asymmetric Geometry -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Decorative Background Backdrop -->
            <div class="absolute -top-4 -left-4 w-full h-full bg-secondary-container/40 rounded-xl transform -rotate-1 pointer-events-none"></div>
            <div class="absolute -bottom-4 -right-4 w-full h-full bg-surface-container-high rounded-xl transform rotate-2 pointer-events-none"></div>
            <!-- Main Portrait Card -->
            <div class="relative bg-surface-container-lowest p-3 rounded-xl shadow-xl overflow-hidden">
              <div class="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <img alt="Carla Coelho — Fundadora e Travel Partner" class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9drmHZ2KTBWZHKc5_FBpx3coW-VzZ9IpBNYTgW1EcfXiXiefgzncpXhWxjEXUIDbkCt5OnYd4nU_so0VGTRYA0nzMQhOWXHMZSFA3bbuBRGY-5gJEMYKopqXrbTqkxY6Q7e1ASIuMkqbdWnQo3rTjZH_IrJXciyf45yFAFN53IFSo354QPVSkErluJsP5QwiPCrwsBLZusx0gf4CN4BhG-DWcZk7uyY5wID-yconZaIv968ACGQGg"/>
                <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-on-primary">
                  <span class="font-label-sm text-label-sm tracking-wider uppercase opacity-90 block text-secondary-fixed">Perfil &amp; Filosofia</span>
                  <p class="font-headline-sm text-headline-sm text-paper-cream">Carla Coelho</p>
                </div>
              </div>
              <div class="p-4 flex items-center justify-between text-on-surface-variant">
                <div>
                  <p class="font-label-lg text-label-lg font-semibold text-primary">Carla Coelho</p>
                  <p class="font-label-sm text-label-sm text-outline">Fundadora &amp; Travel Partner</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-sm">
                  <span class="material-symbols-outlined text-xl">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right: Main Greeting & Narrative Flow -->
        <div class="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-6 pt-6 lg:pt-0">
          <div class="space-y-3">
            <span class="font-label-lg text-label-lg tracking-widest text-terracotta uppercase">Boas-vindas</span>
            <h1 class="font-headline-xl text-headline-xl text-primary tracking-tight">
              Olá! Sou a Carla Coelho.
            </h1>
          </div>
          <!-- First Narrative Block -->
          <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm space-y-4">
            <p class="font-headline-sm text-headline-sm text-on-surface leading-snug">
              “Para mim, viajar não é apenas visitar novos sítios. É criar memórias, viver momentos únicos e voltar a casa com a mala cheia de histórias.”
            </p>
            <div class="h-0.5 w-16 bg-heritage-gold/50"></div>
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              Acredito profundamente que o verdadeiro luxo reside na autenticidade dos encontros, no conforto dos lugares escolhidos a dedo e na serenidade de não ter de gerir imprevistos nem dúvidas ao longo do caminho.
            </p>
          </div>
          <!-- Narrative Contrast: Challenge vs Solution -->
          <div class="space-y-4 text-on-surface">
            <p class="font-headline-sm text-headline-sm text-terracotta font-semibold">
              Mas sejamos sinceros: planear uma viagem dá trabalho.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              Procurar voos, comparar hotéis, organizar percursos e gerir horários... A parte boa é sonhar. O resto, muitas vezes, é stress.
            </p>
          </div>
          <!-- Service Genesis -->
          <div class="bg-surface-container-high/60 p-6 rounded-xl flex items-start gap-4 shadow-sm">
            <div class="p-3 rounded-md bg-primary text-on-primary shrink-0 shadow-sm">
              <span class="material-symbols-outlined text-2xl">auto_awesome</span>
            </div>
            <div class="space-y-2">
              <p class="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold">
                Foi por isso que criei o meu serviço de Travel Partner.
              </p>
              <p class="font-body-md text-body-md text-on-surface-variant">
                O meu objetivo é simples: tratar de tudo. Eu faço a pesquisa, a organização e cuido de cada detalhe, de forma muito próxima e personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Editorial Quotation Callout Banner -->
    <section class="w-full bg-surface-container py-16 my-8">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="relative bg-surface-container-lowest rounded-xl p-8 sm:p-14 shadow-md overflow-hidden text-center max-w-4xl mx-auto">
          <div class="absolute -top-10 -left-10 text-heritage-gold/15 pointer-events-none select-none">
            <span class="material-symbols-outlined text-9xl">format_quote</span>
          </div>
          <span class="font-label-lg text-label-lg text-terracotta uppercase tracking-widest block mb-4">A Promessa aos Clientes</span>
          <blockquote class="font-headline-xl text-headline-xl text-deep-onyx mb-6 leading-tight">
            “Deixem o trabalho comigo e aproveitem o melhor da viagem!”
          </blockquote>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Os meus clientes só têm de fazer uma coisa: preparar as malas e partir à descoberta.
          </p>
          <!-- Signature mark -->
          <div class="inline-flex flex-col items-center justify-center pt-4">
            <div class="font-headline-sm text-headline-sm text-primary tracking-wide italic">
              Carla Coelho
            </div>
            <div class="w-24 h-0.5 bg-heritage-gold mt-1 mb-2"></div>
            <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Fundadora • Travel Partner Exclusivo</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Side-by-Side Storytelling: O Desafio vs A Experiência -->
    <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div class="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Diferenciação</span>
        <h2 class="font-headline-lg text-headline-lg text-on-surface">Como transformamos o seu descanso</h2>
        <p class="font-body-md text-body-md text-on-surface-variant">
          A diferença substancial entre planeamento solitário exaustivo e uma jornada sob a mentoria de uma curadora dedicada.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <!-- Column 1: O Desafio do Planeamento -->
        <div class="bg-surface-container-high/40 p-8 rounded-xl shadow-sm flex flex-col justify-between">
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <span class="p-2.5 rounded-lg bg-surface-variant text-outline shrink-0">
                <span class="material-symbols-outlined">schedule</span>
              </span>
              <div>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-outline block">O Cenário Tradicional</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface">O Desafio do Planeamento</h3>
              </div>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Dezenas de separadores abertos, avaliações contraditórias, horários de ligação complexos e incerteza sobre a qualidade real dos espaços:
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-outline mt-0.5 text-base">close</span>
                <span class="font-body-md text-body-md text-on-surface">Horas gastas a filtrar centenas de hotéis sem garantias de privacidade ou excelência.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-outline mt-0.5 text-base">close</span>
                <span class="font-body-md text-body-md text-on-surface">Insegurança na coordenação de transfers, charters ou guias locais de confiança.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-outline mt-0.5 text-base">close</span>
                <span class="font-body-md text-body-md text-on-surface">Ausência de suporte dedicado em caso de cancelamento, atraso ou alteração meteorológica.</span>
              </li>
            </ul>
          </div>
          <div class="pt-8 mt-6">
            <div class="p-4 bg-surface-container rounded-lg text-outline font-label-sm text-label-sm">
              Resultado frequente: cansaço antes mesmo de a viagem começar.
            </div>
          </div>
        </div>
        <!-- Column 2: A Experiência Carla Coelho -->
        <div class="bg-surface-container-lowest p-8 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/30 rounded-bl-full pointer-events-none"></div>
          <div class="space-y-6 relative">
            <div class="flex items-center gap-3">
              <span class="p-2.5 rounded-lg bg-tropical-lagoon/20 text-tertiary shrink-0">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
              </span>
              <div>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-terracotta font-semibold block">Com Carla Coelho</span>
                <h3 class="font-headline-sm text-headline-sm text-deep-onyx">A Experiência Sem Preocupações</h3>
              </div>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Um processo sereno, fluído e construído ao ritmo dos seus gostos pessoais, onde só precisa de validar e sonhar:
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-tertiary mt-0.5 text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span class="font-body-md text-body-md text-deep-onyx">Acesso privilegiado a vilas particulares, resorts de prestígio e experiências exclusivas.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-tertiary mt-0.5 text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span class="font-body-md text-body-md text-deep-onyx">Logística sincronizada ao detalhe: motoristas pontuais, reservas gastronómicas e acessos prioritários.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-tertiary mt-0.5 text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span class="font-body-md text-body-md text-deep-onyx">Linha direta contínua comigo: acompanhamento discreto e resolução instantânea a qualquer hora.</span>
              </li>
            </ul>
          </div>
          <div class="pt-8 mt-6 relative">
            <div class="p-4 bg-surface-container-low rounded-lg text-primary font-label-sm text-label-sm font-semibold flex items-center justify-between">
              <span>Viagem planeada com precisão artesanal.</span>
              <span class="material-symbols-outlined text-base">spa</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Key Pillars Section -->
    <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span class="font-label-lg text-label-lg text-terracotta uppercase tracking-wider">Metodologia</span>
        <h2 class="font-headline-lg text-headline-lg text-on-surface">Os Três Pilares do Meu Trabalho</h2>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Como cada itinerário é construído para superar expectativas e proporcionar momentos perenes.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <!-- Pillar 1 -->
        <div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group">
          <div class="space-y-5">
            <div class="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <span class="material-symbols-outlined text-3xl">travel_explore</span>
            </div>
            <span class="font-label-sm text-label-sm text-terracotta uppercase tracking-wider block font-semibold">Pilar 01</span>
            <h3 class="font-headline-sm text-headline-sm text-deep-onyx">Pesquisa &amp; Curadoria Sob Medida</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Seleção minuciosa de hotéis, recantos secretos e experiências exclusivas desenhadas estritamente de acordo com o seu perfil, ritmo e expetativas.
            </p>
          </div>
          <div class="pt-6 mt-6">
            <span class="font-label-sm text-label-sm text-primary flex items-center gap-1">
              <span>Personalização absoluta</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>
        <!-- Pillar 2 -->
        <div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group">
          <div class="space-y-5">
            <div class="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <span class="material-symbols-outlined text-3xl">connecting_airports</span>
            </div>
            <span class="font-label-sm text-label-sm text-terracotta uppercase tracking-wider block font-semibold">Pilar 02</span>
            <h3 class="font-headline-sm text-headline-sm text-deep-onyx">Organização &amp; Logística Impecável</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Voos, transfers privativos, horários articulados ao pormenor e reservas antecipadas sem atritos, permitindo que cada transição seja natural e serena.
            </p>
          </div>
          <div class="pt-6 mt-6">
            <span class="font-label-sm text-label-sm text-primary flex items-center gap-1">
              <span>Fluidez operacional</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>
        <!-- Pillar 3 -->
        <div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group">
          <div class="space-y-5">
            <div class="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <span class="material-symbols-outlined text-3xl">support_agent</span>
            </div>
            <span class="font-label-sm text-label-sm text-terracotta uppercase tracking-wider block font-semibold">Pilar 03</span>
            <h3 class="font-headline-sm text-headline-sm text-deep-onyx">Acompanhamento Próximo e Dedicado</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Cuidado personalizado de cada detalhe antes, durante e no regresso. Uma presença atenta para assegurar que nada perturba o seu deleite.
            </p>
          </div>
          <div class="pt-6 mt-6">
            <span class="font-label-sm text-label-sm text-primary flex items-center gap-1">
              <span>Apoio contínuo VIP</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Experience Visual Gallery Cards -->
    <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div class="bg-surface-container-low rounded-2xl p-8 sm:p-12 shadow-sm">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
          <div>
            <span class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Inspiração &amp; Cenários</span>
            <h2 class="font-headline-lg text-headline-lg text-deep-onyx">Momentos que Ficam na Memória</h2>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-md">
            Desde pores do sol em terraços mediterrânicos a santuários tropicais nas falésias — cada sugestão é fruto de critérios exigentes de bem-estar e sofisticação.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Visual Card 1: Sunset Deck Villa -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md group">
            <div class="bg-cover bg-center w-full h-80 relative overflow-hidden transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDWpzgRbRXMyUgxhd0JNaKqVQHoK6safCRYF1yGvA7s8z22g1gnzlbtU9zJskHf3TIWNNBxlewLVL3yknTLUMLnGoHMwqaWX3nb3gaDyfqQ7SDtyjdSTOWyeAqp3PtvLUIr4C7DkvNKiaZ3ER8f5QTxWjQPMoZKS1dqkUFpCvXGbr37TPHlbatd6XK1Xfq_-GW7MKATt6iKsR5mGk8Dr2ExNW9Wzgty0Tl6nzbDjdFs_gzNB7EoYbt')">
              <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/80 via-deep-onyx/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-on-primary">
                <span class="font-label-sm text-label-sm text-secondary-fixed tracking-wider uppercase">Refúgio Costeiro</span>
                <h4 class="font-headline-sm text-headline-sm text-paper-cream">Vilas Privadas &amp; Piscinas Infinitas</h4>
                <p class="font-body-md text-body-md text-on-tertiary-container/90 mt-1 line-clamp-2">
                  Privacidade garantida, horizontes sem fim e serviços de mordomo exclusivos.
                </p>
              </div>
            </div>
            <div class="p-6 flex items-center justify-between text-on-surface">
              <span class="font-label-sm text-label-sm text-outline flex items-center gap-1">
                <span class="material-symbols-outlined text-base text-terracotta">wb_sunny</span>
                Destinos Tropicais de Luxo
              </span>
              <span class="font-label-lg text-label-lg font-semibold text-primary">Curadoria Completa</span>
            </div>
          </div>
          <!-- Visual Card 2: Balcony in the Mediterranean -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md group">
            <div class="bg-cover bg-center w-full h-80 relative overflow-hidden transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBumCf9_OE1XrUy8Oasawe0FQ2i_uy1BxFzcZao1JdWQJFuEsVAsWso7vsW5yIEvmUu7FEkC9WNnV_JqA7gNRYhLZ27NqFP2lD9Qw0hWIHkEShKYRlsURVaEyuBlLSVLjhzQHeEj0eD2U-qSU8guXIKKQgjyFdDSeZu33wj0ALymh9eqkm3jl9Eeb0pN-0fkw8gqLSGcdGgZbHNpriQcowHnAOsK6A8lzctv-rLB0M9AsLEZgXp_cLB')">
              <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/80 via-deep-onyx/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-on-primary">
                <span class="font-label-sm text-label-sm text-secondary-fixed tracking-wider uppercase">Noites Inesquecíveis</span>
                <h4 class="font-headline-sm text-headline-sm text-paper-cream">Terraços Íntimos ao Entardecer</h4>
                <p class="font-body-md text-body-md text-on-tertiary-container/90 mt-1 line-clamp-2">
                  Jantares privados com vista para o mar e passeios de iate reservados à sua medida.
                </p>
              </div>
            </div>
            <div class="p-6 flex items-center justify-between text-on-surface">
              <span class="font-label-sm text-label-sm text-outline flex items-center gap-1">
                <span class="material-symbols-outlined text-base text-terracotta">wine_bar</span>
                Europa &amp; Ilhas Exclusivas
              </span>
              <span class="font-label-lg text-label-lg font-semibold text-primary">Experiências Gastronómicas</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Trust / Value Badges -->
    <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        <div class="bg-surface-container p-6 rounded-xl shadow-sm space-y-2">
          <span class="material-symbols-outlined text-primary text-3xl">handshake</span>
          <p class="font-headline-sm text-headline-sm text-deep-onyx font-bold">1:1</p>
          <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Apoio Individual</p>
        </div>
        <div class="bg-surface-container p-6 rounded-xl shadow-sm space-y-2">
          <span class="material-symbols-outlined text-primary text-3xl">sentiment_very_satisfied</span>
          <p class="font-headline-sm text-headline-sm text-deep-onyx font-bold">100%</p>
          <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tranquilidade</p>
        </div>
        <div class="bg-surface-container p-6 rounded-xl shadow-sm space-y-2">
          <span class="material-symbols-outlined text-primary text-3xl">hotel</span>
          <p class="font-headline-sm text-headline-sm text-deep-onyx font-bold">5 Estrelas</p>
          <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Padrão de Qualidade</p>
        </div>
        <div class="bg-surface-container p-6 rounded-xl shadow-sm space-y-2">
          <span class="material-symbols-outlined text-primary text-3xl">lock</span>
          <p class="font-headline-sm text-headline-sm text-deep-onyx font-bold">Zero</p>
          <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Preocupações</p>
        </div>
      </div>
    </section>

    <!-- High-Touch Call to Action Section -->
    <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-16">
      <div class="relative bg-gradient-to-br from-surface-container to-surface-container-high rounded-2xl p-8 sm:p-16 shadow-lg overflow-hidden text-center">
        <div class="max-w-2xl mx-auto space-y-6 relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-lowest rounded-full text-terracotta font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
            <span class="material-symbols-outlined text-base">calendar_month</span>
            Inicie o Diálogo com a Carla
          </div>
          <h2 class="font-headline-xl text-headline-xl text-deep-onyx tracking-tight">
            Pronto para a sua próxima jornada inesquecível?
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Partilhe comigo os seus sonhos e preferências. Eu trato de desenhar uma proposta transparente, completa e irrepreensível.
          </p>
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-tropical-lagoon text-deep-onyx font-label-lg text-label-lg px-8 py-4 rounded-sm shadow-md transition-all duration-300 hover:brightness-110 active:scale-95" to="/contactos">
              <span class="material-symbols-outlined">flight</span>
              <span>Planear a Minha Viagem Com a Carla</span>
            </router-link>
            <router-link class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-4 rounded-sm shadow-sm transition-all duration-300 hover:bg-surface-variant" to="/servicos">
              <span>Conhecer Todos os Serviços</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </router-link>
          </div>
          <p class="font-label-sm text-label-sm text-outline pt-4">
            Consultoria disponível sob agendamento • Resposta personalizada em menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
