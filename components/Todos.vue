<template>
  <ul class="list-group list-group-flush">
    <div v-if="todos.length < 1" class="alert alert-light mt-3 w-75 mx-auto">
      <p class="text-center">هیچ وظیفه ای برای انجام ندارید.</p>
    </div>
    <div v-else>
      <li v-for="todo in todos" :key="todo.id" class="list-group-item">
        <Todo :todo="todo" />
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
};
</script>
