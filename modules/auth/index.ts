import {
  addServerHandler,
  createResolver,
  defineNuxtModule,
  extendPages,
  installModule,
} from "nuxt/kit";

export default defineNuxtModule({
  meta: { name: "uno-auth" },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    await installModule("@sidebase/nuxt-auth", {
      provider: { type: "local" },
      globalAppMiddleware: true,
    });
    addServerHandler({
      method: "post",
      route: "/api/auth/login",
      handler: resolve("./runtime/server/api/login.post.ts"),
    });
    addServerHandler({
      method: "post",
      route: "/api/auth/logout",
      handler: resolve("./runtime/server/api/logout.post.ts"),
    });
    addServerHandler({
      method: "get",
      route: "/api/auth/session",
      handler: resolve("./runtime/server/api/session.get.ts"),
    });
    extendPages((_pages) => {
      _pages.push({
        name: "login",
        path: "/login",
        file: resolve("./runtime/pages/login.vue"),
      });
      _pages.push({
        name: "register",
        path: "/register",
        file: resolve("./runtime/pages/register.vue"),
      });
      _pages.push({
        name: "forgot-password",
        path: "/forgot-password",
        file: resolve("./runtime/pages/forgot-password.vue"),
      });
    });
  },
});
