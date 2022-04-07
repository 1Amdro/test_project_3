<template>
  <div>
    <input @keyup.enter="addNewTask" ref="enteredText" placeholder="Add task" />
    <BaseButton @click="addNewTask">Enter</BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  methods: {
    addNewTask() {
      const text = this.$refs.enteredText;
      if (text.value.trim()) this.$store.dispatch('addTask', text.value);
      text.value = '';
      text.blur();
    },
  },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 200px 100px;
  justify-content: center;
  grid-column-gap: 20px;
}

input {
  background: linear-gradient(90deg, #7cbd9608 0%, #96c7ea 96.67%);
  width: 200px;
  height: 43px;
  outline: none;
  border: 1px solid rgb(78, 132, 191);
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 20px;
  color: #fff;
  text-align: left;
}

input:focus-visible {
  border: 1px solid #ffffff;
}
</style>
