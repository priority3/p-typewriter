import type { ExtractPropTypes, PropType } from 'vue'

export const writerProps = {
  duration: {
    type: Number as PropType<number>,
    default: 3000,
  },
}

export type PwriterProps = ExtractPropTypes<typeof writerProps>
