import type { ExtractPropTypes, PropType } from 'vue'

export const writerProps = {
  duration: {
    type: Number as PropType<number>,
    default: 3000,
  },
  infinity: {
    type: Boolean as PropType<Boolean>,
    default: true,
  },
  isStarter: {
    type: Boolean as PropType<Boolean>,
    default: true,
  },
  reverse: {
    type: Boolean as PropType<Boolean>,
    default: false,
  },
}

export const writerEmits = {
  // reset: () => true,
  'update:isStarter': (isStarter: Boolean) => typeof isStarter === 'boolean',
}

export type PwriterProps = ExtractPropTypes<typeof writerProps>
