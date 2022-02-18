const state = () => ({
  user: localStorage.getItem("user") || {},

  token: localStorage.getItem("token") || "",
});

const getters = {
  user(state) {
    return state.user;
  },
  isLoggedIn: (state) => !!state.token,
};

const mutations = {
  GET_USER(state, payload) {
    console.log("wewewe" + payload);
    state.user = payload;
  },
  SET_TOKEN(state, payload) {
    console.log("token" + payload);
    state.token = payload;
  },
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
