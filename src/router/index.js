import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import book from "../views/book.vue";
import error from "../components/error.vue";
import collectionBook from "../views/collectionBook.vue";
import search from "../views/search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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

export default router;
