export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();

  appConfig.sidebarMenuItems.push({
    label: "Dashboard",
    icon: "i-heroicons-cube-transparent-solid",
    to: "/dashboard",
  });
});
