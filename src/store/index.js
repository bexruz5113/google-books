import Vue from "vue";
import Vuex from "vuex";
import books from "./module/books";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { books },
  strict: true,
});
