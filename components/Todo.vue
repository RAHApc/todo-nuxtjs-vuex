<template>
  <div>
    <div
      class="todo-indicator"
      :class="[todo.completed ? 'bg-success' : 'bg-warning']"
    ></div>
    <div class="widget-content p-0">
      <div class="widget-content-wrapper">
        <div class="widget-content-right flex1">
          <div class="widget-heading">
            <div v-if="todo.completed">
              {{ todo.text }}
            </div>
            <div v-else>
              <del>{{ todo.text }}</del>
            </div>
          </div>
        </div>
        <div class="widget-content-left">
          <button
            class="border-0 btn-transition btn btn-outline-success"
            @click="() => $store.dispatch('todo/completedTodo', todo.id)"
          >
            <i class="fa fa-check"></i>
          </button>
          <button
            class="border-0 btn-transition btn btn-outline-danger"
            @click="() => $store.dispatch('todo/deleteTodo', todo.id)"
          >
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      id: {
        type: Number,
        require: true,
      },
      text: {
        type: String,
        require: true,
      },
      completed: {
        type: Boolean,
        require: true,
      },
    },
  }
};
</script>
