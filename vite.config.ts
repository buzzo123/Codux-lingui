import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

import { lingui } from "@lingui/vite-plugin";

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
    babel: {
      plugins: ["macros"]
    }
  }),
    lingui(),
    svgr(),],
})
