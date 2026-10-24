<template>
  <div
    ref="root"
    class="scale-in"
    :class="{ 'scale-in--visible': isVisible, 'scale-in--fade': fade }"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  fade: {
    type: Boolean,
    default: false,
  },
  delay: {
    type: Number,
    default: 0,
  },
})

const root = ref(null)
const isVisible = ref(false)
let observer

onMounted(() => {
  if (!root.value || typeof IntersectionObserver === 'undefined') {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return

    isVisible.value = true
    observer.disconnect()
    observer = undefined
  })

  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.scale-in {
  transform: scale(0.7);
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.scale-in--visible {
  transform: scale(1);
}

.scale-in--fade {
  opacity: 0;
  transition:
    transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 600ms ease;
}

.scale-in--fade.scale-in--visible {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .scale-in,
  .scale-in--fade {
    transform: none;
    opacity: 1;
    transition: none;
  }
}
</style>
