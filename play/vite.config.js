import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { PWriterResolver } from 'p-typewriter-vue'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    Vue(),
    Components({
      resolvers: [PWriterResolver()],
      dts: 'src/components.d.ts',
    }),
  ],

})
