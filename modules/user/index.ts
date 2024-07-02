import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  extendPages,
} from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "uno-user",
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve("./runtime/plugins/config.ts"));
    extendPages((_pages) => {
      _pages.push({
        name: "account",
        path: "/account",
        file: resolve("./runtime/pages/account/index.vue"),
        children: [
          {
            name: "account-general",
            path: "",
            file: resolve("./runtime/pages/account/general.vue"),
          },
          {
            name: "account-security",
            path: "security",
            file: resolve("./runtime/pages/account/security.vue"),
          },
          {
            name: "account-notifications",
            path: "notifications",
            file: resolve("./runtime/pages/account/notifications.vue"),
          },
        ],
      });
    });
  },
});
