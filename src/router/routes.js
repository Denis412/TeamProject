const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "catalog",
        name: "catalog",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "about-us",
        name: "about-us",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "about-shipping",
        name: "about-shipping",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "shops",
        name: "shops",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "contacts",
        name: "contacts",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "additem",
        name: "AddItem",
        component: () => import("pages/AddItem.vue"),
      },
      {
        path: "favorites",
        name: "favorites",
        component: () => import("pages/Favorites.vue"),
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
