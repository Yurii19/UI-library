<template>
  <div id="app">
    <div id="nav">
      <Navbar>
        <template #brand>
          <img src="https://www.dropbox.com/s/mc8fvdgpbrcdlaq/mo.png?raw=1" height="60px" />
        </template>
        <template #menu class="menu-wrap">
          <router-link class="rl" to="/">Home</router-link>
          <router-link class="rl" to="/button">Button</router-link>
          <router-link class="rl" to="/grid">Grid</router-link>
          <router-link class="rl" to="/modal">Modal</router-link>
          <router-link class="rl" to="/carousel">Carousel</router-link>
          <router-link class="rl" to="/dataTable">Data Table</router-link>
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

body {
  background-image: url('https://www.dropbox.com/s/mtx7xxxjsuyyzuq/mainbg.jpg?raw=1');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed ;

  margin: 0;
  padding-top: 80px;  
}

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
@media (max-width: 600px) {
 .rl{
  font-weight: 100 !important;
  font-size: 0.8em;
  padding: 3px 3px 3px 0;
 } 
}
</style>
