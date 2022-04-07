<template>
  <router-view />
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
};
</script>

<style>
body {
  margin: 0;
  background: linear-gradient(180deg, #a6d9e9 0%, rgba(14, 80, 64, 0.82) 100%);
  padding: 30px;
  min-height: 91.7vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
