import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'

function swCacheVersionPlugin(): Plugin {
  return {
    name: 'sw-cache-version',
    writeBundle() {
      const swPath = resolve(__dirname, 'dist/sw.js')
      try {
        const content = readFileSync(swPath, 'utf-8')
        const version = `sokesnirk-v${Date.now()}`
        const updated = content.replace(
          /const CACHE_NAME = ['"]sokesnirk-v\d+['"]/,
          `const CACHE_NAME = '${version}'`
        )
        writeFileSync(swPath, updated)
        console.log(`SW cache version updated to: ${version}`)
      } catch {
        // SW file not found in dist, skip
      }
    }
  }
}

function cspPlugin(): Plugin {
  const cspContent = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; connect-src 'self'; font-src 'self' https://fonts.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';"

  return {
    name: 'csp-plugin',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        // Only add CSP in production build
        if (ctx.bundle) {
          return html.replace(
            '<meta charset="UTF-8" />',
            `<meta charset="UTF-8" />\n    <meta http-equiv="Content-Security-Policy" content="${cspContent}" />\n    <meta http-equiv="X-Content-Type-Options" content="nosniff" />\n    <meta name="referrer" content="strict-origin-when-cross-origin" />`
          )
        }
        return html
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), swCacheVersionPlugin(), cspPlugin()],
  base: '/sokesnirk/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'ES2022',
    sourcemap: true,
  },
})
