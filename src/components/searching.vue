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
    console.log(this.$route.query.q);
  },
};
</script>

<style>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
}
.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
