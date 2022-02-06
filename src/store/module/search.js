import axios from "axios";

const state = () => ({
  search: [],
});

const getters = {
  search(state) {
    return state.search;
  },
};

const mutations = {
  GET_SEARCH(state, payload) {
    state.search = payload;
  },
};
const actions = {
  async getsearch({ commit }, payload) {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${payload}&filter=free-ebooks&projection=full&key=AIzaSyB1jhXmGmQTVIjuGz4hOs0edmx9MtN5V2k`
      )
      .then((res) => {
        commit("GET_SEARCH", res.data.items);
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
