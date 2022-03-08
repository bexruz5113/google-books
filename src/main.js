import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCiVFsV9GeelpGuXJHJxXcxeUAIfoFQYts",
    libraries: "places",
  },
  installComponents: true,
});

import GAuth from "vue-google-oauth2";
const gauthOption = {
  clientId:
    "703055326239-e4gvf17k4mk4l8eigkv0r7140ngeeq54.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "consent",
  fetch_basic_profile: true,
};
Vue.use(GAuth, gauthOption);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
