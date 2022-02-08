import Vue from "vue";
import Vuex from "vuex";
import books from "./module/books";
import bookInfo from "./module/bookInfo";
import searchBook from "./module/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { books, bookInfo, searchBook },
  strict: true,
});
