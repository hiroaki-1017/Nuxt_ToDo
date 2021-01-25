export const state = () => ({
  items: [],
})

export const mutations = {
  addTodo(state, text) {
    state.items.push(text)
    console.log(text)
  },
}
