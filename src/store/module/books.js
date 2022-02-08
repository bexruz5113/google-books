import axios from "axios";

const state = () => ({
  books: [],
  totalItems: 0,
});
const getters = {
  books(state) {
    return state.books;
  },
  totalItems(state) {
    return state.totalItems;
  },
};
const mutations = {
  GET_BOOKS(state, payload) {
    state.books = payload;
  },
  GET_TOTALITEMS(state, payload) {
    state.totalItems = payload;
  },
};

// let searchTerm = "a";

const actions = {
  async getbooks({ commit, state }, payload) {
    // console.log("dsd =>" + payload);
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&projection=full&startIndex=${
          (payload - 1) * 10
        }&key=AIzaSyB1jhXmGmQTVIjuGz4hOs0edmx9MtN5V2k`
      )
      .then((res) => {
        console.log(res);
        if (!state.totalItems) {
          commit("GET_TOTALITEMS", res.data.totalItems - 200);
        }
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
