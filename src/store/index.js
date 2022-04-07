import { createStore } from 'vuex';

const store = createStore({
  state: {
    counter: 3,
    tasksList: [
      {
        id: 1,
        text: 'Run',
        completed: false,
      },
      {
        id: 2,
        text: 'Jump',
        completed: false,
      },
      {
        id: 3,
        text: 'Box',
        completed: false,
      },
    ],
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    addTask(state, payload) {
      state.counter++;
      state.tasksList.push({
        id: new Date().toISOString(),
        text: payload,
        completed: false,
      });
    },
    deleteCompletedTasks(state) {
      state.tasksList = state.tasksList.filter(item => !item.completed);
      state.counter = state.tasksList.length;
    },
    toggleActive(state, payload) {
      const id = payload;
      const currentTask = state.tasksList.find(item => item.id === id);
      currentTask.completed = !currentTask.completed;
    },
  },
  actions: {
    addTask(context, payload) {
      context.commit('addTask', payload);
    },
    deleteCompletedTasks(context) {
      context.commit('deleteCompletedTasks');
    },
    toggleActive(context, payload) {
      context.commit('toggleActive', payload);
    },
  },
  getters: {
    getFilteredList: state => filter => {
      if (filter === 'Active') {
        return state.tasksList.filter(item => !item.completed);
      }
      if (filter === 'Completed') {
        return state.tasksList.filter(item => item.completed);
      }
      return state.tasksList;
    },
    getSomeCompletedTask(state) {
      return state.tasksList.some(item => item.completed);
    },
  },
});

store.subscribe((_, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
