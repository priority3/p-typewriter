<script setup lang="ts">
import { writerProps } from './props'
const props = defineProps(writerProps)
</script>

<template>
  <div>
    <slot />
  </div>
</template>
