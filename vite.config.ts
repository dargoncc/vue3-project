import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          // 'naive-ui': [
          //   'useDialog',
          //   'useMessage',
          //   'useNotification',
          //   'useLoadingBar'
          // ]
        }
      ]
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  // 路径别名
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      },
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/'
      }
    ]
  }
})
