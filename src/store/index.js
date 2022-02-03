import Vue from "vue";
import Vuex from "vuex";
import books from "./module/books";
import bookInfo from "./module/bookInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { books, bookInfo },
  strict: true,
});
