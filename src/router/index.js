import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import book from "../views/book.vue";
import error from "../components/error.vue";
import collectionBook from "../views/collectionBook.vue";
import search from "../views/search.vue";
import library from "../views/library.vue";
import enter from "../views/enter.vue";
import user from "../store/module/user";

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
    path: "/filter",
    name: "filter",
    component: search,
  },
  {
    path: "/my-library",
    name: "my-library",
    component: library,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: enter,
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
    console.log("user" + user.getters.isLoggedIn);
    if (user.getters.isLoggedIn) {
      next();
      return;
    } else {
      router.replace("/sign-in");
    }
  } else {
    next();
  }
});

export default router;
