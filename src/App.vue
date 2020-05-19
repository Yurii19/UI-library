<template>
  <div id="app">
    <div id="nav">
      <Navbar>
        <template #brand>
          <img src="https://www.dropbox.com/s/mc8fvdgpbrcdlaq/mo.png?raw=1" height="60px" />
        </template>
        <template #menu>
          <router-link to="/">Home</router-link>|
          <!-- <router-link to="/about">About</router-link>| -->
          <router-link to="/button">Button doc</router-link>|
          <router-link to="/grid">Grid doc</router-link>|
          <router-link to="/modal">Modal doc</router-link>|
          <router-link to="/carousel">Carousel doc</router-link>|
          <router-link to="/dataTable">DataTable doc</router-link>|
        </template>
      </Navbar>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: white;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      color: #54a0ff;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
