export default defineNuxtConfig({
  ui: {
    icons: ["simple-icons"],
  },
  runtimeConfig: {
    appSecret: process.env.APP_SECRET,
  },
});
