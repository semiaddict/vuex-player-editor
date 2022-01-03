<template>
  <div class="editor">
    Editor: {{ count }}
    <div ref="player"></div>
  </div>
</template>

<script>
export default {
  inject: ["playerStore"],
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
  computed: {
    count() {
      return this.playerStore.getters["getCount"];
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.player.mount(this.$refs.player);
    });
  },
};
</script>
