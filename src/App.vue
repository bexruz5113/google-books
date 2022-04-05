<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #eee;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  height: 80px;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(174, 173, 173);
}
</style>
