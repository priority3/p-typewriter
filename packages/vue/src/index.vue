<script setup lang="ts">
import type { Ref } from 'vue'
import { writerProps } from './props'
const props = defineProps(writerProps)
defineOptions({
  name: 'PWriter',
  inheritAttrs: false,
})
const slots = useSlots()
const text: Ref<String | undefined> = computed(() => {
  if (slots.default)
    return slots.default()[0].children as String
})
const textLength = computed(() => text.value?.length ?? 0)
const curInd = ref(1)
let timer
function startWriter() {
  timer = setInterval(() => {
    if (text.value![curInd.value] === ' ')
      curInd.value += 2
    else
      curInd.value++
  }, 200)
}
onMounted(() => {
  startWriter()
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
    text="2em #fff" bg-dark p-1em class="typewriter-container"
    :class="curInd < textLength && 'isActive'" w-70
  >
    {{ text?.substring(0, curInd) }}
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
