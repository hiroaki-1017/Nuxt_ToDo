export const state = () => ({
  items: [{ id: null, label: null }],
})

export const mutations = {
  addTodo(state, text) {
    state.items.push({
      id: state.items[state.items.length - 1].id + 1,
      label: text,
    })
  },
}
