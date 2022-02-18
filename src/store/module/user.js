const state = () => ({
  user: localStorage.getItem("user") || {},

  token: localStorage.getItem("token") || "",
});

const getters = {
  user(state) {
    return state.user;
  },
};

const mutations = {
  GET_USER(state, payload) {
    state.user = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
};
const actions = {
  getUser({ commit }) {
    const userInfo = localStorage.getItem("user") || {};
    commit("GET_USER", JSON.parse(userInfo));
    return Promise.resolve();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
