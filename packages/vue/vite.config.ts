import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@p-typewriter/vue',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(), // if needed
      },
    }),
    UnoCSS(),
    AutoImport({
      imports: ['vue'],
      dts: 'auto-imports.d.ts',
    }),
  ],
})
function VueJsx(): any {
  throw new Error('Function not implemented.')
}

