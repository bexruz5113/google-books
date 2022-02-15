import Vue from "vue";
import Vuex from "vuex";
import books from "./module/books";
import bookInfo from "./module/bookInfo";
import searchBook from "./module/search";
import library from "./module/library";
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { books, bookInfo, searchBook, library, user },
  strict: true,
});
