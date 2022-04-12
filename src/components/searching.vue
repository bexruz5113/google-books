<template>
  <div>
    <v-form
      class="d-flex align-start justify-center"
      @submit.prevent="search()"
    >
      <v-text-field
        v-model="BookName"
        label="Book name ..."
        required
        class="mr-2"
      ></v-text-field>

      <v-btn medium class="ml-2 mt-3" color="primary" type="submit">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BookName: "",
    };
  },
  methods: {
    search() {
      this.$router.push(`/search?q=${this.BookName}`);
    },
  },

  mounted() {
    console.log("searching=>" + this.$route.query.q);
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
