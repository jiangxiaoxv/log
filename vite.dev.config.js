import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

export default defineConfig({
  //开发配置
  server: {
    port: 5173, //端口号
    strictPort: true, //是否是严格的端口号，如果true，端口号被占用的情况下，vite会退出
    host: '0.0.0.0', //
    cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
    https: false, //是否支持https 如果配置成true 会打开https://localhost:8090/xxx;
    open: true, //是否自动打开浏览器
    hmr: true,
    // 反向代理 跨域配置
    proxy: {
      '/api': {
        // target: 'http://10.10.10.23:8080',
        target: 'http://10.10.10.23:32001',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => {
          console.log('>>>>>>>>path', path)
          return path.replace(/^\/api/, 's')
        }
      }
    }
  }
  // 预览设置
  // preview: {
  //   port: 8090, //端口
  //   host: 'localhost', //预览地址
  //   open: true, //是否打开浏览器
  // },
})
