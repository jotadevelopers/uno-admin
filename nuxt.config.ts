// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ["types/*.ts", "store/*.ts", "@core/**/types/*.ts"],
  },
  extends: [
    "./@core/base",
    "./@core/auth",
    "./@feature/dashboard",
    "./@feature/site",
    "./@feature/docs",
  ],
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth"],
  ui: {
    icons: ["simple-icons"],
  },
});
