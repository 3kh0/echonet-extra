import { createRouter, createWebHistory } from "vue-router";

const views = import.meta.glob("./views/*.vue");

const makeRoutes = () => {
  const routes = Object.keys(views).map((path) => {
    const route = path.match(/\.\/views\/(.*)\.vue$/)[1];
    const fixRoute = route.replace("View", "");
    return {
      path: fixRoute === "Home" ? "/" : `/${fixRoute.toLowerCase()}`,
      name: fixRoute.toLowerCase(),
      component: views[path]
    };
  });

  // Add catch-all route
  routes.push({
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: views["./views/NotFoundView.vue"]
  });

  return routes;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: makeRoutes()
});

export default router;
