<template>
  <div id="app" class="text-gray-900 bg-gray-300 h-screen pt-16">
    <div class="max-w-sm mx-auto py-6 px-4 bg-white shadow-lg rounded">
      <div class="flex justify-between items-center px-3">
        <h1 class="text-2xl font-bold">Todos</h1>

        <svg v-if="isSaving" class="w-4 h-4 opacity-75" viewBox="0 0 20 20">
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z"
          />
        </svg>
      </div>

      <div class="mt-6">
        <p class="text-gray-500 px-3" v-if="isLoading">Loading...</p>

        <div v-else>
          <ul>
            <Todo
              v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
              @change="saveTodo"
              class="my-2"
            />
          </ul>

          <div class="mt-2 flex justify-end text-sm text-gray-600">
            <p>{{ done }} / {{ total }} Done</p>
          </div>
        </div>
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
    todos: [],
    pendingOps: []
  }),

  computed: {
    isSaving() {
      return this.pendingOps.length > 0;
    },

    done() {
      return this.todos.filter(todo => todo.isDone).length;
    },

    total() {
      return this.todos.length;
    }
  },

  created() {
    axios
      .get("/api/todos")
      .then(({ data }) => {
        this.isLoading = false;
        this.todos = data.todos;
      })
      .catch(console.error);
  },

  methods: {
    async saveTodo(todo) {
      const operationId = Symbol();
      this.pendingOps.push(operationId);

      let index = this.todos.findIndex(t => t.id === todo.id);
      this.$set(this.todos, index, todo);

      await axios.patch(`/api/todos/${todo.id}`, { data: todo });

      this.pendingOps = this.pendingOps.filter(id => id !== operationId);
    }
  }
};
</script>

<style src="./assets/tailwind.css"></style>
