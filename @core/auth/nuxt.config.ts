// TODO: check how to install dependencies automatically
export default defineNuxtConfig({
  auth: {
    provider: { type: "local" },
    globalAppMiddleware: true,
  },
});
