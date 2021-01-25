<template>
  <div class="container">
    <h1>Pikichan Todo</h1>
    <div class="view" v-for="elem in items" :key="elem">
      <p>{{ elem }}</p>
    </div>
    <input type="text" v-model="tmp" />
    <button @click="addTodo">追加</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      tmp: null,
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.tmp)
      this.tmp = null
    },
  },
}
</script>

<style>
</style>
