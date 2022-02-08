import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import book from "../views/book.vue";
import error from "../components/error.vue";
import search from "../views/search.vue";
import collectionBook from "../views/collectionBook.vue";

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
    path: "/title/:title",
    name: "title-collection",
    component: collectionBook,
  },
  {
    path: "/search",
    name: "search",
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
