import type { ComponentResolver } from 'unplugin-vue-components'

export function FWriterResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^P[A-Z]/))
        return { name, from: '@p-typewriter/vue' }
    },
  }
}
