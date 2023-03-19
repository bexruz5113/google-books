import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import book from "../views/book.vue";
import error from "../components/error.vue";
import collectionBook from "../views/collectionBook.vue";
import enter from "../views/enter.vue";
import map from "../components/map.vue";
import direction from "../components/direction.vue";
import leafletMap from "../components/leafletMap.vue";
import store from "../views/store.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/book/:id",
    name: "book-info",
    component: book,
  },
  {
    path: "/search",
    name: "search",
    component: collectionBook,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: enter,
  },
  {
    path: "/map",
    name: "map",
    component: map,
  },
  {
    path: "/store-map",
    name: "store map",
    component: leafletMap,
  },
  {
    path: "/stores",
    name: "store",
    component: store,
  },
  {
    path: "/direction",
    name: "direction",
    component: direction,
  },
  {
    path: "*",
    name: "Error",
    component: error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isLoggedIn = localStorage.getItem("token");
    // console.log("isLoggedIn=>" + isLoggedIn);
    if (isLoggedIn) {
      next();
      return;
    } else {
      next("/sign-in");
    }
  } else {
    next();
  }
});

export default router;
