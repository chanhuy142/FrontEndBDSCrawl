import { Icon } from "@iconify/react";

export const SIDENAV_ITEMS = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
  },
  {
    title: "CronJobs",
    path: "/cronjobs",
    icon: <Icon icon="lucide:clock-3" width="24" height="24" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
