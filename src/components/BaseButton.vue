<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  width: 81px;
  height: 43px;
  background: #a5ccf9;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: aliceblue;
  transition: transform 0.1s ease-in;
}

button:active {
  transform: translateY(-10px);
}
</style>
