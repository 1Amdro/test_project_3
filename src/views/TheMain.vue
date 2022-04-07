<template>
  <h1>Todo</h1>
  <the-input></the-input>
  <todo-list></todo-list>
</template>

<script>
import TheInput from '../components/TheInput.vue';
import TodoList from '../components/TodoList.vue';

export default {
  components: {
    TheInput,
    TodoList,
  },
};
</script>
