<template>
  <div>
    <v-form
      class="d-flex align-center justify-space-around"
      ref="form"
      @submit.prevent="search()"
    >
      <v-text-field
        v-model="BookName"
        label="Book name ..."
        required
        class="mx-2"
      ></v-text-field>

      <v-btn large class="mx-2" color="primary" type="submit">
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
