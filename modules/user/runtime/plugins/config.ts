import UserMenu from "../components/UserMenu.vue";
export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();
  appConfig.toolbarActions.push(UserMenu);
});
