import axios from "axios";

const state = () => ({
  bookInfo: [],
});

const getters = {
  bookInfo(state) {
    return state.bookInfo;
  },
};

const mutations = {
  GET_BOOKINFO(state, payload) {
    state.bookInfo = payload;
  },
};
const actions = {
  async get_bookInfo({ commit }, payload) {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${payload}?key=AIzaSyB1jhXmGmQTVIjuGz4hOs0edmx9MtN5V2k`
      )
      .then((res) => {
        console.log(res.data);
        commit("GET_BOOKINFO", res.data);
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
