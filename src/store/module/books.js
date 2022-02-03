import axios from "axios";

const state = () => ({
  books: [],
});
const getters = {
  books(state) {
    return state.books;
  },
};
const mutations = {
  GET_BOOKS(state, payload) {
    state.books = payload;
  },
};
const actions = {
  async getbooks({ commit }) {
    await axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&projection=full&maxResults=40&key=AIzaSyB1jhXmGmQTVIjuGz4hOs0edmx9MtN5V2k"
      )
      .then((res) => {
        console.log(res);
        commit("GET_BOOKS", res.data.items);
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
