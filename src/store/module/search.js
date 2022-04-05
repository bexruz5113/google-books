import axios from "axios";

const state = () => ({
  searchBook: [],
});

const getters = {
  searchBook(state) {
    return state.searchBook;
  },
};

const mutations = {
  GET_SEARCH_BOOK(state, payload) {
    state.searchBook = payload;
  },
};
const actions = {
  async getSearchBook({ commit }, payload) {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${payload}&filter=free-ebooks&projection=full&key=AIzaSyB1jhXmGmQTVIjuGz4hOs0edmx9MtN5V2k`
      )
      .then((res) => {
        console.log("ress" + res);
        commit("GET_SEARCH_BOOK", res.data.items);
        return Promise.resolve();
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
