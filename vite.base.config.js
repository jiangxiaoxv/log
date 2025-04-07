import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import atImport from 'postcss-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default (command, mode) => {
  const envDir = path.resolve(__dirname, './env')
  const env = loadEnv(mode, envDir, '')
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      //element+自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createHtmlPlugin({
        minify: true,
        template: '/index.html',
        inject: {
          data: {
            title: env.VITE_TITLE
          }
        }
      })
    ],
    envDir: 'env',
    //静态资源服务文件夹
    publicDir: 'public',
    base: process.env.NODE_ENV == 'development' ? './' : './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      // 导入时想要省略的扩展名列表
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },

    // 打包配置 npm run build
    build: {
      //指定输出路径
      outDir: 'dist',
      //生成静态资源的存放路径
      assetsDir: 'assets',
      //小于此阈值的导入或引用资源将内联为base64编码，以避免额外的http请求。设置为0可以完全禁用此项
      assetsInlineLimit: 4096,
      //启用/禁用CSS代码拆分
      cssCodeSplit: true,
      //构建后是否生成source map文件
      sourcemap: false,
      //自定义底层的Rollup打包配置
      rollupOptions: {
        //可以配置多个，表示多入口
        input: {
          index: path.resolve(__dirname, 'index.html')
          // project:resolve(__dirname,"project.html")
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/name-[hash].[ext]'
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 让每个插件都打包成独立的文件
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      },
      //默认情况下，若outDir在root目录下，则Vite 会在构建时清空该目录。
      emptyOutDir: true,
      //chunk 大小警告的限制
      chunkSizeWarningLimit: 500
    },
    css: {
      postcss: {
        plugins: [
          atImport(),
          tailwindcss,
          autoprefixer({
            // 指定目标浏览器
            overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11', '>0.2%']
          })
        ]
      }
    }
  })
}
