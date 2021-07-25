export default {
    ADD_TODO(state, payload) {
      state.todos.push(payload)
    },
    SET_ALL_TODO(state, payload) {
      state.todos = [...payload]
    }
  }
