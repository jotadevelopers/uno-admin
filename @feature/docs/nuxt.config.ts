export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image"],
  content: {
    highlight: {
      langs: ["postcss", "mdc", "ts", "bash", "js"],
    },
    sources: {
      docs: {
        prefix: "/docs",
        base: "./@feature/docs/content", // referenced from root
        driver: "fs",
      },
    },
  },
});