<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="home/1/2/3">Home </router-link>
    <router-link to="services">services </router-link>
    <router-link to="About">About </router-link>
  <router-view>
  
  </router-view>
  </div>
</template>

<script>
import Todos from './components/Todos'
export default {
  name: 'App',
  components : {
    Todos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
