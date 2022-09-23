<script setup lang="ts">
import type { Ref } from 'vue'
import { writerProps } from './props'
const props = defineProps(writerProps)
const el = ref<HTMLElement>()

// @ts-expect-error defined in tsconfig ???
defineOptions({
  name: 'PWriter',
  inheritAttrs: false,
})
const text = ref<string | undefined>('')
const textLength = computed(() => text.value?.length ?? 0)

const curInd = ref(0)
let timer
function startWriter() {
  timer = setInterval(() => {
    if (text.value![curInd.value] === ' ')
      curInd.value += 2
    else
      curInd.value++
    el.value!.children[0].innerHTML = text.value?.substring(0, curInd.value) ?? ''
  }, 200)
}

onMounted(() => {
  startWriter()
  text.value = el.value?.children[0].innerHTML
})
onUnmounted(() => {
  clearInterval(timer)
})
watch(curInd, () => {
  curInd.value > textLength.value && clearInterval(timer)
})
</script>

<template>
  <div
    ref="el" text="2em #fff" bg-dark p-1em w-80 flex justify-center items-center
    class="typewriter-container"
    :class="curInd < textLength && 'isActive'"
  >
    <slot />
  </div>
</template>

<style scoped>
body{
  font-family: 'sans-serif';
}
.isActive.typewriter-container::after{
  content: "|";
  animation: blink .5s infinite;
  animation-timing-function: step-end;
}
@keyframes blink {
  0%,
  75%,
  100% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
}
</style>
