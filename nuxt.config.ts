// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ["types/*.ts", "store/*.ts", "types/**/*.ts"],
  },
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth"],
  ui: {
    icons: ["simple-icons"],
  },
  runtimeConfig: {
    secret: "12345",
  },
});
