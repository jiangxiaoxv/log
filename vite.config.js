import { defineConfig } from 'vite'

import vitePrdConfig from './vite.prd.config'
import viteDevConfig from './vite.dev.config'
import viteBaseConfig from './vite.base.config'

// 策略模式
const envResolver = {
  build: (command, mode) => {
    // console.log('生产');
    return Object.assign({}, viteBaseConfig(command, mode), vitePrdConfig)
  },
  serve: (command, mode) => {
    // console.log('开发');
    return Object.assign({}, viteBaseConfig(command, mode), viteDevConfig) // 新配置里可能会配置envDir
  }
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // console.log(mode, command)

  return envResolver[command](command, mode)
})
