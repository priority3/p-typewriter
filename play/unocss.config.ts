import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({ preflight: false }),
    presetAttributify(),
    presetIcons({
      scale: 1.1,
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    fcc: 'flex flex-col justify-center items-center',
    btn: `cursor-pointer h-10 w-30 fcc mt-10 rounded-md text-[#3f3f3f] transition-all duration-300
     hover:shadow-xl border !focus:outline-none`,
  },
})
