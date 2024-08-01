import { createMongoAbility } from "@casl/ability";
import { abilitiesPlugin } from "@casl/vue";

const ability = createMongoAbility([]);

export default defineNuxtPlugin((_nuxt) => {
  const appConfig = useAppConfig();
  // @ts-ignore
  _nuxt.vueApp.use(abilitiesPlugin, ability);
});
