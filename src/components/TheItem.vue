<template>
  <li :class="{ 'no-active-item': completed }" @click="toggleActive(id)">
    <p>{{ text }}</p>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
    },
    text: {
      required: true,
      type: String,
    },
    completed: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    toggleActive(id) {
      this.$store.dispatch('toggleActive', id);
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}
.no-active-item {
  text-decoration: line-through;
  color: #2c3e50;
  border-color: #2c3e50;
}
</style>
