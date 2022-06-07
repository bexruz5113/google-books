export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

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
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
};
const actions = {
  getUser({ commit }, { user = {}, token }) {
    commit("SET_USER", user);
    commit("SET_TOKEN", token);
  },
};
