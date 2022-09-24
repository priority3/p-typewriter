<script setup lang="ts">
import { writerEmits, writerProps } from './props'
const props = defineProps(writerProps)
const emits = defineEmits(writerEmits)
const el = ref<HTMLElement>()

defineOptions({
  name: 'PWriter',
  inheritAttrs: false,
})

const text = ref<string | undefined>('')
const textLength = computed(() => text.value?.length ?? 0)

const curInd = ref(0)
let step = 1
let timer
function startWriter() {
  timer = setInterval(() => {
    doCurIndNext()
    el.value!.children[0].innerHTML = text.value?.substring(0, curInd.value) ?? ' '
  }, 200)
}

function doCurIndNext() {
  if (text.value![curInd.value] === ' ') {
    // 跳过空格空格
    const nextStep = (step + (step > 0 ? 1 : 0))
    curInd.value += nextStep
  }
  else { curInd.value += step }
}

function clearAndResetTimer() {
  if (timer) {
    clearInterval(timer)
    curInd.value = 1
    step = 1
    emits('update:isStarter', false)
  }
}

onMounted(() => {
  text.value = el.value?.children[0].innerHTML
  el.value!.children[0].innerHTML = ' '
  props.isStarter && startWriter()
})
onUnmounted(() => {
  clearAndResetTimer()
})
watch(curInd, () => {
  if (curInd.value >= textLength.value) {
    if (props.reverse)
      step = -1

    else if (props.infinity)
      curInd.value = 0

    return
  }
  if (curInd.value < 0) {
    if (!props.infinity) clearAndResetTimer()
    else if (props.reverse)
      step = 1

    return
  }
  if (curInd.value >= textLength.value + 1 || curInd.value < 0)
    clearAndResetTimer()
})
watch(() => props.isStarter, () => {
  if (!props.isStarter) clearAndResetTimer()
  else
    startWriter()
})
</script>

<template>
  <div
    ref="el" text="2em #fff" bg-dark p-1em w-80 flex justify-center items-center
    class="typewriter-container" h-20
    :class="curInd > 0 && 'isActive'"
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
