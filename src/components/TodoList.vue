<template>
  <section>
    <h2>All Tasks: {{ counter }}</h2>
    <base-button
      @click="removeCompletedTasks"
      :class="{ 'no-active': !someCompleted }"
      >clear completed</base-button
    >
    <div class="wrap-filters">
      <base-button
        @click="clickFilter('All')"
        :class="{ 'filter-active': activeFilter === 'All' }"
        class="filter-button"
        >All</base-button
      >
      <base-button
        @click="clickFilter('Active')"
        :class="{ 'filter-active': activeFilter === 'Active' }"
        class="filter-button"
        >Active</base-button
      >
      <base-button
        @click="clickFilter('Completed')"
        :class="{ 'filter-active': activeFilter === 'Completed' }"
        class="filter-button"
        >Completed</base-button
      >
    </div>
    <div class="wrap">
      <ul>
        <the-item
          v-for="item in todoList"
          :key="item.id"
          :id="item.id"
          :text="item.text"
          :completed="item.completed"
        ></the-item>
      </ul>
    </div>
  </section>
</template>

<script>
import TheItem from './TheItem.vue';
import BaseButton from './BaseButton.vue';

export default {
  components: {
    TheItem,
    BaseButton,
  },
  data() {
    return {
      activeFilter: 'All',
    };
  },
  computed: {
    todoList() {
      return this.$store.getters.getFilteredList(this.activeFilter);
    },
    counter() {
      return this.$store.state.counter;
    },
    someCompleted() {
      return this.$store.getters.getSomeCompletedTask;
    },
  },
  methods: {
    removeCompletedTasks() {
      this.$store.dispatch('deleteCompletedTasks');
    },
    clickFilter(filter) {
      this.activeFilter = filter;
    },
  },
};
</script>

<style scoped>
.wrap {
  margin-top: 50px;
  border: 2px solid #025280;
  box-sizing: border-box;
  width: 300px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
}

.wrap-filters {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

.filter-button {
  background: #43373780;
}

.filter-active {
  background: #277d81;
}

h2 {
  margin-bottom: 20px;
  margin-top: 50px;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: 100px;
  justify-content: center;
  grid-row-gap: 10px;
  padding: 10px;
  overflow: auto;
  max-height: 368px;
  scrollbar-width: thin;
  scrollbar-color: #72ca8d94#3d6068de;
}

ul::-webkit-scrollbar {
  width: 7px;
  background: #3d6068de;
}
ul::-webkit-scrollbar-thumb {
  background: #72ca8d94;
}
.no-active {
  background: #86868680;
  text-decoration: line-through;
}
</style>
