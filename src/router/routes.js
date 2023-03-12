const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("pages/HomePage.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthenticationLayout.vue"),
    children: [
      {
        path: "login",
        name: "signIn",
        component: () => import("pages/SignInPage.vue"),
      },
      {
        path: "registration",
        name: "signUp",
        component: () => import("pages/SignUpPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
