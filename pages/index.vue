<template>
  <div class="container">
    <h1>Pikichan Todo</h1>
    <div class="view" v-for="elem in items" :key="elem">
      <p class="todoView">{{ elem.label }}</p>
      <button class="delBt" v-on:click="deleteItem(elem)">削除</button>
    </div>
    <footer>
      <input
        class="todoAddEr"
        type="text"
        v-model="tmp"
        @keyup.enter="addTodo"
      />
      <button class="todoAddBt" @click="addTodo">Todo</button>
    </footer>
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
    deleteItem: function (elem) {
      // todos配列の todo から key を取得
      var index = this.items.indexOf(elem)
      // key番目から１つ削除
      this.items.splice(index, 1)
    },
  },
}
</script>

<style>
.container {
  text-align: center;
  position: relative;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 120px; /*←footerの高さ*/
  box-sizing: border-box;
}

.view {
  width: 100%;
  margin: 0 auto;
  padding-left: 0;
}

.todoView {
  margin: 2vw auto 0 auto;
}

.delBt {
  text-align: left;
  margin: 0.5vw auto;
}

footer {
  width: 100%;
  background-color: #8f8f8f;
  color: #fff;
  text-align: center;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
  padding: 1vw 0;
}

.todoAddEr {
  width: 70%;
}

.todoAddBt {
  color: black;
  font-size: 1.3vw;
  font-weight: bold;
  background-color: #fff;
  border: none;
}
</style>
