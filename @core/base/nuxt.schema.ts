export default defineNuxtSchema({
  appConfig: {
    /**
     * Uno Admin theme configuration.
     */
    uno: {
      /**
       * Website title, used as header default title and meta title.
       */
      title: "Uno Admin",
      /**
       * Website description, used for meta description.
       */
      description:
        "Free modular admin template, based on NuxtJs and Nuxt UI, carefully crafted and ready for production ",
      /**
       * Header logo
       */
      logo: {
        /**
         * Path of the logo
         */
        path: "/logo.svg",
        /**
         * Path of the logo in dark mode.
         *
         * Leave it empty if you want to use the same logo.
         *
         */
        pathDark: "/logo-dark.svg",
        /**
         * Alt description for the image.
         */
        alt: "Uno Admin logo",
      },
      colorPicker: true,
      toggleDarkMode: true,
      sidebarMenuItems: <SidebarMenuItems[]>[],
      toolbarActions: <unknown[]>[],
    },
  },
});
