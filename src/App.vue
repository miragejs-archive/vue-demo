<template>
  <div id="app" class="text-gray-900 bg-gray-300 h-screen pt-16">
    <div class="max-w-sm mx-auto py-6 px-4 bg-white shadow-lg rounded">
      <h1 class="text-2xl font-bold px-3">Todos</h1>

      <div class="mt-6">
        <p class="text-gray-500" v-if="isLoading">Loading...</p>

        <ul v-else>
          <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            class="my-2"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Todo from "./components/Todo";

export default {
  components: { Todo },

  data: () => ({
    isLoading: true,
    todos: []
  }),

  created: function() {
    axios
      .get("/api/todos")
      .then(({ data }) => {
        this.isLoading = false;
        this.todos = data.todos;
      })
      .catch(console.error);
  }
};
</script>

<style src="./assets/tailwind.css"></style>
