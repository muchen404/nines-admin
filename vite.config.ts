import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

function pathResolve (dir: string) {
  return join(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    css: {
      modules: {
        // localsConvention: 'dashes'
      }
    },
    resolve: {
      alias: {
        '@': pathResolve('src')
      }
    },
    server: {
      proxy: {
        '/api': 'http://localhost:5789'
      }
    }
  }
})
