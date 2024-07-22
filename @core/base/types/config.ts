export type SidebarMenuItems = {
  label: string;
  icon?: string;
  img?: string;
  to: string;
  order: number;
  can?: {
    subject: string;
    action: string;
  };
};
