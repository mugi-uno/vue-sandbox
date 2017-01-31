<template>
  <div>
    <p>{{num}}-{{text}}</p>
    <input v-model="num" />
    <input v-model="text" />
  </div>
</template>

<script>
export default {
  data: () => ({
    greeting: "yeah"
  }),

  computed: {
    num: {
      get() {
        return this.$store.state.num;
      },
      set(num) {
        this.$store.commit("addNum", {num})
      }
    },
    text: {
      get() {
        return this.$store.state.text;
      },
      set(text) {
        this.$store.commit("changeText", {text})
      }
    }
  }
}
</script>

<style>
</style>