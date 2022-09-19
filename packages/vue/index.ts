import Writer from './src/index.vue'
import { withInstall } from './utils/withInstall'
import install from './install'

export const PWriter = withInstall(Writer)

export default install
