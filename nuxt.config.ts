// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ["types/*.ts", "store/*.ts", "@core/**/types/*.ts"],
  },
  extends: [
    "./@core/base",
    "./@core/auth",
    "./@core/permissions",
    "./@features/dashboard",
    "./@features/site",
  ],
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth"],
  ui: {
    icons: ["simple-icons"],
  },
});
