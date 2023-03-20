const routes = [
  {
    path: "/",
    component: () => import("layouts/MIAMainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/MIAHomePage.vue"),
      },
      {
        path: "catalog",
        name: "catalog",
        component: () => import("pages/MIAHomePage.vue"),
      },
      {
        path: "about-us",
        name: "about-us",
        component: () => import("pages/MIAHomePage.vue"),
      },
      {
        path: "about-shipping",
        name: "about-shipping",
        component: () => import("pages/MIAHomePage.vue"),
      },
      {
        path: "shops",
        name: "shops",
        component: () => import("pages/MIAHomePage.vue"),
      },
      {
        path: "contacts",
        name: "contacts",
        component: () => import("pages/MIAHomePage.vue"),
      },
      {
        path: "additem",
        name: "AddItem",
        component: () => import("pages/MIAAddItem.vue"),
      },
      {
        path: "favorites",
        name: "favorites",
        component: () => import("pages/MIAFavorites.vue"),
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("pages/MIACart.vue"),
      },
      {
        path: "product/:id",
        name: "Product",
        component: () => import("pages/MIAProduct.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/MIAErrorNotFound.vue"),
  },
];

export default routes;
