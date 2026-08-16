import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const pages = [
  'index.html',
  'allocations.html',
  'committees.html',
  'delegate-training.html',
  'delegation-guidelines.html',
  'networking-hour.html',
  'orphanage-initiative.html',
  'qr-lookup.html',
  'resources.html',
  'secretariat.html',
  'social-night.html',
]

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page, resolve(import.meta.dirname, page)])),
    },
  },
})
