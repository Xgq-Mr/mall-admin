import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ mode })=> {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    server: {
      port: 8888,
      host: "localhost",
      open: true,
      base:"./",
      proxy: {
        [env.VITE_APP_BASE_URL]: {
          target: "http://qnadmin.9yuecloud.com/dev-api",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '')
          rewrite:(path)=> path.replace(new RegExp('^' + env.VITE_APP_BASE_URL), '')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
