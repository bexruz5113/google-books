<template>
  <v-app>
    <v-main>
      <!-- Oxirini o'ylagan qahramon bo'la olmaydi -->
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
  width: 8px;
  max-height: 30px;
}

::-webkit-scrollbar-track {
  background: #eee;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(174, 173, 173);
}
</style>
