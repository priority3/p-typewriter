<h1 align="center">p-typewriter</h1>
<h2 align="center">🤐(WIP)</h2>

## Feature 

* 🦾 Full TypeScript support.
* 🔥 React support.🚧 & Vue support. 🚧 (WIP...)


## Install

```bash
ni p-typewriter-vue
```

## Usage

```ts
// if you want install globally , do this in main.ts
import PWriter from 'p-typewriter-vue'
app.use(PWriter)
```

or 
```ts
// if you want install locally , do this in your component
import { PWriter } from 'p-typewriter-vue'
// now you can use it in your template
```

or
```ts 
// you can auto import it , you do this in vite.config.ts
import { FWriterResolver } from 'p-typewriter-vue'
export default defineConfig({
  plugins: [
    //* *
    Components({
      resolvers: [FWriterResolver()/** , other... */],
      dts: 'src/components.d.ts',
    }),
  ],

})
```

