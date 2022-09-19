<script setup lang="ts">
import { writerProps } from './props'
const props = defineProps(writerProps)
defineOptions({
  name: 'PWriter',
  inheritAttrs: false,
})
</script>

<template>
  <div>
    this is my type type type 🐱‍🚀
    <slot />
  </div>
</template>

<style>
body{
  font-family: 'sans-serif';
}
</style>
