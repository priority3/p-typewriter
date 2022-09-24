<script setup lang="ts">
import { ref } from 'vue'

const isStarter = ref(true)
</script>

<template>
  <div fcc w-full>
    <div flex>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
      </a>
    </div>
    <PWriter v-model:isStarter="isStarter" :delay="3000" :infinity="false" reverse>
      <span text="#2ecc71">this is priority</span>
    </PWriter>

    <button
      btn @click="isStarter = true"
    >
      restart
    </button>
    <span text-xs text="#ccc" mt-3>
      当 <span text-base text="#81ecec">停止</span> 时，点击按钮重新开始！！！
    </span>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
