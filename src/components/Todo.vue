<template>
  <li
    :class="[
      {
        'bg-white border-gray-300': isFocused,
        'border-transparent': !isFocused,
        'hover:bg-gray-200': !isFocused && !isSaving
      },
      'rounded focus:bg-white border-2 flex items-center'
    ]"
  >
    <input type="checkbox" v-model="todo.isDone" class="ml-2" />

    <form @submit.prevent="save" class="w-full relative">
      <input
        type="text"
        ref="input"
        v-model="todo.text"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :disabled="isSaving"
        :class="
          `bg-transparent focus:outline-none px-3 py-1 block w-full
          ${isSaving ? 'opacity-25' : ''}
          `
        "
      />
      <span
        v-if="isFocused"
        class="absolute right-0 top-0 opacity-50 text-gray-700 mr-2 text-xs h-full flex items-center leading-none"
      >
        <EnterKey iconClass="w-12 mr-1" /> to save</span
      >
    </form>
  </li>
</template>

<script>
import EnterKey from "./icons/EnterKey";
import axios from "axios";

export default {
  components: { EnterKey },

  props: ["todo"],

  data: () => ({
    isFocused: false,
    isSaving: false
  }),

  methods: {
    async save() {
      this.isSaving = true;

      await axios.patch(`/api/todos/${this.todo.id}`, { data: this.todo });

      this.isSaving = false;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>
