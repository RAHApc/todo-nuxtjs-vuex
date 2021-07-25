export default {
    addTodo(context, payload) {
      context.commit('ADD_TODO', {
        ...payload
      });
    },
    completedTodo(context, payload) {
      let todos = context.state.todos
      let todoIndex = todos.findIndex(todo => todo.id == payload)
      let todo = {
        ...todos[todoIndex]
      }
      todo.completed = !todo.completed
      todos[todoIndex] = todo
      context.commit('SET_ALL_TODO', [...todos]);
    },
    deleteTodo(context, id) {
      let todos = context.state.todos.filter(todo => todo.id != id);
      context.commit('SET_ALL_TODO', [...todos]);
    }
  }
