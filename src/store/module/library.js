import axios from "axios";

const state = () => ({
  library: [],
});

const getters = {
  library(state) {
    return state.library;
  },
};

const mutations = {
  GET_LIBRARY(state, payload) {
    state.library = payload;
  },
};

const actions = {
  getMyLibrary({ commit }) {
    axios
      .get(
        "https://www.googleapis.com/books/v1/mylibrary/bookshelves?key=703055326239-e4gvf17k4mk4l8eigkv0r7140ngeeq54.apps.googleusercontent.com"
      )
      .then((res) => {
        console.log(res.data);
        commit("GET_LIBRARY", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
