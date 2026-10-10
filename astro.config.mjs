import { defineConfig } from 'astro/config'; export default defineConfig({output:'static',base:process.env.PAGES_BASE_PATH || '/'});
