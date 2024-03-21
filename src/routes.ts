import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./layout/HomeLayout.tsx")),
  },
  {
    path: "/create-repo",
    component: lazy(() => import("./pages/CreateRepo.tsx")),
  }
];
