<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12"
          ><p>
            {{ bookInfo }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params.id);
    this.get_bookInfo(this.$route.params.id);
  },
  computed: {
    ...mapGetters("bookInfo", ["bookInfo"]),
  },
  methods: {
    ...mapActions("bookInfo", ["get_bookInfo"]),
  },
};
</script>

<style></style>
