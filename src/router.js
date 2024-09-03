import { createRouter, createWebHistory } from "vue-router";

const views = import.meta.glob('./views/*.vue');

const makeRoutes = () => {
  return Object.keys(views).map((path) => {
    const route = path.match(/\.\/views\/(.*)\.vue$/)[1]; 
    const fixRoute = route.replace('View', '');
    return {
      path: fixRoute === 'Home' ? '/' : `/${fixRoute.toLowerCase()}`,
      route: fixRoute.toLowerCase(),
      component: views[path],
    };
  });
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: makeRoutes(),
});

export default router;