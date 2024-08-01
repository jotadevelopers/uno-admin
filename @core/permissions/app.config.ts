export default defineAppConfig({
  uno: {
    sidebarMenuItems: [
      {
        label: "Security",
        icon: "i-heroicons-lock-closed",
        to: "/security",
        order: 2,
        can: {
          action: "read",
          subject: "permission",
        },
      },
    ],
  },
});
