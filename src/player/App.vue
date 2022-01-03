<template>
  <div>Player: {{ count }}</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({ count: "getCount" }),
  },
  mounted() {
    this.add();
  },
  methods: {
    ...mapMutations(["add"]),
  },
};
</script>
