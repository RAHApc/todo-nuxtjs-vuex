<template>
  <div class="container">
    <Todos />
    <div class="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
      <form
        class="form-inline justify-content-center"
        @submit.prevent="handleSubmit"
      >
        <div class="input-group w-100">
          <input
            type="text"
            class="form-control rounded"
            placeholder="وظیفه خود را وارد نمایید..."
            v-model="todo.text"
          />
          <div class="input-group-prepend">
            <button type="submit" class="btn btn-sm bg-transparent text-light">
              <span class="font-bold">+</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    todo: {
      id: null,
      text: "",
      completed: true,
    },
  }),
  methods: {
    handleSubmit() {
      if (this.todo.text.trim() !== "") {
        this.todo.id = Math.floor(Math.random() * 1000);
        this.$store.dispatch("todo/addTodo", this.todo);
        this.todo.id = "";
        this.todo.text = "";
      }
    },
  },
};
</script>

<style>
</style>
