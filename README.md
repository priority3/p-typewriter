<p align="center">
<img src="./public/logo.svg" style="width:100px;" />
<h1 align="center">p-typewriter</h1>
<p align="center">this is a typewriter component</p>
</p>

## Feature 

* 🦾 Full TypeScript support.
* 🔥 React support.🚧 & Vue support. 🚧 (WIP...)


## Install

```bash
ni p-typewriter-vue
```

## Usage

### css
```ts
import 'p-typewriter-vue/dist/style.css'
```


```ts
// if you want install globally , do this in main.ts
import PWriter from 'p-typewriter-vue'
app.use(PWriter)
```

**or**
```ts
// if you want install locally , do this in your component
import { PWriter } from 'p-typewriter-vue'
// now you can use it in your template
```

**or**
```ts 
// you can auto import it , you do this in vite.config.ts
import { PWriterResolver } from 'p-typewriter-vue'
export default defineConfig({
  plugins: [
    //* *
    Components({
      resolvers: [PWriterResolver()/** , other... */],
      dts: 'src/components.d.ts',
    }),
  ],

})
```

## TODO 
- [ ] docs
- [ ] test
- [ ] pref typewriter
- [ ] react
